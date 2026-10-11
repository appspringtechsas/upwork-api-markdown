---
title: "TalentWorkHistorySort"
kind: "input_object"
domain: "Talent Clouds"
gql_name: "TalentWorkHistorySort"
html_id: "definition-TalentWorkHistorySort"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentWorkHistorySort"
generated_by: "scripts/convert.mjs"
---


# `TalentWorkHistorySort` (input object)

## Description

Sort configuration for work history

## Fields

| Field | Type | Description |
|---|---|---|
| `type` | [`TalentWorkHistorySortType!`](../enums/TalentWorkHistorySortType.md) | Sort type |
| `order` | [`SortOrder!`](../enums/SortOrder.md) | Sort order (ascending or descending) |

## Examples

### Example

```json
{"type": "NEWEST", "order": "ASC"}
```
