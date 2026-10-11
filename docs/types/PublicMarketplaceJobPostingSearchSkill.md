---
title: "PublicMarketplaceJobPostingSearchSkill"
kind: "object"
domain: "Search"
gql_name: "PublicMarketplaceJobPostingSearchSkill"
html_id: "definition-PublicMarketplaceJobPostingSearchSkill"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PublicMarketplaceJobPostingSearchSkill"
generated_by: "scripts/convert.mjs"
---


# `PublicMarketplaceJobPostingSearchSkill` (object)

## Description

Skill information

## Fields

| Field | Type | Description |
|---|---|---|
| `name` | [`String!`](../scalars/String.md) | Canonical/internal name of the skill (e.g., python). |
| `prettyName` | [`String!`](../scalars/String.md) | Human-readable name of the skill (e.g., Python). |
| `highlighted` | [`Boolean`](../scalars/Boolean.md) | Boolean flag for whether the skill was highlighted due to a search match. |

## Examples

### Example

```json
{
  "name": "xyz789",
  "prettyName": "xyz789",
  "highlighted": true
}
```
