---
title: "OntologyElementsSearchByPrefLabelFilter"
kind: "input_object"
domain: "Ontology"
gql_name: "OntologyElementsSearchByPrefLabelFilter"
html_id: "definition-OntologyElementsSearchByPrefLabelFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OntologyElementsSearchByPrefLabelFilter"
generated_by: "scripts/convert.mjs"
---


# `OntologyElementsSearchByPrefLabelFilter` (input object)

## Fields

| Field | Type | Description |
|---|---|---|
| `preferredLabel_any` | [`String!`](../scalars/String.md) | string to search in prefLabel, up to 100 characters Example: "Jav" |
| `type` | [`OntologyEntityType`](../enums/OntologyEntityType.md) | type of element to search, one of OntologyEntityType |
| `entityStatus_eq` | [`OntologyEntityStatus`](../enums/OntologyEntityStatus.md) | `ACTIVE` |
| `sortOrder` | [`String`](../scalars/String.md) | optional parameter to specify ordering of results. If no value provided ordering is random. 'alphabet' to order results alphabetically by prefLabel 'match-start' (Default) to order results by index of filter string in prefLabel. I.e. results starting with filter will appear first. Default = `"match-start"` |
| `limit` | [`Int`](../scalars/Int.md) | `10` |
| `includeAttributeGroups` | [`Boolean`](../scalars/Boolean.md) | `false` |

## Examples

### Example

```json
{
  "preferredLabel_any": "xyz789",
  "type": "OCCUPATION",
  "entityStatus_eq": "ACTIVE",
  "sortOrder": "xyz789",
  "limit": 987,
  "includeAttributeGroups": true
}
```
