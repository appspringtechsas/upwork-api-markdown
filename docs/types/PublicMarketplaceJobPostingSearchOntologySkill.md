---
title: "PublicMarketplaceJobPostingSearchOntologySkill"
kind: "object"
domain: "Search"
gql_name: "PublicMarketplaceJobPostingSearchOntologySkill"
html_id: "definition-PublicMarketplaceJobPostingSearchOntologySkill"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PublicMarketplaceJobPostingSearchOntologySkill"
generated_by: "scripts/convert.mjs"
---


# `PublicMarketplaceJobPostingSearchOntologySkill` (object)

## Description

Ontology skill information

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID`](../scalars/ID.md) | Skill identifier |
| `prefLabel` | [`String`](../scalars/String.md) | Preferred label for a skill |
| `highlighted` | [`Boolean`](../scalars/Boolean.md) | Boolean flag for whether the skill was highlighted due to a search match |
| `freeText` | [`String`](../scalars/String.md) | Unstructured custom skill or term added by the client |

## Examples

### Example

```json
{
  "id": "4",
  "prefLabel": "xyz789",
  "highlighted": true,
  "freeText": "xyz789"
}
```
