# Diagnostics Codes

JSON and Graphify documents carry a `"diagnostics"` array of structured objects, so tooling can branch on a
**stable code** instead of matching free-form warning text.

Each entry looks like this:

```json
{
  "code": "collect.empty_graph",
  "severity": "info",
  "message": "No graph nodes found on this Blueprint.",
  "nodeId": "bp:/GraphScribe/Examples/Data/BP_BaseSaveTest.BP_BaseSaveTest"
}
```

| Field                | Meaning                                                                    |
|----------------------|----------------------------------------------------------------------------|
| `code`               | Stable machine code. New codes may be added over time.                     |
| `severity`           | One of `"info"`, `"warning"`, `"error"`.                                   |
| `message`            | Human-readable detail. May change across versions **never match on this**. |
| `nodeId` / `edgeKey` | Optional pointers into the document's nodes/edges.                         |

## How they appear in Markdown

The Markdown format renders the same diagnostics under a `## Warnings` section with a severity badge
(`[Info]` / `[Warning]` / `[Error]`) placed after the header, before the body sections:

```markdown
## Warnings
- [Info] collect.empty_graph: No graph nodes found on this Blueprint. (node: bp:/GraphScribe/Examples/Data/BP_BaseSaveTest.BP_BaseSaveTest)
```

The section is omitted when there are no diagnostics.

![The Warnings section of a Markdown export](/img/markdown-variables-warnings.png)

## Code catalog

| Code                        | Severity | Meaning                                                                                                                               |
|-----------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------|
| `collect.no_asset`          | error    | A null asset was passed to the collector.                                                                                             |
| `collect.unsupported_type`  | error    | The asset isn't a Blueprint, Widget Blueprint, or DataAsset.                                                                          |
| `collect.no_blueprint`      | error    | A null Blueprint was passed to the collector.                                                                                         |
| `collect.empty_graph`       | info     | The Blueprint was collected but had no graph nodes. `nodeId` is set to the asset `bp:` id so a batch merge keeps one entry per asset. |
| `collect.empty_selection`   | error    | A selection export was requested with no nodes selected.                                                                              |
| `collect.selection_snippet` | info     | A selection export succeeded; variables, widgets, and class references were omitted as expected.                                      |

Adding a new code is **not** a schema bump, consumers must ignore unknown codes gracefully.

## Deduplication during merge

`MergeGraphifyLinkage` / `MergeGraphifyLinkageFromDirectory` deduplicate diagnostics by `code|nodeId|edgeKey` across
inputs. That means a batch export that silently skips a broken asset still leaves a machine-readable signal
in `ProjectLinkage.graphify.json`.
