---
title: "TalentProfileIdentity"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentProfileIdentity"
html_id: "definition-TalentProfileIdentity"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentProfileIdentity"
generated_by: "scripts/convert.mjs"
---


# `TalentProfileIdentity` (object)

## Description

Profile identity information including ID and ciphertext

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`String`](../scalars/String.md) | Profile identity ID |
| `ciphertext` | [`String`](../scalars/String.md) | Encrypted profile identifier |

## Examples

### Example

```json
{
  "id": "xyz789",
  "ciphertext": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentProfileIdentity" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [TalentProfileEmploymentRecord](TalentProfileEmploymentRecord.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [TalentProfileList](TalentProfileList.md) ➡️
