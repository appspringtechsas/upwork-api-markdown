---
title: "Job"
kind: "object"
domain: "Other"
gql_name: "Job"
html_id: "definition-Job"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Job"
generated_by: "scripts/convert.mjs"
---


# `Job` (object)

## Description

Job details

## Fields

| Field | Type | Description |
|---|---|---|
| `ciphertext` | [`String`](../scalars/String.md) | Encrypted identifier for the job |
| `createdOn` | [`String`](../scalars/String.md) | Timestamp when the job was created |
| `id` | [`ID`](../scalars/ID.md) | Unique identifier for the job |
| `premium` | [`Boolean`](../scalars/Boolean.md) | Whether this is a premium job posting |
| `isPtcJob` | [`Boolean`](../scalars/Boolean.md) | Whether this is a private talent cloud job |
| `title` | [`String`](../scalars/String.md) | Title of the job posting |
| `type` | [`ContractType`](../enums/ContractType.md) | Contract type of the job (HOURLY or FIXED) |

## Examples

### Example

```json
{
  "ciphertext": "xyz789",
  "createdOn": "xyz789",
  "id": 4,
  "premium": false,
  "isPtcJob": false,
  "title": "xyz789",
  "type": "HOURLY"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Job" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [GeoLocation](GeoLocation.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [JobAttachmentInfo](JobAttachmentInfo.md) ➡️
