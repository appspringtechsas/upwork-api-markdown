---
title: "AreaFilter"
kind: "input_object"
domain: "Job Posts"
gql_name: "AreaFilter"
html_id: "definition-AreaFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-AreaFilter"
generated_by: "scripts/convert.mjs"
---


# `AreaFilter` (input object)

## Description

Geographic area filter by coordinates

## Fields

| Field | Type | Description |
|---|---|---|
| `latitude` | [`Float!`](../scalars/Float.md) | Latitude coordinate |
| `longitude` | [`Float!`](../scalars/Float.md) | Longitude coordinate |
| `radius` | [`Float!`](../scalars/Float.md) | Search radius in miles |

## Examples

### Example

```json
{"latitude": 987.65, "longitude": 123.45, "radius": 123.45}
```
