---
title: "ContractProposalSourceInput"
kind: "input_object"
domain: "Other"
gql_name: "ContractProposalSourceInput"
html_id: "definition-ContractProposalSourceInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ContractProposalSourceInput"
generated_by: "scripts/convert.mjs"
---


# `ContractProposalSourceInput` (input object)

## Description

Contract proposal source. Exactly one of 'contractId' or 'roomId' properties should be set

## Fields

| Field | Type | Description |
|---|---|---|
| `contractId` | [`ID`](../scalars/ID.md) | Set when the contract proposal is created from a contract |
| `roomId` | [`ID`](../scalars/ID.md) | Set when the contract proposal is created from a Dash room |
| `useClientInfo` | [`Boolean`](../scalars/Boolean.md) | Set when the contract proposal is created without prior connection |

## Examples

### Example

```json
{
  "contractId": "4",
  "roomId": 4,
  "useClientInfo": true
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ContractProposalSourceInput" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ContractProposalRateIncreaseRequest](ContractProposalRateIncreaseRequest.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ContractProposalWithdrawRequest](ContractProposalWithdrawRequest.md) ➡️
