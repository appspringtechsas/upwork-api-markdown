---
title: "FreelancerProfileStats"
kind: "object"
domain: "Users and teams"
gql_name: "FreelancerProfileStats"
html_id: "definition-FreelancerProfileStats"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileStats"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfileStats` (object)

## Description

Aggregated freelancer performance stats

## Fields

| Field | Type | Description |
|---|---|---|
| `totalCharge360` | [`Money`](Money.md) | The sum of total charges from the last 360 days |
| `totalCharge360NoAgency` | [`Money`](Money.md) | The sum of total charges from the last 360 days, excluding agency contracts |
| `adjustedScore360` | [`Float`](../scalars/Float.md) | This is the feedback score calculated using the contracts completed in the last 360 days |
| `longTermClients` | [`Int`](../scalars/Int.md) | Number of long-term clients (multiple contracts) |
| `suspensions` | [`Int`](../scalars/Int.md) | The total suspension count |
| `suspensions360` | [`Int`](../scalars/Int.md) | The total suspension count recorded in last 360 days |
| `suspensions90limited` | [`Int`](../scalars/Int.md) | Recent account holds |
| `topLevelJobCategoryApplied90Days` | [`String`](../scalars/String.md) | The main job category (Level-1 job category) a freelancer has applied to in the last 90 days. |
| `proposalsCount90Days` | [`Int`](../scalars/Int.md) | The count of job applications a freelancer has submitted in last 90 days |
| `medianProposalsForTheTopLevelCategory365` | [`Int`](../scalars/Int.md) | The median for the number of job applications in the main category prior to the first hire for the last 365 days |
| `fitProposalsViewRatio90Days` | [`Float`](../scalars/Float.md) | Ratio of number of fit job applications viewed over number of job applications submitted in last 90 days |
| `hiddenProposalsViewedRatio90Days` | [`Float`](../scalars/Float.md) | Ratio of number of hidden job applications viewed over number of job applications submitted in last 90 days |
| `totalProposalsViewedRatio90Days` | [`Float`](../scalars/Float.md) | Ratio of number of job applications viewed over number of job applications submitted in last 90 days |
| `proposalInterviewedRation90Days` | [`Float`](../scalars/Float.md) | Ratio of number of job applications that were interviewed by client over number of job applications submitted in last 90 days. |
| `proposalsHiredRatio90Days` | [`Float`](../scalars/Float.md) | Ratio of number of hired over number of job applications submitted in last 90 days |
| `hideReasonsForProposals` | [`[String]`](../scalars/String.md) | 3 most commonly cited reasons for clients hiding the application |
| `totalInvites90Days` | [`Int`](../scalars/Int.md) | The number of invitations received in last 90 days |
| `totalInviteResponses90Days` | [`Int`](../scalars/Int.md) | The number of responses of invitations received in last 90 days |
| `inviteResponsesPerDay90Days` | [`Int`](../scalars/Int.md) | The count on how many invitations a contractor had responded within a day in last 90 days. |
| `totalCharge365NoPending` | [`Money`](Money.md) | 12-month earnings, based on earnings in the last 365 days including today |
| `totalCharge90` | [`Money`](Money.md) | 3-month earnings |
| `weeksEligibleWithin16wks` | [`Float`](../scalars/Float.md) | Top Rated eligible weeks for the last 16 weeks. |

## Examples

### Example

```json
{
  "totalCharge360": Money,
  "totalCharge360NoAgency": Money,
  "adjustedScore360": 987.65,
  "longTermClients": 123,
  "suspensions": 987,
  "suspensions360": 123,
  "suspensions90limited": 987,
  "topLevelJobCategoryApplied90Days": "xyz789",
  "proposalsCount90Days": 987,
  "medianProposalsForTheTopLevelCategory365": 123,
  "fitProposalsViewRatio90Days": 987.65,
  "hiddenProposalsViewedRatio90Days": 123.45,
  "totalProposalsViewedRatio90Days": 987.65,
  "proposalInterviewedRation90Days": 987.65,
  "proposalsHiredRatio90Days": 987.65,
  "hideReasonsForProposals": ["xyz789"],
  "totalInvites90Days": 123,
  "totalInviteResponses90Days": 123,
  "inviteResponsesPerDay90Days": 987,
  "totalCharge365NoPending": Money,
  "totalCharge90": Money,
  "weeksEligibleWithin16wks": 123.45
}
```
