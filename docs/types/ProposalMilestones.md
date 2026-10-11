---
title: "ProposalMilestones"
kind: "object"
domain: "Proposals"
gql_name: "ProposalMilestones"
html_id: "definition-ProposalMilestones"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ProposalMilestones"
generated_by: "scripts/convert.mjs"
---


# `ProposalMilestones` (object)

## Description

Milestone defined in a proposal project plan

## Fields

| Field | Type | Description |
|---|---|---|
| `description` | [`String!`](../scalars/String.md) | Milestone description |
| `dueDate` | [`String!`](../scalars/String.md) | Due date for the milestone |
| `amount` | [`String!`](../scalars/String.md) | Payment amount for the milestone (string format pending Money type migration) |

## Examples

### Example

```json
{
  "description": "xyz789",
  "dueDate": "abc123",
  "amount": "abc123"
}
```
