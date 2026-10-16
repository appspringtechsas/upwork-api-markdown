---
title: "RequestMetadata"
kind: "object"
domain: "Metadata"
gql_name: "RequestMetadata"
html_id: "definition-RequestMetadata"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-RequestMetadata"
generated_by: "scripts/convert.mjs"
---


# `RequestMetadata` (object)

## Description

Request metadata

## Fields

| Field | Type | Description |
|---|---|---|
| `sudo` | [`Boolean!`](../scalars/Boolean.md) | Indicates whether request is executed with elevated privileges Indicates whether request performed in sudo mode |
| `internal` | [`Boolean!`](../scalars/Boolean.md) | Indicates whether request originates from internal systems Indicates whether request performed internally |

## Examples

### Example

```json
{"sudo": false, "internal": true}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-RequestMetadata" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [Region](Region.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [TimeZoneRecord](TimeZoneRecord.md) ➡️
