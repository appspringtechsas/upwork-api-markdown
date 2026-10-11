---
title: "CounterpartyInput"
kind: "input_object"
domain: "Reporting"
gql_name: "CounterpartyInput"
html_id: "definition-CounterpartyInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CounterpartyInput"
generated_by: "scripts/convert.mjs"
---


# `CounterpartyInput` (input object)

## Description

Counterparty input type used for filtering when requesting invoices list, bulk PDF download or CSV

## Fields

| Field | Type | Description |
|---|---|---|
| `counterpartyId` | [`ID`](../scalars/ID.md) | ID of counterparty: client, independent freelancer or agency |
| `contractorId` | [`ID`](../scalars/ID.md) | ID of contractor, optionally populated if counterparty is agency |

## Examples

### Example

```json
{"counterpartyId": 4, "contractorId": 4}
```
