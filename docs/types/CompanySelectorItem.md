---
title: "CompanySelectorItem"
kind: "object"
domain: "Users and teams"
gql_name: "CompanySelectorItem"
html_id: "definition-CompanySelectorItem"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CompanySelectorItem"
generated_by: "scripts/convert.mjs"
---


# `CompanySelectorItem` (object)

## Description

Item available in company selector. Please, note that this structure uses terms that might be similar to terms used in other cases. However, fields of this structure are only used to build company selector and are not meant to be used otherwise.

## Fields

| Field | Type | Description |
|---|---|---|
| `title` | [`String!`](../scalars/String.md) | The title of this item. May or may not be the same as the organization"s name. |
| `photoUrl` | [`String`](../scalars/String.md) | The URL of the thumbnail image for this item. May or may not be the same as the organization"s photo URL. |
| `organizationId` | [`String!`](../scalars/String.md) | The UID of the organization this item refers to. Only used to construct links on UI |
| `organizationRid` | [`String`](../scalars/String.md) | The RID of the organization. Used to construct links on the UI. |
| `organizationType` | [`CompanySelectorOrganizationType`](../enums/CompanySelectorOrganizationType.md) | The type of the organization. |
| `organizationLegacyType` | [`CompanySelectorOrganizationLegacyType`](../enums/CompanySelectorOrganizationLegacyType.md) | The legacy type of the organization |
| `organizationEnterpriseType` | [`CompanySelectorOrganizationEnterpriseType`](../enums/CompanySelectorOrganizationEnterpriseType.md) | The enterprise type of the organization |
| `legacyEnterpriseOrganization` | [`Boolean`](../scalars/Boolean.md) | Is the organization a legacy enterprise organization. |
| `typeTitle` | [`String`](../scalars/String.md) | Contains organization type like Agency or Client |

## Examples

### Example

```json
{
  "title": "abc123",
  "photoUrl": "xyz789",
  "organizationId": "xyz789",
  "organizationRid": "abc123",
  "organizationType": "Business",
  "organizationLegacyType": "Client",
  "organizationEnterpriseType": "Standard",
  "legacyEnterpriseOrganization": true,
  "typeTitle": "xyz789"
}
```
