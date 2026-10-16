---
title: "ContractProposalsResult"
kind: "object"
domain: "Other"
gql_name: "ContractProposalsResult"
html_id: "definition-ContractProposalsResult"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ContractProposalsResult"
generated_by: "scripts/convert.mjs"
---


# `ContractProposalsResult` (object)

## Description

Return type of contract proposals list queries

## Fields

| Field | Type | Description |
|---|---|---|
| `contracts` | [`[ContractProposalsListItem]`](ContractProposalsListItem.md) | Contracts |
| `paging` | [`ContractProposalsPaging`](ContractProposalsPaging.md) | Paging info |

## Examples

### Example

```json
{
  "contracts": [ContractProposalsListItem],
  "paging": ContractProposalsPaging
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ContractProposalsResult" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ContractProposalsPaging](ContractProposalsPaging.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [CreateJobProposalResponse](CreateJobProposalResponse.md) ➡️
