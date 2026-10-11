---
title: "JobPostingProposalRequirements"
kind: "object"
domain: "Job Posts"
gql_name: "JobPostingProposalRequirements"
html_id: "definition-JobPostingProposalRequirements"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingProposalRequirements"
generated_by: "scripts/convert.mjs"
---


# `JobPostingProposalRequirements` (object)

## Description

Proposal requirements for a job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `coverLetterRequired` | [`Boolean`](../scalars/Boolean.md) | Whether cover letter is required |
| `freelancerMilestonesAllowed` | [`Boolean`](../scalars/Boolean.md) | Whether freelancer can propose milestones |
| `screeningQuestions` | [`[JobPostingQuestion!]`](JobPostingQuestion.md) | List of screening questions |

## Examples

### Example

```json
{
  "coverLetterRequired": true,
  "freelancerMilestonesAllowed": false,
  "screeningQuestions": [JobPostingQuestion]
}
```
