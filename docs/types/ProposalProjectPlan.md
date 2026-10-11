---
title: "ProposalProjectPlan"
kind: "object"
domain: "Proposals"
gql_name: "ProposalProjectPlan"
html_id: "definition-ProposalProjectPlan"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ProposalProjectPlan"
generated_by: "scripts/convert.mjs"
---


# `ProposalProjectPlan` (object)

## Description

Project plan is a set of milestones defined by vendor

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Project plan identifier |
| `milestones` | [`[ProposalMilestones!]`](ProposalMilestones.md) | List of milestones |

## Examples

### Example

```json
{
  "id": "4",
  "milestones": [ProposalMilestones]
}
```
