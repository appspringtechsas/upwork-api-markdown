---
title: "I18nSettings"
kind: "object"
domain: "Users and teams"
gql_name: "I18nSettings"
html_id: "definition-I18nSettings"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-I18nSettings"
generated_by: "scripts/convert.mjs"
---


# `I18nSettings` (object)

## Description

User's i18n entity

## Fields

| Field | Type | Description |
|---|---|---|
| `countrySupported` | [`Boolean`](../scalars/Boolean.md) | Whether the user's country is supported for i18n features |
| `location` | [`I18nLocation`](I18nLocation.md) | Location information for i18n settings |
| `status` | [`I18nSettingsStatus`](../enums/I18nSettingsStatus.md) | Current i18n eligibility status |
| `locationViewType` | [`LocationViewType`](../enums/LocationViewType.md) | How location should be displayed to the user |
| `userPreferredLocationType` | [`UserPreferredLocationType`](../enums/UserPreferredLocationType.md) | User's preferred location type preference |
| `settingsFlags` | [`I18nSettingsFlags`](I18nSettingsFlags.md) | Collection of i18n feature flags |

## Examples

### Example

```json
{
  "countrySupported": false,
  "location": I18nLocation,
  "status": "ELIGIBLE",
  "locationViewType": "COUNTRY",
  "userPreferredLocationType": "WORLD",
  "settingsFlags": I18nSettingsFlags
}
```
