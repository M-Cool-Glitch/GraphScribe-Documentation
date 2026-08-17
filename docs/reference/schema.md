# Schema & Stability

This page documents the machine-readable contract for the **JSON** and **Graphify** formats. If you're building
tooling on top of GraphScribe (or feeding exports to an AI agent), this is what you need to know. If you just want
to read exports, you can skip this page.

## Version stamps

Every JSON and Graphify document carries identity fields at its root:

| Field              | Value                                     | Where                | Meaning                                                                          |
|--------------------|-------------------------------------------|----------------------|----------------------------------------------------------------------------------|
| `generator`        | `"GraphScribe"`                           | JSON + Graphify      | Producer name                                                                    |
| `generatorVersion` | `"1.0.0"`                                 | JSON + Graphify      | Plugin version (kept in sync with `VersionName` in `GraphScribe.uplugin`)        |
| `schemaVersion`    | `1`                                       | JSON root            | Shape of the `EmitJson` IR (variables/nodes/edges/diagnostics/…)                 |
| `schemaVersion`    | `1`                                       | Graphify root        | Shape of `EmitGraphify` + merge linkage                                          |
| `dumpMode`         | `full` / `modifiedOnly` / `blueprintOnly` | JSON + Graphify root | Optional property dump mode used for this document ([settings](/guide/settings)) |

`dumpMode` is stamped on per-asset documents only. The merged `ProjectLinkage.graphify.json` carries
`schemaVersion` / `generator` / `generatorVersion` but no `dumpMode` (a merge can combine per-asset files produced
under different modes).

Markdown and Mermaid are **not** versioned, they are human-readable views with no machine contract.
Treat their exact wording as unstable across releases.

![The version stamps at the root of a JSON export](/img/json-output-file.png)

## JSON document shape

Root fields of an `EmitJson` document (see [JSON Output](/guide/json-output) for examples):

`title`, `blueprint`, `assetPath`, `parentClass`, `isWidgetBlueprint`, `isDataAsset`, `variables[]`,
`widgetTree[]`, `animations[]`, `classRefs[]`, `nodes[]` (each with `pins[]`), `edges[]`, `diagnostics[]`.

## Graphify document shape

**Nodes** (`nodes[]`):

| Field                                                    | Meaning                                                                                                       |
|----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| `id`                                                     | Stable id to `bp:` / `fn:` / `cls:` for linkage, `var_...` for variable rows, `widget_N` for widget-tree rows |
| `label`                                                  | Display label (truncated for long variable values)                                                            |
| `file_type`                                              | Always `"code"`                                                                                               |
| `source_file`                                            | Asset path the node came from                                                                                 |
| `source_location`                                        | Optional e.g. `"Variables"`, `"ClassRefHard"`, `"Linkage"`                                                    |
| `origin` / `hasChildren` / `category` / `declaringClass` | Optional variable-row metadata                                                                                |

**Edges** (`edges[]`): `source`, `target`, `relation`, `confidence` (always `"EXTRACTED"`), `source_file`.

## The Graphify stability contract

The most important guarantees for tooling:

### 1. IDs are stable across exports

- `bp:<AssetPath>` a Blueprint or DataAsset
- `fn:<AssetPath>::<FunctionName>` a function inside an asset
- `cls:<ClassPath>` a class reference

These are derived from asset/class **identity**, not from node GUIDs or graph layout. A consumer can persist an
ID and re-resolve it after a re-export.

### 2. Relations are a closed set

The merge step only understands these relations: **`calls`**, **`defines`**, **`uses`**. Per-asset Graphify may
also emit `contains` for local structure (widget tree / variable nesting), the merge drops it. If a new relation is
ever added to the merge, that's a schema bump.

### 3. Merge is forward-compatible

`MergeGraphifyLinkage` / `MergeGraphifyLinkageFromDirectory`:

- skip malformed or empty inputs,
- deduplicate stable nodes (first one wins),
- deduplicate identical `source|relation|target` edges,
- drop edges whose endpoints aren't stable IDs,
- pass through unknown object fields.

So adding optional fields does **not** break older consumers. The batch merge re-reads every `*.graphify.json` under
the output directory (skipping `ProjectLinkage.graphify.json` itself), so folder-by-folder exports accumulate.

### 4. Diagnostics use one shape

Documents carry a `"diagnostics"` array only. There is no legacy `"warnings"` string array. See
[Diagnostics Codes](/reference/diagnostics).

## When to bump `schemaVersion`

Bump the relevant `schemaVersion` (and document it in the changelog) when a change is **not backward-compatible**
for a consumer that already parses the current shape:

- Renaming or removing a required field from `nodes` / `edges` / variables.
- Changing the meaning of an existing field (e.g. what `id` points at).
- Adding a new `relation` to the Graphify merge closed set.
- Changing the Graphify ID grammar (`bp:` / `fn:` / `cls:` prefixes or the `::` separator).

Do **not** bump for:

- Adding an **optional** field consumers can ignore (forward-compatible).
- Markdown/Mermaid wording changes.
- Bug fixes that make output match the documented shape.
- Adding a new diagnostic `code` (consumers must ignore unknown codes).

`generatorVersion` follows the plugin's semver and may move independently of `schemaVersion`. A schema bump should
also be called out in the changelog under the release that introduced it.
