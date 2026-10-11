---
title: "VisitorI18N"
kind: "object"
domain: "Metadata"
gql_name: "VisitorI18N"
html_id: "definition-VisitorI18N"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-VisitorI18N"
generated_by: "scripts/convert.mjs"
---


# `VisitorI18N` (object)

## Description

Visitor internationalization settings including location and feature flags

## Fields

| Field | Type | Description |
|---|---|---|
| `countrySupported` | [`Boolean`](../scalars/Boolean.md) | Whether the visitor's country is supported |
| `status` | [`String`](../scalars/String.md) | Current i18n status |
| `locationViewType` | [`String`](../scalars/String.md) | Type of location view to display |
| `userPreferredLocationType` | [`String`](../scalars/String.md) | User's preferred location type setting |
| `settingsFlags` | [`VisitorI18NSettings`](VisitorI18NSettings.md) | Feature flags for i18n settings |

## Examples

### Example

```json
{
  "countrySupported": false,
  "status": "xyz789",
  "locationViewType": "xyz789",
  "userPreferredLocationType": "xyz789",
  "settingsFlags": VisitorI18NSettings
}
```
