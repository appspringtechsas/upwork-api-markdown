---
title: "JobPostingLocationRequest"
kind: "input_object"
domain: "Job Posts"
gql_name: "JobPostingLocationRequest"
html_id: "definition-JobPostingLocationRequest"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingLocationRequest"
generated_by: "scripts/convert.mjs"
---


# `JobPostingLocationRequest` (input object)

## Description

Location requirement for job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `areaType` | [`AreaType`](../enums/AreaType.md) | Type of area (city, postal code, etc.) |
| `name` | [`String`](../scalars/String.md) | Location name |

## Examples

### Example

```json
{"areaType": "CITY", "name": "xyz789"}
```
