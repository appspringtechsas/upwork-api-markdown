---
title: "MarketplaceProposalRequirements"
kind: "object"
domain: "Job Posts"
gql_name: "MarketplaceProposalRequirements"
html_id: "definition-MarketplaceProposalRequirements"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplaceProposalRequirements"
generated_by: "scripts/convert.mjs"
---


# `MarketplaceProposalRequirements` (object)

## Description

Proposal requirements for a marketplace job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `coverLetterRequired` | [`Boolean`](../scalars/Boolean.md) | Whether cover letter is required |
| `freelancerMilestonesAllowed` | [`Boolean`](../scalars/Boolean.md) | Whether freelancer can propose milestones |
| `screeningQuestions` | [`[MarketplaceQuestion!]`](MarketplaceQuestion.md) | List of screening questions |

## Examples

### Example

```json
{
  "coverLetterRequired": true,
  "freelancerMilestonesAllowed": false,
  "screeningQuestions": [MarketplaceQuestion]
}
```
