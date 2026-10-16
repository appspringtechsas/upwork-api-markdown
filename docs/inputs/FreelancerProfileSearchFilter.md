---
title: "FreelancerProfileSearchFilter"
kind: "input_object"
domain: "Search"
gql_name: "FreelancerProfileSearchFilter"
html_id: "definition-FreelancerProfileSearchFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileSearchFilter"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfileSearchFilter` (input object)

## Description

Filter for searching freelancer profiles

## Fields

| Field | Type | Description |
|---|---|---|
| `userType` | [`FreelancerProfileSearchUserTypeEnum!`](../enums/FreelancerProfileSearchUserTypeEnum.md) | Type of user to search (freelancer or client) |
| `weightedOntologyIds` | [`[FreelancerProfileSearchWeightedOntologyIdInput]`](FreelancerProfileSearchWeightedOntologyIdInput.md) | Weighted ontology identifiers |
| `keyword` | [`String`](../scalars/String.md) | Modifier which provides a boost to the search |
| `occupationIds` | [`[String]`](../scalars/String.md) | Occupation identifiers that need to be selected |
| `location` | [`FreelancerProfileSearchLocationInput`](FreelancerProfileSearchLocationInput.md) | Location of the freelancer |

## Examples

### Example

```json
{
  "userType": "Freelancer",
  "weightedOntologyIds": [
    FreelancerProfileSearchWeightedOntologyIdInput
  ],
  "keyword": "abc123",
  "occupationIds": ["xyz789"],
  "location": FreelancerProfileSearchLocationInput
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileSearchFilter" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [FreelancerProfileSearchAreaInput](FreelancerProfileSearchAreaInput.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [FreelancerProfileSearchLocationInput](FreelancerProfileSearchLocationInput.md) ➡️
