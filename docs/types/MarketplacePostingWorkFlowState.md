---
title: "MarketplacePostingWorkFlowState"
kind: "object"
domain: "Job Posts"
gql_name: "MarketplacePostingWorkFlowState"
html_id: "definition-MarketplacePostingWorkFlowState"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplacePostingWorkFlowState"
generated_by: "scripts/convert.mjs"
---


# `MarketplacePostingWorkFlowState` (object)

## Description

Workflow state of a marketplace job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `closeResult` | [`String`](../scalars/String.md) | Result of closing action 0: at least 1 contract 1: no contracts 2: cancelled by Upwork 3: expired due to 30 days without activity |
| `status` | [`WorkFlowStateStatus!`](../enums/WorkFlowStateStatus.md) | Current workflow status |

## Examples

### Example

```json
{
  "closeResult": "abc123",
  "status": "CLOSED"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplacePostingWorkFlowState" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [MarketplacePostingOwnership](MarketplacePostingOwnership.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [MarketplaceProposalRequirements](MarketplaceProposalRequirements.md) ➡️
