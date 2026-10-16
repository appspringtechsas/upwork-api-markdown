---
title: "ContractProposalsListItem"
kind: "object"
domain: "Other"
gql_name: "ContractProposalsListItem"
html_id: "definition-ContractProposalsListItem"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ContractProposalsListItem"
generated_by: "scripts/convert.mjs"
---


# `ContractProposalsListItem` (object)

## Description

Contract proposal list item

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | ID |
| `agencyTeamId` | [`ID`](../scalars/ID.md) | Agency team ID |
| `referenceContractRid` | [`ID`](../scalars/ID.md) | Reference contract rid |
| `offerDetails` | [`ContractProposalsOfferDetails`](ContractProposalsOfferDetails.md) | Offer details |
| `client` | [`ContractProposalsClient`](ContractProposalsClient.md) | Client |
| `createdDate` | [`String`](../scalars/String.md) | Created date |

## Examples

### Example

```json
{
  "id": 4,
  "agencyTeamId": 4,
  "referenceContractRid": 4,
  "offerDetails": ContractProposalsOfferDetails,
  "client": ContractProposalsClient,
  "createdDate": "xyz789"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ContractProposalsListItem" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ContractProposalsClient](ContractProposalsClient.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ContractProposalsOfferDetails](ContractProposalsOfferDetails.md) ➡️
