---
title: "PaymentsReport"
kind: "object"
domain: "Other"
gql_name: "PaymentsReport"
html_id: "definition-PaymentsReport"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PaymentsReport"
generated_by: "scripts/convert.mjs"
---


# `PaymentsReport` (object)

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID`](../scalars/ID.md) | Unique identifier of the async report job |
| `status` | [`String`](../scalars/String.md) | Current processing status of the report job. |
| `downloadUrl` | [`String`](../scalars/String.md) | URL to download the generated archive. |
| `expirationDateTime` | [`String`](../scalars/String.md) | URL expiration date |

## Examples

### Example

```json
{
  "id": "4",
  "status": "abc123",
  "downloadUrl": "xyz789",
  "expirationDateTime": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PaymentsReport" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [JobSegmentation](JobSegmentation.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [PersonSavedJob](PersonSavedJob.md) ➡️
