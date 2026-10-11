---
title: "ContractProposalHourlyTermsInput"
kind: "input_object"
domain: "Other"
gql_name: "ContractProposalHourlyTermsInput"
html_id: "definition-ContractProposalHourlyTermsInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ContractProposalHourlyTermsInput"
generated_by: "scripts/convert.mjs"
---


# `ContractProposalHourlyTermsInput` (input object)

## Fields

| Field | Type | Description |
|---|---|---|
| `amount` | [`MoneyInput!`](MoneyInput.md) | Vendor hourly rate |
| `weeklyLimit` | [`Int`](../scalars/Int.md) | Weekly limit in hours. 0 means no hours can be billed; null means no limit |
| `startDate` | [`String`](../scalars/String.md) | Contract start date. If not set, the contract will start immediately after acceptance |

## Examples

### Example

```json
{
  "amount": MoneyInput,
  "weeklyLimit": 987,
  "startDate": "xyz789"
}
```
