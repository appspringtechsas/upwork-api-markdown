---
title: "FreelancerProfileEducationRecordsFilter"
kind: "input_object"
domain: "Users and teams"
gql_name: "FreelancerProfileEducationRecordsFilter"
html_id: "definition-FreelancerProfileEducationRecordsFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileEducationRecordsFilter"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfileEducationRecordsFilter` (input object)

## Description

EducationRecords related filters

## Fields

| Field | Type | Description |
|---|---|---|
| `institutionName_eq` | [`String`](../scalars/String.md) | Filter by institution name |
| `degree_eq` | [`String`](../scalars/String.md) | Filter by degree name |

## Examples

### Example

```json
{
  "institutionName_eq": "abc123",
  "degree_eq": "abc123"
}
```
