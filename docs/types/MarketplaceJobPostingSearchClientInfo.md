---
title: "MarketplaceJobPostingSearchClientInfo"
kind: "object"
domain: "Job Posts"
gql_name: "MarketplaceJobPostingSearchClientInfo"
html_id: "definition-MarketplaceJobPostingSearchClientInfo"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplaceJobPostingSearchClientInfo"
generated_by: "scripts/convert.mjs"
---


# `MarketplaceJobPostingSearchClientInfo` (object)

## Description

Client information associated with a marketplace job posting search result

## Fields

| Field | Type | Description |
|---|---|---|
| ⚠️ `memberSinceDateTime` | [`String`](../scalars/String.md) | Date when the client joined **⚠️ Deprecated — Deprecated legacy field** |
| `totalHires` | [`Int!`](../scalars/Int.md) | Total number of hires made by the client |
| `totalPostedJobs` | [`Int!`](../scalars/Int.md) | Total number of jobs the client has posted |
| `totalSpent` | [`Money`](Money.md) | Total lifetime spend by the client |
| `verificationStatus` | [`ClientVerificationStatus`](../enums/ClientVerificationStatus.md) | Payment verification status of the client |
| `location` | [`MarketPlaceJobSearchLocation`](MarketPlaceJobSearchLocation.md) | Client's location information |
| `totalReviews` | [`Int!`](../scalars/Int.md) | Total number of reviews received by the client |
| `totalFeedback` | [`Float!`](../scalars/Float.md) | Average feedback score received by the client |
| `companyRid` | [`ID!`](../scalars/ID.md) | Company record identifier (RID) for the client |
| ⚠️ `companyName` | [`String`](../scalars/String.md) | Company name of the client **⚠️ Deprecated — Not supported anymore** |
| `edcUserId` | [`ID!`](../scalars/ID.md) | EDC user identifier for the client |
| `lastContractPlatform` | [`String`](../scalars/String.md) | Platform of the client's last contract |
| `lastContractRid` | [`ID`](../scalars/ID.md) | Record identifier (RID) of the client's last contract |
| `lastContractTitle` | [`String`](../scalars/String.md) | Title of the client's last contract |
| `companyOrgUid` | [`ID!`](../scalars/ID.md) | Organization UID of the client's company |
| `hasFinancialPrivacy` | [`Boolean!`](../scalars/Boolean.md) | Whether the client has financial privacy enabled |

## Examples

### Example

```json
{
  "memberSinceDateTime": "xyz789",
  "totalHires": 987,
  "totalPostedJobs": 987,
  "totalSpent": Money,
  "verificationStatus": "VERIFIED",
  "location": MarketPlaceJobSearchLocation,
  "totalReviews": 987,
  "totalFeedback": 987.65,
  "companyRid": "4",
  "companyName": "xyz789",
  "edcUserId": "4",
  "lastContractPlatform": "xyz789",
  "lastContractRid": 4,
  "lastContractTitle": "abc123",
  "companyOrgUid": "4",
  "hasFinancialPrivacy": true
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplaceJobPostingSearchClientInfo" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [MarketplaceJobPostingsContents](MarketplaceJobPostingsContents.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [MarketplaceJobPostingSearchConnection](MarketplaceJobPostingSearchConnection.md) ➡️
