---
title: "PublicMarketplaceJobPostingsSearchClient"
kind: "object"
domain: "Job Posts"
gql_name: "PublicMarketplaceJobPostingsSearchClient"
html_id: "definition-PublicMarketplaceJobPostingsSearchClient"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PublicMarketplaceJobPostingsSearchClient"
generated_by: "scripts/convert.mjs"
---


# `PublicMarketplaceJobPostingsSearchClient` (object)

## Description

The visible client information in marketplace

## Fields

| Field | Type | Description |
|---|---|---|
| `totalHires` | [`Int`](../scalars/Int.md) | The number of freelancers hired by the client in the past |
| `totalPostedJobs` | [`Int`](../scalars/Int.md) | The number of job posts the client created |
| `totalReviews` | [`Int`](../scalars/Int.md) | The number of freelancer reviewing the client |
| `totalFeedback` | [`Int`](../scalars/Int.md) | The number of client feedback from the freelancers |
| `companyRid` | [`ID`](../scalars/ID.md) | The companyRid of the client |
| `edcUserId` | [`ID`](../scalars/ID.md) | The edcUserId of the client |
| `lastContractRid` | [`ID`](../scalars/ID.md) | The lastContractRid of the client |
| `hasFinancialPrivacy` | [`Boolean`](../scalars/Boolean.md) | Does client have financial privacy |
| `location` | [`MarketPlaceJobSearchLocation`](MarketPlaceJobSearchLocation.md) | Client location |

## Examples

### Example

```json
{
  "totalHires": 987,
  "totalPostedJobs": 123,
  "totalReviews": 987,
  "totalFeedback": 987,
  "companyRid": "4",
  "edcUserId": "4",
  "lastContractRid": "4",
  "hasFinancialPrivacy": true,
  "location": MarketPlaceJobSearchLocation
}
```
