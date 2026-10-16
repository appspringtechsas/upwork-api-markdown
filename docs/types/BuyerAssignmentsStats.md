---
title: "BuyerAssignmentsStats"
kind: "object"
domain: "Other"
gql_name: "BuyerAssignmentsStats"
html_id: "definition-BuyerAssignmentsStats"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-BuyerAssignmentsStats"
generated_by: "scripts/convert.mjs"
---


# `BuyerAssignmentsStats` (object)

## Description

Client's stats

## Fields

| Field | Type | Description |
|---|---|---|
| `totalAssignments` | [`Int`](../scalars/Int.md) | Total number of assignments/contracts issued by the buyer |
| `activeAssignmentsCount` | [`Int`](../scalars/Int.md) | Number of currently active assignments |
| `hoursCount` | [`Float`](../scalars/Float.md) | Total hours worked across all assignments |
| `totalCharges` | [`JobDetailsMoney`](JobDetailsMoney.md) | Total amount charged across all assignments |
| `feedbackCount` | [`Int`](../scalars/Int.md) | Number of feedback reviews received |
| `score` | [`Float`](../scalars/Float.md) | Average feedback score (0-5) |
| `totalJobsWithHires` | [`Int`](../scalars/Int.md) | Total number of jobs where contractors were hired |
| `hiredInPast` | [`Boolean`](../scalars/Boolean.md) | Whether the client has hired contractors in the past |

## Examples

### Example

```json
{
  "totalAssignments": 987,
  "activeAssignmentsCount": 987,
  "hoursCount": 987.65,
  "totalCharges": JobDetailsMoney,
  "feedbackCount": 123,
  "score": 987.65,
  "totalJobsWithHires": 123,
  "hiredInPast": true
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-BuyerAssignmentsStats" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [BidList](BidList.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [BuyerExtra](BuyerExtra.md) ➡️
