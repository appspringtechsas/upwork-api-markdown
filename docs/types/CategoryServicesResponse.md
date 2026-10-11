---
title: "CategoryServicesResponse"
kind: "object"
domain: "Ontology"
gql_name: "CategoryServicesResponse"
html_id: "definition-CategoryServicesResponse"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CategoryServicesResponse"
generated_by: "scripts/convert.mjs"
---


# `CategoryServicesResponse` (object)

## Fields

| Field | Type | Description |
|---|---|---|
| `categories` | [`[Occupation!]!`](Occupation.md) | List of category occupations |
| `categoryServices` | [`[StringMapOccupation!]!`](StringMapOccupation.md) | Map of categories to their services |

## Examples

### Example

```json
{
  "categories": [Occupation],
  "categoryServices": [StringMapOccupation]
}
```
