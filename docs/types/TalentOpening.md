---
title: "TalentOpening"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentOpening"
html_id: "definition-TalentOpening"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentOpening"
generated_by: "scripts/convert.mjs"
---


# `TalentOpening` (object)

## Description

Job opening details including title, description, and requirements

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID`](../scalars/ID.md) | Opening identifier |
| `title` | [`String`](../scalars/String.md) | Job title |
| `visibility` | [`TalentContractAccessType`](../enums/TalentContractAccessType.md) | Job visibility setting |
| `vegaJobDetails` | [`TalentVegaJobDetails`](TalentVegaJobDetails.md) | Extended job details from Vega |

## Examples

### Example

```json
{
  "id": "4",
  "title": "abc123",
  "visibility": "PUBLIC",
  "vegaJobDetails": TalentVegaJobDetails
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentOpening" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [TalentJobCategoryGroup](TalentJobCategoryGroup.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [TalentOtherCommunityCertificate](TalentOtherCommunityCertificate.md) ➡️
