---
title: "timeReport"
kind: "query"
gql_name: "timeReport"
returns: "[TimeReport!]"
deprecated: "use contractTimeReport instead"
html_id: "query-timeReport"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-timeReport"
generated_by: "scripts/convert.mjs"
---


# `timeReport`

> ⚠️ **Deprecated:** use contractTimeReport instead

## Description

Get the time report details for the given time range and a given organization

## Required Permissions

"TimeSheet - Read-Only Access"

## Response

Returns [`[TimeReport!]`](../types/TimeReport.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `filter` | [`TimeReportFilter`](../inputs/TimeReportFilter.md) | Time report filter |

## Examples

### Detailed structure

#### Query

```graphql
query timeReport($filter: TimeReportFilter) {
  timeReport(filter: $filter) {
    dateWorkedOn
    weekWorkedOn
    monthWorkedOn
    yearWorkedOn
    freelancer {
      ...GenericUserFragment
    }
    team {
      ...GenericOrganizationFragment
    }
    contractOffer {
      ...ContractOfferResultFragment
    }
    contract {
      ...ContractDetailsFragment
    }
    termId
    task
    taskDescription
    memo
    totalHoursWorked
    totalCharges
    totalOnlineHoursWorked
    totalOnlineCharge
    totalOfflineHoursWorked
    totalOfflineCharge
    billRate {
      ...BillRateFragment
    }
  }
}
```

#### Variables

```json
{"filter": TimeReportFilter}
```

#### Response

```json
{
  "data": {
    "timeReport": [
      {
        "dateWorkedOn": "xyz789",
        "weekWorkedOn": "abc123",
        "monthWorkedOn": "xyz789",
        "yearWorkedOn": "abc123",
        "freelancer": GenericUser,
        "team": GenericOrganization,
        "contractOffer": ContractOfferResult,
        "contract": ContractDetails,
        "termId": 4,
        "task": "xyz789",
        "taskDescription": "xyz789",
        "memo": "xyz789",
        "totalHoursWorked": 987.65,
        "totalCharges": 987.65,
        "totalOnlineHoursWorked": 123.45,
        "totalOnlineCharge": 987.65,
        "totalOfflineHoursWorked": 123.45,
        "totalOfflineCharge": 987.65,
        "billRate": BillRate
      }
    ]
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-timeReport" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [contractTimeReport](contractTimeReport.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [transactionHistory](transactionHistory.md) ➡️
