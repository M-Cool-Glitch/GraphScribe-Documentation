# Ways to Export

There are **four ways** to export with GraphScribe. Start with whichever matches what you're doing.

## 1. Export a single asset

- Open a Blueprint or Widget Blueprint → click **GraphScribe** in the toolbar → the export dialog opens with a live preview → **Copy** or **Save As...**.
- DataAssets don't have a Blueprint toolbar: right-click the asset in the Content Browser → **Export with GraphScribe...**.
- Works on Blueprints, Widget Blueprints, and DataAssets.

![The single-asset export dialog](/img/single-asset-export-menu.png)

## 2. Export selected nodes only

Sometimes you only want part of a graph, a snippet for a PR, a doc, or a question.

1. Select some nodes inside a graph.
2. Right-click → **Export Selection with GraphScribe...**

Snippet exports are smaller and focused:

- they include the selected nodes plus the owning function's entry,
- collapsed composite nodes expand to include their inner graph nodes,
- they intentionally **omit** variables, widget trees, and class references.

![Selected nodes and the Export Selection context menu entry](/img/selection-export-context.png)

## 3. Export a whole folder

This is the option for documenting a feature or your whole project, and the mode you'll use most with AI tooling.

1. In the Content Browser, right-click one or more folders → **Export Blueprints with GraphScribe...**.
2. A batch dialog (**GraphScribe Export Folder**) opens showing:
   - the selected **content path(s)**,
   - the **Format** combo,
   - an **Include subfolders** checkbox (on by default),
   - a live count, *Found N Blueprint asset(s) to export*,
   - the **Output directory** (pre-filled with your configured save directory) with a **Browse...** button.
3. Click **Export**. GraphScribe exports every supported asset with the selected format and writes a log
   (`Exported:` / `Failed:` / `Skipped:` counts, skipped assets, and every written file) plus a toast notification.

![Content Browser context menu with the GraphScribe export entries](/img/content-browser-export-menu.png)
![The batch export dialog with a completed export log](/img/batch-log-complete.png)

Notes:

- Output files mirror your Content structure: `/Game/Foo/Bar.BP_X` → `<Output Directory>/Foo/Bar/BP_X.<ext>`.
- DataTables are never gathered, Blueprints that can't be exported (e.g. interface/macro-only assets) are listed under *Skipped*.
- If you chose **Graphify**, the run also rebuilds **`ProjectLinkage.graphify.json`** at the root of the output
  directory, a single project-wide graph merged from every `*.graphify.json` already under that directory
  (so folder-by-folder exports accumulate). See [Graphify: AI-Ready Graphs](/guide/graphify-output).

## Where do files go?

- **Single asset:** you choose the location in the **Save As...** dialog, pre-filled with the directory configured in
  [Project Settings](/guide/settings).
- **Folder batch:** the **Output directory** field in the batch dialog (pre-filled from the same setting).
- **Selection:** same as single asset.
