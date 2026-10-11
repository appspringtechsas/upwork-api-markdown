---
title: "companySelector"
kind: "query"
gql_name: "companySelector"
returns: "CompanySelector!"
html_id: "query-companySelector"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-companySelector"
generated_by: "scripts/convert.mjs"
---


# `companySelector`

## Description

Company selector provides information on companies that user can select

## Required Permissions

"Common Entities - Read-Only Access"

## Response

Returns a [`CompanySelector!`](../types/CompanySelector.md)

## Examples

### Detailed structure

#### Query

```graphql
query companySelector {
  companySelector {
    items {
      ...CompanySelectorItemFragment
    }
  }
}
```

#### Response

```json
{
  "data": {
    "companySelector": {"items": [CompanySelectorItem]}
  }
}
```
