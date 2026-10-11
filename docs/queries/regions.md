---
title: "regions"
kind: "query"
gql_name: "regions"
returns: "[Region!]"
html_id: "query-regions"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-regions"
generated_by: "scripts/convert.mjs"
---


# `regions`

## Description

Get the list of regions

## Required Permissions

"Common Functionality - Read And Write Access"

## Response

Returns [`[Region!]`](../types/Region.md)

## Examples

### Detailed structure

#### Query

```graphql
query regions {
  regions {
    id
    name
    parentRegion {
      ...RegionFragment
    }
  }
}
```

#### Response

```json
{
  "data": {
    "regions": [
      {
        "id": 4,
        "name": "xyz789",
        "parentRegion": Region
      }
    ]
  }
}
```
