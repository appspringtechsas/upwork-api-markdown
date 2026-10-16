---
title: "TalentProfileOtherExperience"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentProfileOtherExperience"
html_id: "definition-TalentProfileOtherExperience"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentProfileOtherExperience"
generated_by: "scripts/convert.mjs"
---


# `TalentProfileOtherExperience` (object)

## Description

Other professional experience not categorized elsewhere

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Experience identifier |
| `personId` | [`ID`](../scalars/ID.md) | Person identifier |
| `subject` | [`String`](../scalars/String.md) | Experience subject or title |
| `description` | [`String`](../scalars/String.md) | Experience description |
| `active` | [`Boolean`](../scalars/Boolean.md) | Whether experience is active |

## Examples

### Example

```json
{
  "id": "4",
  "personId": "4",
  "subject": "abc123",
  "description": "abc123",
  "active": true
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentProfileOtherExperience" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [TalentProfileList](TalentProfileList.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [TalentProfilePersonalData](TalentProfilePersonalData.md) ➡️
