---
title: "TimeReportConnection"
kind: "object"
domain: "Reporting"
gql_name: "TimeReportConnection"
html_id: "definition-TimeReportConnection"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TimeReportConnection"
generated_by: "scripts/convert.mjs"
---


# `TimeReportConnection` (object)

## Description

Connection type for paginated time report results

## Fields

| Field | Type | Description |
|---|---|---|
| `totalCount` | [`Int`](../scalars/Int.md) | Total number of time reports matching the query |
| `edges` | [`[TimeReportEdge!]`](TimeReportEdge.md) | List of time report edges with pagination cursors |
| `pageInfo` | [`PageInfo`](PageInfo.md) | Pagination information for navigating results |

## Examples

### Example

```json
{
  "totalCount": 987,
  "edges": [TimeReportEdge],
  "pageInfo": PageInfo
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TimeReportConnection" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [TimeReport](TimeReport.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [TimeReportEdge](TimeReportEdge.md) ➡️
