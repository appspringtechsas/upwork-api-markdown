---
title: "ContractTerms"
kind: "object"
domain: "Offers and Contracts"
gql_name: "ContractTerms"
html_id: "definition-ContractTerms"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ContractTerms"
generated_by: "scripts/convert.mjs"
---


# `ContractTerms` (object)

## Description

Contract terms grouped by engagement model

## Fields

| Field | Type | Description |
|---|---|---|
| `fixedPriceTerms` | [`[FixedPriceContractTerm]`](FixedPriceContractTerm.md) | Fixed-price terms history |
| `hourlyTerms` | [`[HourlyContractTerm]`](HourlyContractTerm.md) | Hourly terms history |
| `stipendTerms` | [`[StipendContractTerm]`](StipendContractTerm.md) | Stipend terms history |

## Examples

### Example

```json
{
  "fixedPriceTerms": [FixedPriceContractTerm],
  "hourlyTerms": [HourlyContractTerm],
  "stipendTerms": [StipendContractTerm]
}
```
