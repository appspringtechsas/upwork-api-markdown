---
title: "FreelancerClientRelation"
kind: "object"
domain: "Job Posts"
gql_name: "FreelancerClientRelation"
html_id: "definition-FreelancerClientRelation"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerClientRelation"
generated_by: "scripts/convert.mjs"
---


# `FreelancerClientRelation` (object)

## Description

Relationship between a freelancer and a client

## Fields

| Field | Type | Description |
|---|---|---|
| `companyRid` | [`ID!`](../scalars/ID.md) | Client company record identifier |
| `companyName` | [`String!`](../scalars/String.md) | Client company name |
| `edcUserId` | [`ID!`](../scalars/ID.md) | EDC user identifier |
| `lastContractPlatform` | [`String!`](../scalars/String.md) | Platform of last contract |
| `lastContractRid` | [`ID!`](../scalars/ID.md) | Last contract record identifier |
| `lastContractTitle` | [`String!`](../scalars/String.md) | Title of the last contract |

## Examples

### Example

```json
{
  "companyRid": 4,
  "companyName": "abc123",
  "edcUserId": 4,
  "lastContractPlatform": "xyz789",
  "lastContractRid": "4",
  "lastContractTitle": "xyz789"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerClientRelation" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [FixedPriceContractTerms](FixedPriceContractTerms.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [HourlyContractTerms](HourlyContractTerms.md) ➡️
