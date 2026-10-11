---
title: "UpdateOrganizationInput"
kind: "input_object"
domain: "Users and teams"
gql_name: "UpdateOrganizationInput"
html_id: "definition-UpdateOrganizationInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-UpdateOrganizationInput"
generated_by: "scripts/convert.mjs"
---


# `UpdateOrganizationInput` (input object)

## Description

Input for updating an existing organization

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID`](../scalars/ID.md) | Organization identifier |
| `parentOrganizationId` | [`ID`](../scalars/ID.md) | Parent organization identifier |
| `organizationName` | [`String!`](../scalars/String.md) | Updated organization name |
| `hidden` | [`Boolean`](../scalars/Boolean.md) | Whether the organization is hidden |
| `address` | [`OrganizationLocationInput`](OrganizationLocationInput.md) | Updated address information |
| `vatId` | [`String`](../scalars/String.md) | VAT/tax identifier |
| `phoneNumber` | [`String`](../scalars/String.md) | Phone number |
| `countryPhoneCode2` | [`String`](../scalars/String.md) | Country phone code |
| `timezone` | [`String`](../scalars/String.md) | Timezone |

## Examples

### Example

```json
{
  "id": "4",
  "parentOrganizationId": "4",
  "organizationName": "abc123",
  "hidden": false,
  "address": OrganizationLocationInput,
  "vatId": "abc123",
  "phoneNumber": "xyz789",
  "countryPhoneCode2": "abc123",
  "timezone": "xyz789"
}
```
