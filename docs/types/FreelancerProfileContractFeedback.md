---
title: "FreelancerProfileContractFeedback"
kind: "object"
domain: "Users and teams"
gql_name: "FreelancerProfileContractFeedback"
html_id: "definition-FreelancerProfileContractFeedback"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileContractFeedback"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfileContractFeedback` (object)

## Description

Contract feedback

## Fields

| Field | Type | Description |
|---|---|---|
| `score` | [`Float!`](../scalars/Float.md) | Overall feedback score |
| `comment` | [`String`](../scalars/String.md) | Optional comment from the rater |
| `publicComment` | [`Boolean!`](../scalars/Boolean.md) | Whether the comment is public |
| `response` | [`String`](../scalars/String.md) | Response from the recipient |
| `scoreDetails` | [`[FreelancerProfileContractFeedbackScore!]`](FreelancerProfileContractFeedbackScore.md) | Detailed category scores |

## Examples

### Example

```json
{
  "score": 123.45,
  "comment": "abc123",
  "publicComment": false,
  "response": "xyz789",
  "scoreDetails": [FreelancerProfileContractFeedbackScore]
}
```
