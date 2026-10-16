---
title: "I18nSettingsFlags"
kind: "object"
domain: "Users and teams"
gql_name: "I18nSettingsFlags"
html_id: "definition-I18nSettingsFlags"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-I18nSettingsFlags"
generated_by: "scripts/convert.mjs"
---


# `I18nSettingsFlags` (object)

## Description

A set of i18n flags/checks

## Fields

| Field | Type | Description |
|---|---|---|
| `showDomesticLocationFilterOnFLSearch` | [`Boolean`](../scalars/Boolean.md) | Whether to show domestic location filter on freelancer search |
| `showJobSearch` | [`Boolean`](../scalars/Boolean.md) | Whether to show job search functionality |
| `showPhoneVerification` | [`Boolean`](../scalars/Boolean.md) | Whether to show phone verification option |
| `showSmfToUpdateAddress` | [`Boolean`](../scalars/Boolean.md) | Whether to show site message to update address |
| `showPersonalAddressAutocomplete` | [`Boolean`](../scalars/Boolean.md) | Whether to show personal address autocomplete |
| `showMessageContainer` | [`Boolean`](../scalars/Boolean.md) | Whether to show message container |
| `showLocationPreferenceOnJobPost` | [`Boolean`](../scalars/Boolean.md) | Whether to show location preference on job post |
| `defaultDomesticEnabled` | [`Boolean`](../scalars/Boolean.md) | Whether domestic filtering is enabled by default |
| `jobSearchDefaultedToON` | [`Boolean`](../scalars/Boolean.md) | Whether job search is defaulted to ON |
| `showLocationVerificationOnFWH` | [`Boolean`](../scalars/Boolean.md) | Whether to show location verification on find work home |
| `domesticEnabledForFreelancersOnFLSearch` | [`Boolean`](../scalars/Boolean.md) | Whether domestic is enabled for freelancers on freelancer search |

## Examples

### Example

```json
{
  "showDomesticLocationFilterOnFLSearch": true,
  "showJobSearch": true,
  "showPhoneVerification": false,
  "showSmfToUpdateAddress": false,
  "showPersonalAddressAutocomplete": false,
  "showMessageContainer": false,
  "showLocationPreferenceOnJobPost": false,
  "defaultDomesticEnabled": false,
  "jobSearchDefaultedToON": false,
  "showLocationVerificationOnFWH": true,
  "domesticEnabledForFreelancersOnFLSearch": true
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-I18nSettingsFlags" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [I18nSettings](I18nSettings.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [InviteToTeamFailedResponse](InviteToTeamFailedResponse.md) ➡️
