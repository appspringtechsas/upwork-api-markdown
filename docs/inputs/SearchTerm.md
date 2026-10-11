---
title: "SearchTerm"
kind: "input_object"
domain: "Job Posts"
gql_name: "SearchTerm"
html_id: "definition-SearchTerm"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-SearchTerm"
generated_by: "scripts/convert.mjs"
---


# `SearchTerm` (input object)

## Fields

| Field | Type | Description |
|---|---|---|
| `andTerms_all` | [`[String!]`](../scalars/String.md) | Provides additional search terms to check for in a job detailed description. Results must contain all of the additional search terms |
| `orTerms_any` | [`[String!]`](../scalars/String.md) | Provides additional search terms to check for in a job detailed description. Results must contain at least one of the search terms |
| `exactTerms_any` | [`[String!]`](../scalars/String.md) | Identifies a phrase that all jobs in the search results must contain |
| `excludeTerms_any` | [`[String!]`](../scalars/String.md) | Identifies a word or phrase that should not appear in any job in the search results |

## Examples

### Example

```json
{
  "andTerms_all": ["abc123"],
  "orTerms_any": ["abc123"],
  "exactTerms_any": ["xyz789"],
  "excludeTerms_any": ["xyz789"]
}
```
