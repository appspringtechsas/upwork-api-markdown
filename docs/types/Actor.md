---
title: "Actor"
kind: "object"
domain: "Offers and Contracts"
gql_name: "Actor"
html_id: "definition-Actor"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Actor"
generated_by: "scripts/convert.mjs"
---


# `Actor` (object)

## Description

Actor in the offer workflow

## Fields

| Field | Type | Description |
|---|---|---|
| `user` | [`ID!`](../scalars/ID.md) | User unique identifier |
| `team` | [`ID`](../scalars/ID.md) | Team organization unique identifier |
| `actorType` | [`ActorType`](../enums/ActorType.md) | Type of the actor |

## Examples

### Example

```json
{
  "user": "4",
  "team": "4",
  "actorType": "System"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Actor" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [VisitorSegment](VisitorSegment.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ClientFeedback](ClientFeedback.md) ➡️
