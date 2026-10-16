---
title: "bidsForJob"
kind: "query"
gql_name: "bidsForJob"
returns: "BidList"
html_id: "query-bidsForJob"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-bidsForJob"
generated_by: "scripts/convert.mjs"
---


# `bidsForJob`

## Description

Retrieves top 4 bids for the specific job post.

## Required Permissions

"Submit Proposal"

## Response

Returns a [`BidList`](../types/BidList.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `jobId` | [`ID!`](../scalars/ID.md) | Unique jobPostId |

## Examples

### Detailed structure

#### Query

```graphql
query bidsForJob($jobId: ID!) {
  bidsForJob(jobId: $jobId) {
    bids {
      ...BidFragment
    }
    limit
    offset
  }
}
```

#### Variables

```json
{"jobId": 4}
```

#### Response

```json
{
  "data": {
    "bidsForJob": {
      "bids": [Bid],
      "limit": 987,
      "offset": 123
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-bidsForJob" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [accountingEntity](accountingEntity.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [clientsWorkHistory](clientsWorkHistory.md) ➡️
