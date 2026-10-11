---
title: "FreelancerFeedback"
kind: "object"
domain: "Offers and Contracts"
gql_name: "FreelancerFeedback"
html_id: "definition-FreelancerFeedback"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerFeedback"
generated_by: "scripts/convert.mjs"
---


# `FreelancerFeedback` (object)

## Description

Freelancer's feedback details

## Fields

| Field | Type | Description |
|---|---|---|
| `score` | [`Float`](../scalars/Float.md) | Numeric rating provided by the freelancer |
| `comment` | [`String`](../scalars/String.md) | Freelancer's written comment |
| `clientResponse` | [`String`](../scalars/String.md) | Client's response to the freelancer's feedback |
| `recommendScore` | [`Int`](../scalars/Int.md) | Likelihood to recommend working with the client |

## Examples

### Example

```json
{
  "score": 987.65,
  "comment": "xyz789",
  "clientResponse": "abc123",
  "recommendScore": 987
}
```
