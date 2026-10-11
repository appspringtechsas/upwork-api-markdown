---
title: "JobPubDetails"
kind: "object"
domain: "Other"
gql_name: "JobPubDetails"
html_id: "definition-JobPubDetails"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPubDetails"
generated_by: "scripts/convert.mjs"
---


# `JobPubDetails` (object)

## Description

Public job details

## Fields

| Field | Type | Description |
|---|---|---|
| `buyer` | [`JobPubBuyerInfo`](JobPubBuyerInfo.md) | Buyer/client information including company, location, and historical job statistics |
| `buyerExtra` | [`BuyerExtra`](BuyerExtra.md) | Additional client information including payment verification status and work history |
| `opening` | [`JobPubOpeningInfo`](JobPubOpeningInfo.md) | Opening details including job description, budget, requirements, and timeline |
| `qualifications` | [`JobQualifications`](JobQualifications.md) | Qualification requirements for freelancers applying to this job |
| `similarJobs` | [`[PubSimilarJob]`](PubSimilarJob.md) | List of similar job postings for reference |

## Examples

### Example

```json
{
  "buyer": JobPubBuyerInfo,
  "buyerExtra": BuyerExtra,
  "opening": JobPubOpeningInfo,
  "qualifications": JobQualifications,
  "similarJobs": [PubSimilarJob]
}
```
