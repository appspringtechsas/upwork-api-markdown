---
title: "TalentContract"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentContract"
html_id: "definition-TalentContract"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentContract"
generated_by: "scripts/convert.mjs"
---


# `TalentContract` (object)

## Description

Contract details including terms, status, and dates

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Contract identifier |
| `startDate` | [`String`](../scalars/String.md) | Contract start date |
| `endDate` | [`String`](../scalars/String.md) | Contract end date |
| `status` | [`TalentContractStatus`](../enums/TalentContractStatus.md) | Current contract status |
| `clientTeamId` | [`ID`](../scalars/ID.md) | Client team identifier |
| `title` | [`String`](../scalars/String.md) | Contract title |
| `terms` | [`TalentContractTerms`](TalentContractTerms.md) | Contract terms (rate, amount, type) |
| `createDate` | [`String`](../scalars/String.md) | When contract was created |
| `clientOrgId` | [`ID`](../scalars/ID.md) | Client organization identifier |

## Examples

### Example

```json
{
  "id": 4,
  "startDate": "abc123",
  "endDate": "xyz789",
  "status": "ACTIVE",
  "clientTeamId": 4,
  "title": "xyz789",
  "terms": TalentContractTerms,
  "createDate": "xyz789",
  "clientOrgId": 4
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentContract" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [TalentCommunityCertificate](TalentCommunityCertificate.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [TalentContractAggregate](TalentContractAggregate.md) ➡️
