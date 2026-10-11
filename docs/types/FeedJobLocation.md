---
title: "FeedJobLocation"
kind: "object"
domain: "Job Posts"
gql_name: "FeedJobLocation"
html_id: "definition-FeedJobLocation"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FeedJobLocation"
generated_by: "scripts/convert.mjs"
---


# `FeedJobLocation` (object)

## Description

Location information for the client

## Fields

| Field | Type | Description |
|---|---|---|
| `country` | [`String`](../scalars/String.md) | Country name |
| `city` | [`String`](../scalars/String.md) | City name |
| `state` | [`String`](../scalars/String.md) | State or region |
| `countryTimezone` | [`String`](../scalars/String.md) | Country timezone |
| `worldRegion` | [`String`](../scalars/String.md) | World region |

## Examples

### Example

```json
{
  "country": "abc123",
  "city": "xyz789",
  "state": "xyz789",
  "countryTimezone": "xyz789",
  "worldRegion": "abc123"
}
```
