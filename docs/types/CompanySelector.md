---
title: "CompanySelector"
kind: "object"
domain: "Users and teams"
gql_name: "CompanySelector"
html_id: "definition-CompanySelector"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CompanySelector"
generated_by: "scripts/convert.mjs"
---


# `CompanySelector` (object)

## Description

Company selector provides information on companies that user can select

## Fields

| Field | Type | Description |
|---|---|---|
| `items` | [`[CompanySelectorItem!]!`](CompanySelectorItem.md) | List of items available in company selector for the current user |

## Examples

### Example

```json
{"items": [CompanySelectorItem]}
```
