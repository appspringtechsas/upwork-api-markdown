---
title: "BuyerJobs"
kind: "object"
domain: "Other"
gql_name: "BuyerJobs"
html_id: "definition-BuyerJobs"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-BuyerJobs"
generated_by: "scripts/convert.mjs"
---


# `BuyerJobs` (object)

## Description

Client's jobs

## Fields

| Field | Type | Description |
|---|---|---|
| `filledCount` | [`Int`](../scalars/Int.md) | Number of jobs posted by the client that have been filled |
| `openCount` | [`Int`](../scalars/Int.md) | Number of jobs posted by the client that are currently open |
| `postedCount` | [`Int`](../scalars/Int.md) | Total number of jobs posted by the buyer |
| `openJobs` | [`[Job]`](Job.md) | List of currently open jobs posted by the buyer |

## Examples

### Example

```json
{
  "filledCount": 987,
  "openCount": 123,
  "postedCount": 123,
  "openJobs": [Job]
}
```
