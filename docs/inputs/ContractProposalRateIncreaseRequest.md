---
title: "ContractProposalRateIncreaseRequest"
kind: "input_object"
domain: "Other"
gql_name: "ContractProposalRateIncreaseRequest"
html_id: "definition-ContractProposalRateIncreaseRequest"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ContractProposalRateIncreaseRequest"
generated_by: "scripts/convert.mjs"
---


# `ContractProposalRateIncreaseRequest` (input object)

## Fields

| Field | Type | Description |
|---|---|---|
| `cadenceMonths` | [`Int!`](../scalars/Int.md) | Rate increase cadence in months, 0 means Never |
| `rate` | [`String!`](../scalars/String.md) | Rate increase percentage (for example, '10.2' means 10.2%) |

## Examples

### Example

```json
{"cadenceMonths": 987, "rate": "xyz789"}
```
