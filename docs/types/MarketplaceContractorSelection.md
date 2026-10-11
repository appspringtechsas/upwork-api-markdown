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
