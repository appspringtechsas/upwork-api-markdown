---
title: "requestMetadata"
kind: "query"
gql_name: "requestMetadata"
returns: "RequestMetadata!"
html_id: "query-requestMetadata"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-requestMetadata"
generated_by: "scripts/convert.mjs"
---


# `requestMetadata`

## Description

Information about request - whether it is an internal requests, in specific mode, etc

## Required Permissions

"Common Functionality - Read And Write Access"

## Response

Returns a [`RequestMetadata!`](../types/RequestMetadata.md)

## Examples

### Detailed structure

#### Query

```graphql
query requestMetadata {
  requestMetadata {
    sudo
    internal
  }
}
```

#### Response

```json
{"data": {"requestMetadata": {"sudo": true, "internal": true}}}
```
