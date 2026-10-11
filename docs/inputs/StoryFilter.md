---
title: "StoryFilter"
kind: "input_object"
domain: "Users and teams"
gql_name: "StoryFilter"
html_id: "definition-StoryFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-StoryFilter"
generated_by: "scripts/convert.mjs"
---


# `StoryFilter` (input object)

## Fields

| Field | Type | Description |
|---|---|---|
| `storyCreatedDateTime_bt` | [`DateTimeRange`](DateTimeRange.md) | Returns the story crated between the given date time range |
| `pagination` | [`Pagination`](Pagination.md) | If both pagination.after and an older than value are specified, then the pagination.after takes precedence and the older than value is ignored |

## Examples

### Example

```json
{
  "storyCreatedDateTime_bt": DateTimeRange,
  "pagination": Pagination
}
```
