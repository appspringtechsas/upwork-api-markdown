---
title: "FreelancerSearchResultContractSummary"
kind: "object"
domain: "Search"
gql_name: "FreelancerSearchResultContractSummary"
html_id: "definition-FreelancerSearchResultContractSummary"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerSearchResultContractSummary"
generated_by: "scripts/convert.mjs"
---


# `FreelancerSearchResultContractSummary` (object)

## Description

Contract summary in freelancer search results

## Fields

| Field | Type | Description |
|---|---|---|
| `description` | [`String`](../scalars/String.md) | Description of the contract |
| `feedback` | [`FreelancerSearchResultContractFeedbackSummary`](FreelancerSearchResultContractFeedbackSummary.md) | Feedback given at the end of the contract by the client |
| `title` | [`String`](../scalars/String.md) | Title of the contract |
| `hourlyRate` | [`Money`](Money.md) | Hourly rate on this contract |
| `totalHours` | [`Int`](../scalars/Int.md) | Total number of hours spent on this contract |
| `totalCharges` | [`Money`](Money.md) | Total charges incurred on this contract |
| `startedDateTime` | [`String`](../scalars/String.md) | Start date of the contract |
| `endDateTime` | [`String`](../scalars/String.md) | End date of the contract |

## Examples

### Example

```json
{
  "description": "abc123",
  "feedback": FreelancerSearchResultContractFeedbackSummary,
  "title": "xyz789",
  "hourlyRate": Money,
  "totalHours": 987,
  "totalCharges": Money,
  "startedDateTime": "xyz789",
  "endDateTime": "abc123"
}
```
