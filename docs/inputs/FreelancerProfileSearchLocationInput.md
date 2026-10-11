---
title: "FreelancerProfileSearchLocationInput"
kind: "input_object"
domain: "Search"
gql_name: "FreelancerProfileSearchLocationInput"
html_id: "definition-FreelancerProfileSearchLocationInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileSearchLocationInput"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfileSearchLocationInput` (input object)

## Fields

| Field | Type | Description |
|---|---|---|
| `country` | [`String`](../scalars/String.md) | Country name or code |
| `state` | [`String`](../scalars/String.md) | State or region |
| `city` | [`String`](../scalars/String.md) | City name |
| `area` | [`FreelancerProfileSearchAreaInput`](FreelancerProfileSearchAreaInput.md) | Geographic area to narrow the search |

## Examples

### Example

```json
{
  "country": "xyz789",
  "state": "xyz789",
  "city": "abc123",
  "area": FreelancerProfileSearchAreaInput
}
```
