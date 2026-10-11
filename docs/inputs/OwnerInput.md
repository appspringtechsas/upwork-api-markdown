---
title: "OwnerInput"
kind: "input_object"
domain: "Reporting"
gql_name: "OwnerInput"
html_id: "definition-OwnerInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OwnerInput"
generated_by: "scripts/convert.mjs"
---


# `OwnerInput` (input object)

## Description

Owner input type used for filtering when requesting invoices list, bulk PDF download or CSV

## Fields

| Field | Type | Description |
|---|---|---|
| `ownerOrgId` | [`ID`](../scalars/ID.md) | ID of owner organization: agency |
| `ownerTeamId` | [`ID`](../scalars/ID.md) | ID of owner team, optionally populated if owner has teams |
| `ownerContractorOrgId` | [`ID`](../scalars/ID.md) | ID of owner contractor organization: freelancer working under agency |

## Examples

### Example

```json
{
  "ownerOrgId": "4",
  "ownerTeamId": "4",
  "ownerContractorOrgId": "4"
}
```
