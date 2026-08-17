# Choosing a Format

GraphScribe can export the same asset in four different formats. They each serve a different purpose.
Pick the one that matches what you're trying to do. You choose the format in the export dialog's **Format** combo
(you can set a [default format](/guide/settings)).

![The export dialog with the Format combo](/img/export-dialog.png)

| Format       | File extension   | Best for                                       | Readable by humans? | Readable by AI/tools? |
|--------------|------------------|------------------------------------------------|:-------------------:|:---------------------:|
| **Markdown** | `.md`            | AI agents, code review, documentation, PRs     |         Yes         |          Yes          |
| **Graphify** | `.graphify.json` | Knowledge graphs and AI agents                 |      Somewhat       |          Yes          |
| **Mermaid**  | `.mmd`           | Diagrams that render on GitHub, GitLab, Notion | Yes (as a diagram)  |          Yes          |
| **JSON**     | `.json`          | Custom tools and scripts                       |     Not really      |          Yes          |

## Markdown

The human-friendly option. Variables, functions, graphs, macros, delegates, class references, and widget trees become
clean Markdown sections. This is the format you'll read the most. See [Markdown Output](/guide/markdown-output).

## Graphify

A knowledge graph format designed for **AI and graph databases**. Unlike the other formats, Graphify:

- gives every Blueprint, function, and class a **stable ID** (`bp:` / `fn:` / `cls:`),
- records **links between assets** (`calls`, `defines`, `uses`, plus per-asset `contains`),
- can merge every exported file into one **project-wide** graph (`ProjectLinkage.graphify.json`).

This is what lets AI answer "who calls this function?" across your whole project. See [Graphify: AI-Ready Graphs](/guide/graphify-output).

## Mermaid

A flowchart description that renders as a diagram anywhere Mermaid is supported. GitHub READMEs, GitLab, Notion, and more.
Great for putting a visual of a Blueprint graph or widget hierarchy into a document. See [Mermaid Diagrams](/guide/mermaid-output).

## JSON

A complete, structured dump of everything in the asset. Nodes, pins, edges, variables, class refs, widget tree,
diagnostics, and more. Use this if you're writing your own tooling to process Blueprint data. It's verbose and not meant
to be read by people. See [JSON Output](/guide/json-output).

## Same content in every format?

Almost. Every format exports the full asset, but some things are format-specific:

- **Graphify** filters out Kismet utility noise (Branch, Sequence, Get/Set nodes, `Kismet*Library` calls) so the graph
  keeps only gameplay linkage. Markdown/Mermaid/JSON keep the full node set.
- **Selection exports** contain only the selected nodes and omit variables, widget trees, and class references in every format.
- **DataTables** are never exported in any format.

## Which one should I use?

- **Writing docs or reviewing code** → Markdown
- **Feeding AI or a knowledge base** → Graphify
- **Showing a visual diagram** → Mermaid
- **Building a tool** → JSON
