---
title: "TalentProfileUserPreferences"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentProfileUserPreferences"
html_id: "definition-TalentProfileUserPreferences"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentProfileUserPreferences"
generated_by: "scripts/convert.mjs"
---


# `TalentProfileUserPreferences` (object)

## Description

User preferences for profile visibility and privacy settings

## Fields

| Field | Type | Description |
|---|---|---|
| `visibilityLevel` | [`FreelancerProfileVisibility`](../enums/FreelancerProfileVisibility.md) | Profile visibility level (public, auth, private) |
| `hideAgencyEarnings` | [`Boolean`](../scalars/Boolean.md) | Whether to hide agency earnings from profile |
| `hideEarnings` | [`Boolean`](../scalars/Boolean.md) | Whether to hide all earnings from profile |
| `exposeFullName` | [`Boolean`](../scalars/Boolean.md) | Whether to expose full name on profile |
| `clientFeedbackOptional` | [`Boolean`](../scalars/Boolean.md) | Whether client feedback is optional |
| `contractToHire` | [`Boolean`](../scalars/Boolean.md) | Flag of whether the freelancer is open to contract to hire |

## Examples

### Example

```json
{
  "visibilityLevel": "PUBLIC",
  "hideAgencyEarnings": false,
  "hideEarnings": false,
  "exposeFullName": false,
  "clientFeedbackOptional": true,
  "contractToHire": true
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentProfileUserPreferences" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [TalentProfileSpecializedProject](TalentProfileSpecializedProject.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [TalentProjectContractLink](TalentProjectContractLink.md) ➡️
