---
title: "JobPostingContractorSelection"
kind: "object"
domain: "Job Posts"
gql_name: "JobPostingContractorSelection"
html_id: "definition-JobPostingContractorSelection"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingContractorSelection"
generated_by: "scripts/convert.mjs"
---


# `JobPostingContractorSelection` (object)

## Description

Contractor selection criteria for a job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `proposalRequirement` | [`JobPostingProposalRequirements`](JobPostingProposalRequirements.md) | Proposal submission requirements |
| `qualification` | [`JobPostingQualification`](JobPostingQualification.md) | Freelancer qualification criteria |
| `location` | [`JobPostingLocation`](JobPostingLocation.md) | Location constraints |

## Examples

### Example

```json
{
  "proposalRequirement": JobPostingProposalRequirements,
  "qualification": JobPostingQualification,
  "location": JobPostingLocation
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingContractorSelection" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [JobPostingContent](JobPostingContent.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [JobPostingContractTerms](JobPostingContractTerms.md) ➡️
