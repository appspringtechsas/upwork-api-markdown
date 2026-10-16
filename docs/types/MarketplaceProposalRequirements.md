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
  "coverLetterRequired": false,
  "freelancerMilestonesAllowed": false,
  "screeningQuestions": [MarketplaceQuestion]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplaceProposalRequirements" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [MarketplacePostingWorkFlowState](MarketplacePostingWorkFlowState.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [MarketplacePublicCompanyInfo](MarketplacePublicCompanyInfo.md) ➡️
