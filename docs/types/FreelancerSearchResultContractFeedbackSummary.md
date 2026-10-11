---
title: "FreelancerSearchResultContractFeedbackSummary"
kind: "object"
domain: "Search"
gql_name: "FreelancerSearchResultContractFeedbackSummary"
html_id: "definition-FreelancerSearchResultContractFeedbackSummary"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerSearchResultContractFeedbackSummary"
generated_by: "scripts/convert.mjs"
---


# `FreelancerSearchResultContractFeedbackSummary` (object)

## Description

Contract feedback summary in freelancer search results

## Fields

| Field | Type | Description |
|---|---|---|
| `publicComment` | [`Boolean`](../scalars/Boolean.md) | Boolean indicating if the feedback is public |
| `comment` | [`String`](../scalars/String.md) | Comment provided by the client |
| `score` | [`Float`](../scalars/Float.md) | Feedback score |

## Examples

### Example

```json
{
  "publicComment": false,
  "comment": "xyz789",
  "score": 987.65
}
```
