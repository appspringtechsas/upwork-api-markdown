---
title: "TalentWorkHistoryFilterInput"
kind: "input_object"
domain: "Talent Clouds"
gql_name: "TalentWorkHistoryFilterInput"
html_id: "definition-TalentWorkHistoryFilterInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentWorkHistoryFilterInput"
generated_by: "scripts/convert.mjs"
---


# `TalentWorkHistoryFilterInput` (input object)

## Description

Filter criteria for talent work history queries

## Fields

| Field | Type | Description |
|---|---|---|
| `personId` | [`ID!`](../scalars/ID.md) | Person identifier (required) |
| `contractIds` | [`[ID]`](../scalars/ID.md) | Filter by specific contract identifiers |
| `excludeNoFeedback` | [`Boolean`](../scalars/Boolean.md) | Exclude contracts without feedback |
| `visibility` | [`TalentWorkAccessType`](../enums/TalentWorkAccessType.md) | Filter by visibility type |
| `status` | [`[TalentContractStatus]`](../enums/TalentContractStatus.md) | Filter by contract status |
| `sort` | [`TalentWorkHistorySort`](TalentWorkHistorySort.md) | Sort configuration |
| `pagination` | [`TalentWorkHistoryPagination`](TalentWorkHistoryPagination.md) | Pagination options |

## Examples

### Example

```json
{
  "personId": 4,
  "contractIds": ["4"],
  "excludeNoFeedback": true,
  "visibility": "PUBLIC",
  "status": ["ACTIVE"],
  "sort": TalentWorkHistorySort,
  "pagination": TalentWorkHistoryPagination
}
```
