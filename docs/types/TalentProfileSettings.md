---
title: "TalentProfileSettings"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentProfileSettings"
html_id: "definition-TalentProfileSettings"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentProfileSettings"
generated_by: "scripts/convert.mjs"
---


# `TalentProfileSettings` (object)

## Description

Profile settings and account status information

## Fields

| Field | Type | Description |
|---|---|---|
| ⚠️ `provider` | [`Boolean`](../scalars/Boolean.md) | Whether user is a service provider **⚠️ Deprecated — use idbc or legacySignalsDS** |
| ⚠️ `suspended` | [`Boolean`](../scalars/Boolean.md) | Whether account is suspended **⚠️ Deprecated — use idbc or legacySignalsDS** |
| `disabled` | [`Boolean`](../scalars/Boolean.md) | Whether account is disabled |
| `status` | [`String`](../scalars/String.md) | Current profile status |
| `updatedDateTime` | [`String`](../scalars/String.md) | Last update timestamp |

## Examples

### Example

```json
{
  "provider": true,
  "suspended": true,
  "disabled": false,
  "status": "xyz789",
  "updatedDateTime": "xyz789"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentProfileSettings" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [TalentProfileProjectTag](TalentProfileProjectTag.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [TalentProfileSpecializedProject](TalentProfileSpecializedProject.md) ➡️
