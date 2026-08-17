Source for the GraphScribe documentation site.

**Version 1.0.0**: editor plugin for Unreal Engine **5.7/5.8** that exports **Blueprints**, **Widget Blueprints**, and **DataAssets** into Markdown, Mermaid, JSON, or Graphify extraction JSON so graphs and config references are readable outside the editor. DataTables are never exported.

📽 [Showcase Video](https://www.youtube.com/) <br/>
🌐 [Documentation](https://m-cool-glitch.github.io/GraphScribe-Documentation/) <br/>
🛰 [Discord](https://discord.com/invite/pFJcSHdUtQ) <br/>

## Pages

| Section   | Page                                                              | What it covers                                          |
|-----------|-------------------------------------------------------------------|---------------------------------------------------------|
| Guide     | [What is GraphScribe?](docs/guide/what-is-graphscribe.md)         | Problem, formats, why AI matters                        |
| Guide     | [Installation](docs/guide/installation.md)                        | Requirements, install from Fab, verification            |
| Guide     | [Quick Start](docs/guide/quick-start.md)                          | First export in under a minute                          |
| Guide     | [Ways to Export](docs/guide/exporting.md)                         | Single asset, folder batch, selection snippet           |
| Guide     | [Choosing a Format](docs/guide/formats.md)                        | Markdown / Mermaid / JSON / Graphify compared           |
| Guide     | [Markdown Output](docs/guide/markdown-output.md)                  | Every section of a `.md` export                         |
| Guide     | [Mermaid Diagrams](docs/guide/mermaid-output.md)                  | Reading `.mmd` flowcharts                               |
| Guide     | [JSON Output](docs/guide/json-output.md)                          | The machine-readable full dump                          |
| Guide     | [Graphify: AI-Ready Graphs](docs/guide/graphify-output.md)        | Knowledge-graph export + `ProjectLinkage.graphify.json` |
| Guide     | [Project Settings](docs/guide/settings.md)                        | All settings incl. Property Dump Mode                   |
| Reference | [Schema & Stability](docs/reference/schema.md)                    | Version stamps, ID grammar, merge contract              |
| Reference | [Supported Assets](docs/reference/supported-assets.md)            | What can/cannot be exported                             |
| Reference | [Diagnostics Codes](docs/reference/diagnostics.md)                | Structured `"diagnostics"` entries                      |
| Reference | [Changelog](docs/reference/changelog.md)                          | Release history                                         |

## Key facts (current plugin)

- **Requirements:** Unreal Engine 5.7/5.8. Editor-only, platforms Win64 / Linux.
- **Entry points:** toolbar **GraphScribe** button (Blueprint + Widget Blueprint editors), Content Browser asset right-click → **Export with GraphScribe...**, Content Browser folder right-click → **Export Blueprints with GraphScribe...**, graph node right-click → **Export Selection with GraphScribe...**.
- **Formats:** Markdown (`.md`), Mermaid (`.mmd`), JSON (`.json`), Graphify (`.graphify.json`). The export dialogs show a live preview and offer **Copy** / **Save As...**.
- **Settings** (Project Settings → Plugins → GraphScribe): Default Format (Markdown), Mermaid Warn Node Count (250), Property Dump Mode (ModifiedOnly / Full / BlueprintOnly), Default Save Directory (`Saved/GraphScribe`), Open Folder After Save (Off).
- **Schema:** JSON `schemaVersion` 1, Graphify `schemaVersion` 1, `generatorVersion` 1.0.0, optional `dumpMode` root field (`full` / `modifiedOnly` / `blueprintOnly`). Stable IDs `bp:` / `fn:` / `cls:`; merge relations closed set `calls` / `defines` / `uses` (per-asset Graphify also emits `contains`).
- **Diagnostics:** structured `"diagnostics"` array with the stable codes `collect.no_asset`, `collect.unsupported_type`, `collect.no_blueprint`, `collect.empty_graph`, `collect.empty_selection`, `collect.selection_snippet`. Markdown renders them under `## Warnings` with `[Info]` / `[Warning]` / `[Error]` badges.
- **Reference exports:** every snippet in this doc set is taken from the real output of the example content shipped with the plugin (`Content/Examples`).
