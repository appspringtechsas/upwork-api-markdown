---
title: "InvitationsSortAttribute"
kind: "input_object"
domain: "Proposals"
gql_name: "InvitationsSortAttribute"
html_id: "definition-InvitationsSortAttribute"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-InvitationsSortAttribute"
generated_by: "scripts/convert.mjs"
---


# `InvitationsSortAttribute` (input object)

## Fields

| Field | Type | Description |
|---|---|---|
| `field` | [`InvitationsSortBy!`](../enums/InvitationsSortBy.md) | Field to sort invitations by |
| `sortOrder` | [`SortOrder!`](../enums/SortOrder.md) | Sort order for the selected field |

## Examples

### Example

```json
{"field": "CREATED", "sortOrder": "ASC"}
```
