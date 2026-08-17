# Graphify: AI-Ready Graphs

Graphify is the format that makes GraphScribe special. It produces a **knowledge graph** with stable links between
Blueprints and functions across your entire project.

## The problem with the other formats

Markdown, Mermaid, and JSON each describe **one asset at a time**. If you have 50 Blueprints that call each other,
you have 50 files, and nothing connects them.

- A `.uasset` is binary and AI can't read it at all.
- A pile of Markdown files is readable, but AI has to guess which Blueprints reference which. There are no actual links.

## What Graphify gives you

Every `.graphify.json` export contains:

- **Stable IDs** for every asset, function, and class:
  - `bp:/GraphScribe/Examples/BP_BaseTest.BP_BaseTest` a Blueprint or DataAsset,
  - `fn:/GraphScribe/Examples/BP_BaseTest.BP_BaseTest::Base_Function_1` a function inside an asset,
  - `cls:/Script/Engine.Actor` a class reference,
  - plus per-asset local structure nodes: `var_<Name>` (variable rows), `widget_N` (widget-tree rows),
    `comp_<Name>` (component groups), `graph_<Name>` (graph containers), and `anim_N` (widget animations).
- **Edges** that connect them:
  - `calls` this asset calls that function,
  - `defines` this asset defines that function, variable, or animation,
  - `uses` this asset references that class,
  - `contains` per-asset local structure (widget tree / variable / graph nesting). The merge step keeps only the
    cross-asset `calls` / `defines` / `uses` relations.

These IDs are **derived from the asset's path, not from random node GUIDs**, so they stay the same across re-exports.
A consumer can remember an ID today and look it up again tomorrow.

A complete real per-asset export (example content shipped with the plugin, `DA_Test.graphify.json`):

```json
{
  "schemaVersion": 1,
  "generator": "GraphScribe",
  "generatorVersion": "1.0.0",
  "dumpMode": "modifiedOnly",
  "nodes": [
    {
      "id": "bp:/GraphScribe/Examples/DA_Test.DA_Test",
      "label": "DA_Test : PDA_BaseAsset_C",
      "file_type": "code",
      "source_file": "/GraphScribe/Examples/DA_Test.DA_Test"
    },
    {
      "id": "var_Base_Bool",
      "label": "Base_Bool (bool) = True",
      "file_type": "code",
      "source_file": "/GraphScribe/Examples/DA_Test.DA_Test",
      "source_location": "Variables",
      "origin": "reflected",
      "hasChildren": false,
      "category": "Default",
      "declaringClass": "PDA_BaseAsset"
    },
    {
      "id": "cls:/GraphScribe/Examples/Data/PDA_BaseAsset.PDA_BaseAsset_C",
      "label": "PDA_BaseAsset_C @ NativeClass",
      "file_type": "code",
      "source_file": "/GraphScribe/Examples/DA_Test.DA_Test",
      "source_location": "ClassRefHard"
    }
  ],
  "edges": [
    {
      "source": "bp:/GraphScribe/Examples/DA_Test.DA_Test",
      "target": "var_Base_Bool",
      "relation": "defines",
      "confidence": "EXTRACTED",
      "source_file": "/GraphScribe/Examples/DA_Test.DA_Test"
    },
    {
      "source": "bp:/GraphScribe/Examples/DA_Test.DA_Test",
      "target": "cls:/GraphScribe/Examples/Data/PDA_BaseAsset.PDA_BaseAsset_C",
      "relation": "uses",
      "confidence": "EXTRACTED",
      "source_file": "/GraphScribe/Examples/DA_Test.DA_Test"
    }
  ],
  "diagnostics": []
}
```

*(Two more `var_` nodes and their `defines` edges condensed out of this listing.)*

The `dumpMode` field tells consumers which [property dump mode](/guide/settings) produced the variable/class-ref
content, `full`, `modifiedOnly`, or `blueprintOnly`.

## The project-wide graph

When you run a **folder batch export** with Graphify, GraphScribe merges every per-asset export into one file at the
root of the output directory:

```
ProjectLinkage.graphify.json
```

The merge re-reads **every** `*.graphify.json` already under the output directory (not just the latest batch), so
folder-by-folder exports **accumulate** into one project graph instead of overwriting each other. It deduplicates
stable nodes and identical `source|relation|target` edges, and drops edges whose endpoints aren't stable IDs.

This single file is a map of how your whole project's Blueprints connect.


## What AI can now answer

Feed `ProjectLinkage.graphify.json` to an AI coding agent or a knowledge graph tool, and it can answer questions
that are otherwise impossible to answer from the project alone. The merged graph records calls like this one
(from the shipped example's `BP_BaseTest.graphify.json`):

```json
{
  "source": "bp:/GraphScribe/Examples/BP_BaseTest.BP_BaseTest",
  "target": "fn:/GraphScribe/Examples/BP_BaseTest.BP_BaseTest::Base_Function_2",
  "relation": "calls",
  "confidence": "EXTRACTED",
  "source_file": "/GraphScribe/Examples/BP_BaseTest.BP_BaseTest"
}
```

So it can answer questions like:

- **"Who calls `Base_Function_2`?"** follow the `calls` edges backward.
- **"Which Blueprints reference this DataAsset's class?"** follow the `uses` edges.
- **"What does `Base_CallFunction` actually touch?"** walk the subgraph.

## Does it include noise?

Graphify intentionally filters out **Kismet utility noise** Branch, Sequence, Get/Set nodes, and internal
`Kismet*Library` calls. It keeps the *gameplay linkage*: which Blueprints call which functions and use which classes.
That's exactly the signal AI needs. (Markdown, Mermaid, and JSON keep the full node set; Graphify is the trimmed view.)

## How to get it

1. In the Content Browser, right-click the folder you want (e.g. the root game folder) →
   **Export Blueprints with GraphScribe...**.
2. In the batch dialog, set **Format** to **Graphify**, pick your output directory, and click **Export**.
3. GraphScribe writes one `.graphify.json` per asset **and** rebuilds `ProjectLinkage.graphify.json` from everything
   under the output directory.

For the full technical contract (schema versioning, the closed set of relations, merge behavior),
see the [Schema & Stability reference](/reference/schema).
