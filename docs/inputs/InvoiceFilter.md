---
title: "InvoiceFilter"
kind: "input_object"
domain: "Reporting"
gql_name: "InvoiceFilter"
html_id: "definition-InvoiceFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-InvoiceFilter"
generated_by: "scripts/convert.mjs"
---


# `InvoiceFilter` (input object)

## Description

Input filter for findInvoices query

## Fields

| Field | Type | Description |
|---|---|---|
| `dateRange` | [`DateTimeRange`](DateTimeRange.md) | Date range to filter invoices. rangeStart and rangeEnd in ISO 8601 format (e.g., 2024-09-07). |
| `limit` | [`Int`](../scalars/Int.md) | Maximum number of invoices to include in the export. Defaults to 50. Max allowed 50. |
| `offset` | [`Int`](../scalars/Int.md) | Number of invoices to skip before the start of the result set. Defaults to 0. |
| `aceIds` | [`[ID]`](../scalars/ID.md) | List of accounting entity identifiers whose invoices have to be collected. |
| `contractIds` | [`[ID]`](../scalars/ID.md) | List of contract identifiers to filter invoices. |
| `escrowIds` | [`[ID]`](../scalars/ID.md) | List of escrow identifiers to filter invoices. |
| `organizationIds` | [`[ID]`](../scalars/ID.md) | List of organization identifiers to filter invoices. |
| `counterparties` | [`[CounterpartyInput]`](CounterpartyInput.md) | List of counterparties (clients, freelancers, or agencies) to filter invoices. Each entry contains counterpartyId and an optional contractorId if the counterparty is an agency. |
| `owners` | [`[OwnerInput]`](OwnerInput.md) | List of owners, including organization, team, and contractor. Each entry contains ownerOrgId, optional ownerTeamId, and optional ownerContractorOrgId. |
| `types` | [`[String]`](../scalars/String.md) | List of invoice types to filter by. |
| `escrowTransactions` | [`Boolean`](../scalars/Boolean.md) | When true, it includes only escrow transactions. False by default. |

## Examples

### Example

```json
{
  "dateRange": DateTimeRange,
  "limit": 987,
  "offset": 987,
  "aceIds": [4],
  "contractIds": ["4"],
  "escrowIds": ["4"],
  "organizationIds": ["4"],
  "counterparties": [CounterpartyInput],
  "owners": [OwnerInput],
  "types": ["xyz789"],
  "escrowTransactions": true
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-InvoiceFilter" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [CounterpartyInput](CounterpartyInput.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [OwnerInput](OwnerInput.md) ➡️
