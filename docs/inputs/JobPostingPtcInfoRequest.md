---
title: "JobPostingPtcInfoRequest"
kind: "input_object"
domain: "Job Posts"
gql_name: "JobPostingPtcInfoRequest"
html_id: "definition-JobPostingPtcInfoRequest"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingPtcInfoRequest"
generated_by: "scripts/convert.mjs"
---


# `JobPostingPtcInfoRequest` (input object)

## Description

Private Talent Cloud information for job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `jobReference` | [`String`](../scalars/String.md) | Job reference code |
| `talentCloudIds` | [`[ID!]`](../scalars/ID.md) | Talent cloud identifiers |
| `visibility` | [`JobPostingPtcVisibility`](../enums/JobPostingPtcVisibility.md) | PTC visibility setting |
| `employerCompanyReference` | [`String`](../scalars/String.md) | Employer company reference |
| `status` | [`JobPostingPtcStatus`](../enums/JobPostingPtcStatus.md) | PTC status |
| `purchaseOrderId` | [`ID`](../scalars/ID.md) | Purchase order identifier |
| `locationCheckRequired` | [`Boolean`](../scalars/Boolean.md) | Whether location check is required |
| `countries` | [`[String!]`](../scalars/String.md) | Allowed countries |
| `onSiteType` | [`OnSiteType`](../enums/OnSiteType.md) | On-site work requirement |
| `onSiteCity` | [`String`](../scalars/String.md) | On-site city |
| `onSiteCountry` | [`String`](../scalars/String.md) | On-site country |
| `createDate` | [`Int`](../scalars/Int.md) | Creation date (Unix timestamp) |
| `onSiteReason` | [`String`](../scalars/String.md) | Reason for on-site requirement |
| `onSiteReasonFlexible` | [`String`](../scalars/String.md) | Flexibility description for on-site |
| `onSiteState` | [`String`](../scalars/String.md) | On-site state |
| `teamId` | [`ID`](../scalars/ID.md) | Team identifier |
| `travelRequired` | [`Boolean`](../scalars/Boolean.md) | Whether travel is required |
| `updatedDate` | [`Int`](../scalars/Int.md) | Last updated date (Unix timestamp) |

## Examples

### Example

```json
{
  "jobReference": "xyz789",
  "talentCloudIds": ["4"],
  "visibility": "ANY_USER",
  "employerCompanyReference": "xyz789",
  "status": "OPEN",
  "purchaseOrderId": 4,
  "locationCheckRequired": false,
  "countries": ["abc123"],
  "onSiteType": "REMOTE",
  "onSiteCity": "xyz789",
  "onSiteCountry": "xyz789",
  "createDate": 987,
  "onSiteReason": "abc123",
  "onSiteReasonFlexible": "abc123",
  "onSiteState": "xyz789",
  "teamId": "4",
  "travelRequired": false,
  "updatedDate": 987
}
```
