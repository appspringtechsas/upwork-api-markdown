---
title: "TimeReportFilter"
kind: "input_object"
domain: "Reporting"
gql_name: "TimeReportFilter"
html_id: "definition-TimeReportFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TimeReportFilter"
generated_by: "scripts/convert.mjs"
---


# `TimeReportFilter` (input object)

## Description

Input filter used to query time reports based on organization, date range, and optional contract IDs.

## Fields

| Field | Type | Description |
|---|---|---|
| `organizationId_eq` | [`ID!`](../scalars/ID.md) | Only time reports belonging to this organization will be included. |
| `timeReportDate_bt` | [`DateTimeRange!`](DateTimeRange.md) | A date range to filter time reports by their date. |
| `contractIds` | [`[ID]`](../scalars/ID.md) | Optional list of contract IDs to filter the time reports. If provided, only reports associated with these contracts will be included. |

## Examples

### Example

```json
{
  "organizationId_eq": 4,
  "timeReportDate_bt": DateTimeRange,
  "contractIds": [4]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TimeReportFilter" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [OwnerInput](OwnerInput.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [TransactionHistoryFilter](TransactionHistoryFilter.md) ➡️
