# What is GraphScribe?

GraphScribe is an **editor plugin for Unreal Engine 5.7/5.8** that turns your Blueprint logic into
**text and diagrams** you can actually read and that AI tools can actually understand.

## The problem

Unreal stores Blueprints and DataAssets as `.uasset` files. Those files are:

- **Binary:** you can't read them in a text editor.
- **Hidden from AI:** coding agents and knowledge tools can't search inside them.
- **Invisible in :** pull requests show "changed a binary file", not *what* changed.

So gameplay logic that lives in Blueprint graphs is effectively locked inside the editor. To inspect a call graph,
class references, or default values, you have to open every Blueprint by hand.

## What GraphScribe does

GraphScribe exports Blueprints, Widget Blueprints, and DataAssets into formats you can put anywhere:

| Format       | What it is                                 | Good for                                             |
|--------------|--------------------------------------------|------------------------------------------------------|
| **Markdown** | Clean, human-readable text                 | AI agents, code review, documentation, pull requests |
| **Graphify** | A knowledge graph with cross-project links | AI agents, knowledge bases, graph tools              |
| **Mermaid**  | Flowchart diagrams                         | Visualizing graphs and widget trees                  |
| **JSON**     | A full structured dump of the graph        | Custom tools and scripts                             |

It takes seconds to use: open a Blueprint, click **GraphScribe** in the toolbar, and an export dialog opens with a
live preview. Pick a format, click **Copy** or **Save As...**, done.

## Main use cases

- **Understand any Blueprint project with AI.** Bought a Blueprint-only marketplace asset? Taking over a project with
  no documentation? New to Unreal and trying to figure out how a game actually works? Export the asset or the whole
  project to Markdown and Graphify, paste the exports into your favorite AI assistant, and ask about any node,
  design choice, event flow, or default value. Because the AI reads the actual exported logic, its answers match
  what's really inside the Blueprints.
- **Document without writing docs.** Export a feature's folder once and you have up-to-date, readable documentation
  for every Blueprint in it like variables, functions, graphs, and widget trees included.
- **Review Blueprint changes like code.** Commit exports next to your content, and "changed a binary file" becomes
  a diff anyone can read in a pull request.
- **Map your project's architecture.** Graphify's project-wide graph shows how your Blueprints connect which
  functions call which, which assets reference which classes in one file.

## Who it's for

- **New Unreal developers** who want to understand existing Blueprints faster.
- **Teams taking over or auditing projects** with little or no documentation.
- **Anyone feeding game logic to AI assistants** and tired of pasting screenshots or describing graphs by hand.
- **Technical artists and tools developers** who need structured Blueprint data (JSON) for custom pipelines.

No config, no scripting, no build step, just open the editor and export.

## Why it matters for AI

Plain Markdown shows you *one* Blueprint. But gameplay logic lives in **many** Blueprints that call each other.
Graphify goes one step further: it builds a **project-wide graph** with stable links between Blueprints (`bp:`),
functions (`fn:`), and classes (`cls:`), so AI can trace calls *across* your project and answer questions like:

- "Who calls this GameInstance function?"
- "Which Blueprint references this Ability?"
- "What happens when the player picks up a coin?"

That cross-project linkage is impossible to get from `.uasset` binaries or from a pile of separate Markdown files.
See [Graphify: AI-Ready Graphs](/guide/graphify-output) for the details.

## What it is NOT

GraphScribe does **not** replace the Blueprint editor. It doesn't give you an interactive "find usages" window.
It is an **export bridge**: it takes what's in the editor and makes it readable and searchable everywhere else.
