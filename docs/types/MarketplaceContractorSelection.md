---
title: "MarketplaceContractorSelection"
kind: "object"
domain: "Job Posts"
gql_name: "MarketplaceContractorSelection"
html_id: "definition-MarketplaceContractorSelection"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplaceContractorSelection"
generated_by: "scripts/convert.mjs"
---


# `MarketplaceContractorSelection` (object)

## Description

Contractor selection for a marketplace job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `proposalRequirement` | [`MarketplaceProposalRequirements`](MarketplaceProposalRequirements.md) | Proposal submission requirements |
| `qualification` | [`MarketplaceQualification`](MarketplaceQualification.md) | Freelancer qualification criteria |
| `location` | [`MarketplaceLocation`](MarketplaceLocation.md) | Location constraints |

## Examples

### Example

```json
{
  "proposalRequirement": MarketplaceProposalRequirements,
  "qualification": MarketplaceQualification,
  "location": MarketplaceLocation
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplaceContractorSelection" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [MarketplaceAdditionalSearchInfo](MarketplaceAdditionalSearchInfo.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [MarketplaceContractTerms](MarketplaceContractTerms.md) ➡️
