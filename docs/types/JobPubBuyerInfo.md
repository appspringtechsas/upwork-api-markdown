---
title: "JobPubBuyerInfo"
kind: "object"
domain: "Other"
gql_name: "JobPubBuyerInfo"
html_id: "definition-JobPubBuyerInfo"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPubBuyerInfo"
generated_by: "scripts/convert.mjs"
---


# `JobPubBuyerInfo` (object)

## Description

Client info for the public job profile

## Fields

| Field | Type | Description |
|---|---|---|
| `avgHourlyJobsRate` | [`JobDetailsMoney`](JobDetailsMoney.md) | Average hourly rate the client pays across all jobs |
| `company` | [`JobBuyerCompany`](JobBuyerCompany.md) | Buyer's company information including name, description, and profile |
| `jobs` | [`BuyerJobs`](BuyerJobs.md) | Summary of buyer's job posting statistics (open, filled, posted counts) |
| `location` | [`GeoLocation`](GeoLocation.md) | Buyer's geographic location |
| `logo` | [`String`](../scalars/String.md) | URL to buyer's company logo image |
| `stats` | [`BuyerAssignmentsStats`](BuyerAssignmentsStats.md) | Buyer's historical work statistics including assignments, ratings, and hiring information |

## Examples

### Example

```json
{
  "avgHourlyJobsRate": JobDetailsMoney,
  "company": JobBuyerCompany,
  "jobs": BuyerJobs,
  "location": GeoLocation,
  "logo": "abc123",
  "stats": BuyerAssignmentsStats
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPubBuyerInfo" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [JobProposalsPersonNameCombined](JobProposalsPersonNameCombined.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [JobPubDetails](JobPubDetails.md) ➡️
