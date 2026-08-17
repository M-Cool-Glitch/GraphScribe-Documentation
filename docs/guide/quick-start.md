# Quick Start

Your first export takes under a minute. Here's the whole workflow.

## Step 1: Open a Blueprint

Open any Blueprint in your project (a Character, GameMode, Actor, or even a Widget Blueprint).

## Step 2: Click GraphScribe and pick a format

In the Blueprint editor, find the **GraphScribe** button in the toolbar and click it. An export dialog opens
(titled `GraphScribe — <Asset Name>`) with a live preview of the export:

- **Format:** [Markdown](/guide/markdown-output), [Graphify](/guide/graphify-output), [Mermaid](/guide/mermaid-output), or [JSON](/guide/json-output).
- **Preview:** a read-only view of the full export in the selected format, updated live.
- **Copy:** copies the export text to the clipboard.
- **Save As...:** writes the export to a file.
- **Close:** closes the dialog.

![GraphScribe toolbar button in the Blueprint editor](/img/toolbar-button.png)

![GraphScribe export dialog with the format combo and live preview](/img/export-dialog.png)

## Step 3: Save your export

Click **Save As**. A system save dialog opens, pre-filled with your configured [save directory](/guide/settings)
and the asset name with the right extension:

- `.md` for Markdown
- `.graphify.json` for Graphify
- `.mmd` for Mermaid
- `.json` for JSON

Pick a location and confirm. If [Open Folder After Save](/guide/settings) is enabled, the editor opens the file's
folder for you.

![File explorer showing the freshly saved export file](/img/saved-files-explorer.png)

Open the Markdown file and read it. Your Blueprint's variables, functions, and graphs are all plain text now, so anyone can read them.

## What to try next

- **Export a whole folder:** Right-click a Content Browser folder → **Export Blueprints with GraphScribe...** exports every supported asset under it. See [Ways to Export](/guide/exporting).
- **Export selected nodes only:** Select some nodes in a graph, right-click, and pick **Export Selection with GraphScribe...**.
- **Read your first export:** [Markdown Output](/guide/markdown-output) explains every section you'll see.
- **See the AI-ready version:** [Graphify: AI-Ready Graphs](/guide/graphify-output) shows why the Graphify format is different from the others.
