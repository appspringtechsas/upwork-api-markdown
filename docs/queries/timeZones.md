---
title: "timeZones"
kind: "query"
gql_name: "timeZones"
returns: "[TimeZoneRecord!]!"
html_id: "query-timeZones"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-timeZones"
generated_by: "scripts/convert.mjs"
---


# `timeZones`

## Description

List of all availabe time zones

## Required Permissions

"Common Functionality - Read And Write Access"

## Response

Returns [`[TimeZoneRecord!]!`](../types/TimeZoneRecord.md)

## Examples

### Detailed structure

#### Query

```graphql
query timeZones {
  timeZones {
    timeZoneName
    timeZoneDescription
  }
}
```

#### Response

```json
{
  "data": {
    "timeZones": [
      {
        "timeZoneName": "xyz789",
        "timeZoneDescription": "abc123"
      }
    ]
  }
}
```
