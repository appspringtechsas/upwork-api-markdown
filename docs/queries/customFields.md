---
title: "customFields"
kind: "query"
gql_name: "customFields"
returns: "[CustomFields!]"
html_id: "query-customFields"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-customFields"
generated_by: "scripts/convert.mjs"
---


# `customFields`

## Description

Custom fields information

## Required Permissions

"Common Entities - Read-Only Access"

## Response

Returns [`[CustomFields!]`](../types/CustomFields.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `input` | [`CustomFieldsInput!`](../inputs/CustomFieldsInput.md) | Filters for custom fields retrieval |
| `offset` | [`Int`](../scalars/Int.md) | Pagination offset |
| `limit` | [`Int`](../scalars/Int.md) | Pagination limit |

## Examples

### Detailed structure

#### Query

```graphql
query customFields(
  $input: CustomFieldsInput!,
  $offset: Int,
  $limit: Int
) {
  customFields(
    input: $input,
    offset: $offset,
    limit: $limit
  ) {
    responseId
    id
    itemId
    typeSnap
    labelSnap
    displayValueSnap
    creator {
      ...GenericUserFragment
    }
    createdDateTime {
      ...DateTimeFragment
    }
    rollupAssignmentId
    firstContractId
    offerId
    jobPostingId
    byoInvitationId
    buyItNowId
    questionnaireResponsesId
    stale
    termSectionId
    aclSnap
  }
}
```

#### Variables

```json
{"input": CustomFieldsInput, "offset": 123, "limit": 987}
```

#### Response

```json
{
  "data": {
    "customFields": [
      {
        "responseId": "4",
        "id": "4",
        "itemId": 4,
        "typeSnap": "TEXT_FIELD",
        "labelSnap": "xyz789",
        "displayValueSnap": "xyz789",
        "creator": GenericUser,
        "createdDateTime": DateTime,
        "rollupAssignmentId": 4,
        "firstContractId": "4",
        "offerId": "4",
        "jobPostingId": 4,
        "byoInvitationId": "4",
        "buyItNowId": 4,
        "questionnaireResponsesId": 4,
        "stale": true,
        "termSectionId": 4,
        "aclSnap": "abc123"
      }
    ]
  }
}
```
