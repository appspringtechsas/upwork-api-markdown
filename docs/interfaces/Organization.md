---
title: "Organization"
kind: "interface"
domain: "Users and teams"
gql_name: "Organization"
html_id: "definition-Organization"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Organization"
generated_by: "scripts/convert.mjs"
---


# `Organization` (interface)

## Description

Base organization interface

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | ID of the current organization |
| `rid` | [`ID`](../scalars/ID.md) | Record ID of the organization |
| `legacyId` | [`ID`](../scalars/ID.md) | Legacy organization identifier |
| `name` | [`String`](../scalars/String.md) | Name of the current organization |
| `type` | [`OrganizationType`](../enums/OrganizationType.md) | Type of the Organization. Possible values are BUSINESS / SOLE_PROPRIETOR |
| `legacyType` | [`OrganizationLegacyType`](../enums/OrganizationLegacyType.md) | Legacy type of the Organization. Possible values are CLIENT / VENDOR |
| `flag` | [`OrganizationFlag`](../types/OrganizationFlag.md) | Flag associated with the Organization |
| `active` | [`Boolean`](../scalars/Boolean.md) | Indicates whether this organization is active. Applicable to a team organization. |
| `hidden` | [`Boolean`](../scalars/Boolean.md) | Indicates whether this organization/team is hidden. Applicable to a team organization. |
| `company` | [`PrivateCompanyInfo`](../types/PrivateCompanyInfo.md) | Private information about current company |
| `photoUrl` | [`String`](../scalars/String.md) | Photo URL/Logo for the organization |
| `creationDate` | [`String`](../scalars/String.md) | When the organization was created |

## Possible Types

| Value | Description |
|---|---|
| [`CurrentOrganization`](../types/CurrentOrganization.md) |
| [`GenericOrganization`](../types/GenericOrganization.md) |

## Examples

### Example

```json
{
  "id": 4,
  "rid": 4,
  "legacyId": "4",
  "name": "abc123",
  "type": "BUSINESS",
  "legacyType": "CLIENT",
  "flag": OrganizationFlag,
  "active": true,
  "hidden": true,
  "company": PrivateCompanyInfo,
  "photoUrl": "xyz789",
  "creationDate": "xyz789"
}
```
