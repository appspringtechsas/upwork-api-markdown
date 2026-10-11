---
title: "invoiceDownloadBulkV2"
kind: "mutation"
gql_name: "invoiceDownloadBulkV2"
returns: "FileDownload"
html_id: "mutation-invoiceDownloadBulkV2"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-invoiceDownloadBulkV2"
generated_by: "scripts/convert.mjs"
---


# `invoiceDownloadBulkV2`

## Description

Generate bulk PDFs invoice/receipt for given accounting entities as well as the given criteria.

## Response

Returns a [`FileDownload`](../types/FileDownload.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `filter` | [`InvoiceFilter`](../inputs/InvoiceFilter.md) | Invoice filter |

## Examples

### Detailed structure

#### Query

```graphql
mutation invoiceDownloadBulkV2($filter: InvoiceFilter) {
  invoiceDownloadBulkV2(filter: $filter) {
    downloadUrl
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
    "invoiceDownloadBulkV2": {
      "downloadUrl": "abc123"
    }
  }
}
```
