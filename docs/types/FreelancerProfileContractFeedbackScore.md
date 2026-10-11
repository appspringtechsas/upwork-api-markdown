---
title: "FreelancerProfileContractFeedbackScore"
kind: "object"
domain: "Users and teams"
gql_name: "FreelancerProfileContractFeedbackScore"
html_id: "definition-FreelancerProfileContractFeedbackScore"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileContractFeedbackScore"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfileContractFeedbackScore` (object)

## Description

Contract feedback score

## Fields

| Field | Type | Description |
|---|---|---|
| `score` | [`Float!`](../scalars/Float.md) | Value of the category score |
| `label` | [`String!`](../scalars/String.md) | Category label |
| `description` | [`String`](../scalars/String.md) | Optional description |

## Examples

### Example

```json
{
  "score": 123.45,
  "label": "xyz789",
  "description": "abc123"
}
```
