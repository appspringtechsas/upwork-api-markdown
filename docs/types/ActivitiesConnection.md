---
title: "ActivitiesConnection"
kind: "object"
domain: "Users and teams"
gql_name: "ActivitiesConnection"
html_id: "definition-ActivitiesConnection"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ActivitiesConnection"
generated_by: "scripts/convert.mjs"
---


# `ActivitiesConnection` (object)

## Description

Paginated collection of activities

## Fields

| Field | Type | Description |
|---|---|---|
| `totalCount` | [`Int`](../scalars/Int.md) | Defines total amount of activities |
| `edges` | [`[ActivityEdge!]`](ActivityEdge.md) | Defines list of activities |
| `page` | [`Page`](Page.md) | Defines page information |

## Examples

### Example

```json
{
  "totalCount": 123,
  "edges": [ActivityEdge],
  "page": Page
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ActivitiesConnection" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [AccountProcessInstance](AccountProcessInstance.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [Activity](Activity.md) ➡️
