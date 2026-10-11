---
title: "CreateOrganizationInput"
kind: "input_object"
domain: "Users and teams"
gql_name: "CreateOrganizationInput"
html_id: "definition-CreateOrganizationInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CreateOrganizationInput"
generated_by: "scripts/convert.mjs"
---


# `CreateOrganizationInput` (input object)

## Description

Input for creating a new organization

## Fields

| Field | Type | Description |
|---|---|---|
| `parentOrganizationId` | [`ID!`](../scalars/ID.md) | Parent organization identifier |
| `organizationName` | [`String!`](../scalars/String.md) | Name of the new organization |
| `aceRid` | [`String`](../scalars/String.md) | ACE record identifier |
| `country` | [`String`](../scalars/String.md) | Country code |
| `type` | [`OrganizationRequestType`](../enums/OrganizationRequestType.md) | Type of organization to create |

## Examples

### Example

```json
{
  "parentOrganizationId": 4,
  "organizationName": "xyz789",
  "aceRid": "abc123",
  "country": "xyz789",
  "type": "AGENCY"
}
```
