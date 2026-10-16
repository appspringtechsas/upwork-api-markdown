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
  "coverLetterRequired": false,
  "freelancerMilestonesAllowed": false,
  "screeningQuestions": [JobPostingQuestion]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingProposalRequirements" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [JobPostingOwnership](JobPostingOwnership.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [JobPostingPtcInfo](JobPostingPtcInfo.md) ➡️
