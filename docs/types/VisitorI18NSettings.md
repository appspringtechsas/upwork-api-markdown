---
title: "VisitorI18NSettings"
kind: "object"
domain: "Metadata"
gql_name: "VisitorI18NSettings"
html_id: "definition-VisitorI18NSettings"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-VisitorI18NSettings"
generated_by: "scripts/convert.mjs"
---


# `VisitorI18NSettings` (object)

## Description

Feature flags controlling i18n-related UI elements

## Fields

| Field | Type | Description |
|---|---|---|
| `showDomesticLocationFilterOnFLSearch` | [`Boolean`](../scalars/Boolean.md) | Show domestic location filter on freelancer search |
| `showJobSearch` | [`Boolean`](../scalars/Boolean.md) | Show job search functionality |
| `showPhoneVerification` | [`Boolean`](../scalars/Boolean.md) | Show phone verification prompt |
| `showSmfToUpdateAddress` | [`Boolean`](../scalars/Boolean.md) | Show SMF to update address |
| `showPersonalAddressAutocomplete` | [`Boolean`](../scalars/Boolean.md) | Show personal address autocomplete |
| `showMessageContainer` | [`Boolean`](../scalars/Boolean.md) | Show message container |
| `showLocationPreferenceOnJobPost` | [`Boolean`](../scalars/Boolean.md) | Show location preference on job post |
| `defaultDomesticEnabled` | [`Boolean`](../scalars/Boolean.md) | Whether domestic location is enabled by default |
| `jobSearchDefaultedToON` | [`Boolean`](../scalars/Boolean.md) | Whether job search is defaulted to ON |
| `showLocationVerificationOnFWH` | [`Boolean`](../scalars/Boolean.md) | Show location verification on freelancer work history |
| `domesticEnabledForFreelancersOnFLSearch` | [`Boolean`](../scalars/Boolean.md) | Whether domestic is enabled for freelancers on FL search |

## Examples

### Example

```json
{
  "showDomesticLocationFilterOnFLSearch": false,
  "showJobSearch": true,
  "showPhoneVerification": false,
  "showSmfToUpdateAddress": true,
  "showPersonalAddressAutocomplete": false,
  "showMessageContainer": true,
  "showLocationPreferenceOnJobPost": false,
  "defaultDomesticEnabled": false,
  "jobSearchDefaultedToON": true,
  "showLocationVerificationOnFWH": true,
  "domesticEnabledForFreelancersOnFLSearch": true
}
```
