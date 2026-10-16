---
title: "UpdateClientProposalResult"
kind: "object"
domain: "Proposals"
gql_name: "UpdateClientProposalResult"
html_id: "definition-UpdateClientProposalResult"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-UpdateClientProposalResult"
generated_by: "scripts/convert.mjs"
---


# `UpdateClientProposalResult` (object)

## Description

Update client proposal result

## Fields

| Field | Type | Description |
|---|---|---|
| `proposal` | [`ClientProposal`](ClientProposal.md) | Updated client proposal |
| `status` | [`ProposalUpdateResultStatus!`](../enums/ProposalUpdateResultStatus.md) | Operation status |

## Examples

### Example

```json
{"proposal": ClientProposal, "status": "SUCCESS"}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-UpdateClientProposalResult" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ProposalTerms](ProposalTerms.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [VendorInvitation](VendorInvitation.md) ➡️
