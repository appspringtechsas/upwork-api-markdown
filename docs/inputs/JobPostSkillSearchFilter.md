---
title: "JobPostSkillSearchFilter"
kind: "input_object"
domain: "Other"
gql_name: "JobPostSkillSearchFilter"
html_id: "definition-JobPostSkillSearchFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostSkillSearchFilter"
generated_by: "scripts/convert.mjs"
---


# `JobPostSkillSearchFilter` (input object)

## Description

Filter for job post skill search by prefLabel (same semantics as ontologyElementsSearchByPrefLabel), with optional occupationUid to prioritize skills required by that occupation.

## Fields

| Field | Type | Description |
|---|---|---|
| `preferredLabel_any` | [`String!`](../scalars/String.md) | string to search in prefLabel, up to 100 characters Example: "Jav" |
| `type` | [`OntologyEntityType`](../enums/OntologyEntityType.md) | type of element to search, one of OntologyEntityType |
| `entityStatus_eq` | [`OntologyEntityStatus`](../enums/OntologyEntityStatus.md) | `ACTIVE` |
| `sortOrder` | [`String`](../scalars/String.md) | optional parameter to specify ordering of results. If no value provided ordering is random. 'alphabet' to order results alphabetically by prefLabel 'match-start' (Default) to order results by index of filter string in prefLabel. I.e. results starting with filter will appear first. Default = `"match-start"` |
| `limit` | [`Int`](../scalars/Int.md) | `10` |
| `includeAttributeGroups` | [`Boolean`](../scalars/Boolean.md) | `false` |
| `occupationUid` | [`ID`](../scalars/ID.md) | Optional occupation UID; when set, skills required by this occupation are ordered before other matches |

## Examples

### Example

```json
{
  "preferredLabel_any": "abc123",
  "type": "OCCUPATION",
  "entityStatus_eq": "ACTIVE",
  "sortOrder": "abc123",
  "limit": 987,
  "includeAttributeGroups": false,
  "occupationUid": "4"
}
```
