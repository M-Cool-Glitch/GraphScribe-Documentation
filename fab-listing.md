# GraphScribe, Fab Listing Content

**Status: FAB-READY**, pending the checklist items at the bottom (showcase video URL, claim verification).

Fab's description field is a **rich text editor, not Markdown**. The description below is written block-by-block with
the exact Fab style to apply to each block. Paste the text, select each block, then apply its tag.

### Formatting legend

| Tag in this doc        | Apply in Fab                                        |
|------------------------|-----------------------------------------------------|
| `[h2]…[h2]`            | Heading                                             |
| Plain line             | Paragraph                                           |
| `* ` line              | Bullet point                                        |
| (no prefix, 3 lines)   | Numbered list (Fab generates the numbers itself)    |
| `**text**`             | Bold                                                |
| `[Green]…[Green]`      | Text color → green (value propositions)             |
| `[Yellow]…[Yellow]`    | Text color → yellow (caveats/estimates)             |
| `[Red]…[Red]`          | Text color → red (hard requirements)                |

Tips:

- Paste as plain text first. If pasted content carries styles from its source, use **Clear formatting**, then apply the
  tags above.
- Consecutive `*` lines form ONE bullet list — create a single list and add items to it, not separate one-item
  lists. Same for the numbered list.
- Numbered list: do **not** type the numbers (`1- `, `2- `…) — Fab's Numbered list style generates them. Typing them
  yourself produces double numbering ("1. 1- Export…").
- Keep color purposeful: **green** = value propositions, **yellow** = caveats/estimates, **red** = hard requirements.
  More than that reads as spam.

---

## Description * (fab-ready)

📝 [h2]Unreal Blueprints, readable by humans and AI[h2]
GraphScribe exports Blueprint Graphs into clean Markdown, Graphify knowledge-graph JSON, Mermaid diagrams, and JSON.
[Green]So Blueprint logic becomes readable by humans and AI.[Green]

🤖 [h2]The main use case: Understand any Blueprint project with AI[h2]
Bought a Blueprint-only marketplace asset? Taking over a project with no documentation? New to UE and trying to figure out how a game actually works? [Green]GraphScribe is your bridge.[Green]
Export the whole project as Markdown and Graphify in under a minute.
Paste the exports into your favorite AI assistant (Claude, Cursor, etc.).
Ask any question about a specific node, a design choice, or an event flow. The AI answers from the real exported logic.
[Green]Because the AI can read the exported files, you get answers that match what's really inside the Blueprints.[Green]
No config, no scripting, no build step. Just open the editor and export.

🚀 [h2]Graphify: Project-wide knowledge graph[h2]
Graphify turns a whole codebase into an interactive knowledge graph you can explore, understand, and feed to AI.
[Green]GraphScribe is the first Unreal plugin to export Blueprints into Graphify's format[Green], so Unreal Blueprints join the knowledge-graph ecosystem.

* Plain Markdown shows you one Blueprint. Graphify builds a project-wide knowledge graph with stable links between assets (bp:), functions (fn:), and classes (cls:).
* AI agents can answer "Who calls this function?" or "Which DataAsset references this Ability?" across your whole project, impossible with .uasset binaries or a pile of separate Markdown files.
* Export folders once and **ProjectLinkage.graphify.json** is rebuilt automatically at the output root, mapping how your whole project connects. Folder-by-folder exports accumulate into the same graph.
* **Stable IDs**: bp: / fn: / cls: ids come from asset identity, not node GUIDs, so graphs stay valid across re-exports, perfect for building a persistent knowledge base.
* Graphify's interactive graph view makes your Blueprint architecture explorable like a diagram, not a dump.

🎯 [h2]One-click export[h2]
* Open a Blueprint → click the [Green]GraphScribe[Green] toolbar button → a dialog opens with a live preview → pick a format → Copy or Save As..., done.
* Right-click any Blueprint in the Content Browser → Export with GraphScribe....
* Right-click a Content Browser folder → Export Blueprints with GraphScribe...
* Select nodes in a Blueprint graph → right-click → Export Selection with GraphScribe...

📖 [h2]Readable docs, PR-ready diffs[h2]
* Variables with defaults, functions, macros, event graphs, delegates, class references, and widget trees, all in clean Markdown with a table of contents.
* **Mermaid flowcharts** that render on GitHub, GitLab, and Notion.
* "Changed a binary file" becomes "added 'Add Score' (Amount = 25)" in review.
* Widget Blueprints export the widget tree with its exact nesting, so the hierarchy reads the same as the editor.

🔢 [h2]The numbers[h2]
* A real Blueprint with 28 events and 403 nodes:
* Pasted as raw Blueprint text: ~4,500 lines and 1.3 million characters.
* Exported with GraphScribe as Markdown: ~570 lines and 23k characters, [Green]about **56x fewer characters**[Green].
* For AI tools that bill by token: roughly 325k tokens of raw text vs ~6k tokens for the GraphScribe export [Yellow](estimates, tokens ≈ characters ÷ 4)[Yellow].
* Smaller, cleaner input means **faster, more accurate AI answers**, and it easily fits in context windows.

🧰 [h2]One tool, four formats[h2]
* **Markdown** for reading, **Graphify** for AI and knowledge graphs, **Mermaid** for diagrams, and **JSON** for tools.
* Property dumps show **what you changed** in a class by default. Untouched inherited engine properties stay out of the way, which keeps exports small and AI input clean. Switch the dump mode (Modified Only / Full / Blueprint Only) in Project Settings whenever you need a different view.

📚 [h2]Learning Zone[h2]
🌐 Documentation
🎥 Showcase
🎮 Discord

[Red]Supports Unreal Engine 5.7 and 5.8.[Red] Editor plugin for Windows, Mac, and Linux. Editor-only: zero runtime cost.

---

## Short blurb (if the form shows a summary/search field)

GraphScribe exports Blueprints, Widget Blueprints, and DataAssets to Markdown, Graphify, Mermaid, and JSON, making
Unreal's binary graph logic readable by humans and AI.

---

## Listing form fields

### Product type *

**Tools and Plugins**

### Category *

**Engine Tools** (or *Editor Utilities*, pick whichever fits the Fab menu)

### Tags *

```
blueprint, documentation, editorutilities, ai, graph, dataasset, markdown, mermaid, json, export, knowledge-graph, learning, student
```

Suggested shortlist: `Blueprint`, `Documentation`, `Editorutilities`, `AI`, `Graph`, `Knowledge-graph`, `Markdown`

### Compatibility and file information

**Supported development platforms ***, the platforms the plugin can be *developed on*:

- Windows: Yes
- Mac: Yes
- Linux: Yes

**Distribution method ***, **Source code** (the plugin ships as C++ source, built with the engine it targets)

**Engine versions**, 5.7 and 5.8 (one listing/version per engine)

### Tools and plugins

**Is open source**, No

**Tool type**, **C++ classes** (GraphScribe is a C++ editor plugin)

- Number of C++ classes: **20+**
- Number of Blueprints: **5** (example content)

### Additional information

```
Features:
- Export Blueprints, Widget Blueprints, and DataAssets to Markdown, Mermaid, JSON, and Graphify knowledge-graph JSON
- First Unreal plugin to export Blueprints into Graphify's knowledge-graph format
- Graphify export with stable cross-project ids (bp: / fn: / cls:) and closed relations (calls / defines / uses)
- Project-wide ProjectLinkage.graphify.json merge on folder export (accumulates across folder-by-folder runs)
- Toolbar export with live preview dialog (Copy / Save As), Content Browser asset & folder batch export, and selection snippet export
- Markdown with TOC, signatures, warnings, class references, and readable exec-flow walks (Blueprint-style #N cites)
- Mermaid flowcharts including nested widget trees (exact UMG nesting)
- Reflected property dumps for DataAsset instances and Blueprint CDOs (container elements expanded)
- Property dump modes (Modified Only / Full / Blueprint Only) to control inherited-property noise
- Structured diagnostic codes for reliable tooling
- Editor-only: zero runtime cost

Code Modules:
- GraphScribe: Editor Module
- GraphScribeTests: Editor Module (automation tests)

Number of Blueprints: 5 (example content)
Number of C++ Classes: 20+
Network Replicated: No
Supported Development Platforms:
  Windows: Yes
  Mac: Yes
  Linux: Yes
Supported Target Build Platforms: Editor only (Windows, Mac, Linux)
```

---

## Screenshots / gallery plan

Fab gallery images (reuse the docs screenshots from
[`SCREENSHOTS.md`](SCREENSHOTS.md) where possible):

1. **Hero**, the Blueprint editor with the GraphScribe export dialog showing a live Markdown preview
   (`hero-export.png`).
2. **Toolbar**, the GraphScribe button in the Blueprint editor toolbar (`toolbar-button.png`).
3. **Markdown output**, a real `.md` export open in a text editor (`markdown-output-file.png`).
4. **Mermaid**, a rendered flowchart of an exported graph (`mermaid-rendered.png`).
5. **Batch export**, the folder batch dialog with a completed log (`batch-log-complete.png`).
6. **Project linkage**, `ProjectLinkage.graphify.json` among per-asset exports (`graphify-output-folder.png`).
7. **Settings**, the Project Settings section with the property dump modes (`project-settings.png`).

## Checklist before publishing

- [ ] Fill the **Showcase video URL** in the Learning Zone (and the listing form's media section), and fill the
      form's support/contact fields
- [ ] Confirm the "first Unreal plugin to export Blueprints to Graphify" claim before publishing
- [ ] Confirm **Is open source** (No)
- [ ] Set `MarketplaceURL` in `Plugins/GraphScribe/GraphScribe.uplugin` to the live listing URL
- [ ] Bump `VersionName` (uplugin) + `GENERATOR_VERSION` (`GraphScribeConstants.h`) to the release version and move
      CHANGELOG `[Unreleased]` → the release
- [ ] Re-verify the **"28 events / 403 nodes / 56x smaller"** numbers block before publishing (the numbers predate
      the property-dump-mode changes). Recommend re-basing it on the shipped example `BP_BaseTest`: its current export
      is **10 events, 184 nodes, 340 lines, 13,334 characters** (see `test/Exported/GraphScribe/Examples/BP_BaseTest.md`).
      The "raw Blueprint text" side of the comparison needs a fresh copy-paste of the raw nodes, then recompute the
      reduction factor and token estimates
- [ ] Decide on the **example content** shipped with the plugin (`Content/Examples`, 5 Blueprints + 2 DataAssets):
      the form fields above reflect it. If you strip it before release, set "Number of Blueprints" back to 0 and
      update the docs' `test/Exported/` references
- [ ] Publish the GraphScribe Docs site (https://mhmdalmoussawi.github.io/GraphScribe-Docs/) — revised pages live
      in `docs/`, capture the screenshot placeholders in `docs/public/img/` before going live
- [ ] Pick final **Category** and **Tags** on the Fab form
- [ ] Capture the gallery screenshots above and add them to the listing
- [ ] Push the 5.7 and 5.8 branch lines before submission

---

## Audit of the previous draft

1. **Markdown in a rich-text field**, `####`, `**`, backticks, and `[text](url)` would render literally in Fab's
   editor. Rewritten as explicit Fab block/format tags.
2. **Fake bullets**, `•` characters separated by blank lines render as disconnected paragraphs. Converted to real
   bullet-list items.
3. **Code styling**, backticks (`.uasset`, `bp:`, `Add Score (Amount = 25)`) have no Fab equivalent. Replaced with
   plain text, quotes, or bold.
4. **Inconsistent headings**, "THE NUMBERS" and "ONE TOOL, FOUR FORMATS" were bold paragraphs, `#### Learning Zone:`
   used a different level. All section titles are now real headings.
5. **Duplicated line**, "One tool, four formats" appeared as both the heading and the first bullet. De-duplicated.
6. **Unfilled placeholders**, the Learning Zone no longer carries support/email bullets — those live in the listing
   form's dedicated fields. The showcase video URL still needs filling, flagged in the checklist above.
7. **Unverified superlative**, "first Unreal plugin to export Blueprints into Graphify's format" appears twice, verify
   before publishing or Fab may reject the claim.
8. **Links**, Markdown links converted to plain URLs with a note to add a Fab hyperlink, check Fab's policy on external
   links (docs link should be fine, never link to external storefronts).
9. **Missing summary**, no short blurb existed for search/card views, added one above.
10. **Numbers check**, 1.3M ÷ 23k ≈ 56x and the ÷4 token estimates are internally consistent, no corrections needed,
    but re-verify against a current export (see checklist).
