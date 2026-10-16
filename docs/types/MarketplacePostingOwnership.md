---
title: "MarketplacePostingOwnership"
kind: "object"
domain: "Job Posts"
gql_name: "MarketplacePostingOwnership"
html_id: "definition-MarketplacePostingOwnership"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplacePostingOwnership"
generated_by: "scripts/convert.mjs"
---


# `MarketplacePostingOwnership` (object)

## Description

Ownership of a marketplace job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `company` | [`GenericOrganization`](GenericOrganization.md) | Company owning the posting. Resolves only when the requesting account belongs to this company (e.g. a client reading its own job postings) or holds internal account-management permissions; for a job posting owned by an unaffiliated organization, access is denied. |
| `team` | [`GenericOrganization`](GenericOrganization.md) | Team owning the posting |

## Examples

### Example

```json
{
  "company": GenericOrganization,
  "team": GenericOrganization
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplacePostingOwnership" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [MarketplacePostingClassification](MarketplacePostingClassification.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [MarketplacePostingWorkFlowState](MarketplacePostingWorkFlowState.md) ➡️
