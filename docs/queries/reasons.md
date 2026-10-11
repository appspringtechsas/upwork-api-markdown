---
title: "reasons"
kind: "query"
gql_name: "reasons"
returns: "[ReasonsMetadata!]!"
html_id: "query-reasons"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-reasons"
generated_by: "scripts/convert.mjs"
---


# `reasons`

## Description

Reasons for some actions. Examples - declining invitation, ending contract, withdrawing offer

## Required Permissions

"Common Functionality - Read And Write Access"

## Response

Returns [`[ReasonsMetadata!]!`](../types/ReasonsMetadata.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `reasonType` | [`ReasonType!`](../enums/ReasonType.md) | Reason category type |
| `all` | [`Boolean`](../scalars/Boolean.md) | Return all reasons (ignore visibility filters) |

## Examples

### Detailed structure

#### Query

```graphql
query reasons(
  $reasonType: ReasonType!,
  $all: Boolean
) {
  reasons(
    reasonType: $reasonType,
    all: $all
  ) {
    id
    reason
    alias
  }
}
```

#### Variables

```json
{"reasonType": "PROPOSAL_DECLINE", "all": false}
```

#### Response

```json
{
  "data": {
    "reasons": [
      {
        "id": 4,
        "reason": "abc123",
        "alias": "xyz789"
      }
    ]
  }
}
```
