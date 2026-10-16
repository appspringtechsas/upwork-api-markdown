---
title: "TalentProjectList"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentProjectList"
html_id: "definition-TalentProjectList"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentProjectList"
generated_by: "scripts/convert.mjs"
---


# `TalentProjectList` (object)

## Description

List of portfolio projects for a freelancer

## Fields

| Field | Type | Description |
|---|---|---|
| `projects` | [`[TalentProfileProject]`](TalentProfileProject.md) | Array of profile projects |
| `totalProjects` | [`Int`](../scalars/Int.md) | Total number of projects |
| `updatedDateTime` | [`String`](../scalars/String.md) | Last update timestamp |

## Examples

### Example

```json
{
  "projects": [TalentProfileProject],
  "totalProjects": 123,
  "updatedDateTime": "xyz789"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentProjectList" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [TalentProjectContractLink](TalentProjectContractLink.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [TalentPurchasedInvitationBadge](TalentPurchasedInvitationBadge.md) ➡️
