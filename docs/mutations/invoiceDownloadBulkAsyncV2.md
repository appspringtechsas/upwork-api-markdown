---
title: "invoiceDownloadBulkAsyncV2"
kind: "mutation"
gql_name: "invoiceDownloadBulkAsyncV2"
returns: "PaymentsReport"
html_id: "mutation-invoiceDownloadBulkAsyncV2"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-invoiceDownloadBulkAsyncV2"
generated_by: "scripts/convert.mjs"
---


# `invoiceDownloadBulkAsyncV2`

## Description

Generate bulk async PDFs invoice/receipt for given accounting entities as well as the given criteria.

## Response

Returns a [`PaymentsReport`](../types/PaymentsReport.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `filter` | [`InvoiceFilter`](../inputs/InvoiceFilter.md) | Invoice filter |

## Examples

### Detailed structure

#### Query

```graphql
mutation invoiceDownloadBulkAsyncV2($filter: InvoiceFilter) {
  invoiceDownloadBulkAsyncV2(filter: $filter) {
    id
    status
    downloadUrl
    expirationDateTime
  }
}
```

#### Variables

```json
{"filter": InvoiceFilter}
```

#### Response

```json
{
  "data": {
    "invoiceDownloadBulkAsyncV2": {
      "id": 4,
      "status": "xyz789",
      "downloadUrl": "xyz789",
      "expirationDateTime": "xyz789"
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-invoiceDownloadBulkAsyncV2" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [shortlistClientProposal](shortlistClientProposal.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [invoiceDownloadBulkV2](invoiceDownloadBulkV2.md) ➡️
