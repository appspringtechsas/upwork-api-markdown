---
title: "FreelancerProfilesSearchResultEdge"
kind: "object"
domain: "Search"
gql_name: "FreelancerProfilesSearchResultEdge"
html_id: "definition-FreelancerProfilesSearchResultEdge"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfilesSearchResultEdge"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfilesSearchResultEdge` (object)

## Description

An edge in a connection.

## Fields

| Field | Type | Description |
|---|---|---|
| `node` | [`FreelancerProfilesSearchRecordType`](../unions/FreelancerProfilesSearchRecordType.md) | The item at the end of the edge. |
| `cursor` | [`String!`](../scalars/String.md) | A cursor for use in pagination. |

## Examples

### Example

```json
{
  "node": FreelancerProfilesSearchRecord,
  "cursor": "xyz789"
}
```
