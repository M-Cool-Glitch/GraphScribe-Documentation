# Supported Assets

GraphScribe exports Blueprint assets anything that can contain functions and graphs plus DataAssets.

## What can be exported

| Asset type           | Exported content                                                                    |
|----------------------|-------------------------------------------------------------------------------------|
| **Blueprint**        | Variables, functions, macros, event graphs, delegates, class references             |
| **Widget Blueprint** | Everything in a Blueprint, plus the widget tree and animation names                 |
| **DataAsset**        | A dump of its properties and default values, plus any class references it points to |

All three export in all four formats (Markdown, Mermaid, JSON, Graphify).

Normal, const, and level Blueprints are supported, including `UBlueprint` subclasses such as
gameplay-ability Blueprints.

## What is always included

- **Variables** including default values.
- **DataAsset / CDO property dumps** the actual property defaults stored on the asset. Container elements
  (array/set/map entries) are expanded and dumped, the scope of inherited content follows the
  [Property Dump Mode](/guide/settings).
- **Class references** `TSubclassOf`, `TSoftClassPtr`, and references inside nested containers are walked and
  surfaced as `cls:` nodes in Graphify (and in the Markdown Class References section).
- **Delegates** with signature parameters and defaults.
- **Widget hierarchy** for Widget Blueprints.


## What is never exported

- **DataTables** they can be exported as `csv` or `json` natively, so GraphScribe never gathers them.
- **Blueprint comment boxes** skipped, they are not collected into the output.
- **Selection exports** deliberately omit **variables, widget trees, and class references**: a snippet is meant to
  show a piece of logic, not the whole asset.
