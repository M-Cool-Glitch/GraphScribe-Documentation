# Changelog

All notable changes to **GraphScribe** are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html) for `VersionName` in `GraphScribe.uplugin`.

Schema-version policy: a `schemaVersion` bump (see `GraphScribe::Version` in `GraphScribeConstants.h`) is recorded
under the release that introduced it. Markdown and Mermaid are unversioned views and are not tracked here.

## [1.0.0] - 2026-08

- Initial public release of GraphScribe for Unreal Engine 5.7/5.8.
- Export **Blueprints**, **Widget Blueprints**, and **DataAssets** to Markdown, Graphify, Mermaid, and JSON formats.

### Schema versions
- `JSON_SCHEMA_VERSION = 1`, `EmitJson` document shape (variables/nodes/edges/classRefs/diagnostics/...).
- `GRAPHIFY_SCHEMA_VERSION = 1`, `EmitGraphify` + `MergeGraphifyLinkage` linkage shape (nodes/edges/diagnostics).
