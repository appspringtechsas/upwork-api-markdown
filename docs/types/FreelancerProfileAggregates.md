---
title: "FreelancerProfileAggregates"
kind: "object"
domain: "Users and teams"
gql_name: "FreelancerProfileAggregates"
html_id: "definition-FreelancerProfileAggregates"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileAggregates"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfileAggregates` (object)

## Description

Freelancer Profile aggregates

## Fields

| Field | Type | Description |
|---|---|---|
| `user` | [`GenericUser!`](GenericUser.md) | User who owns this aggregate data |
| `lastWorkedDateTime` | [`String`](../scalars/String.md) | It's the latest timestamp between the worked hours logged and the Last payment date from the most recent contract |
| `lastApplicationDate` | [`String`](../scalars/String.md) | Date when the user applied last time for a job |
| `totalHourlyJobs` | [`Int`](../scalars/Int.md) | Total hourly jobs. |
| `totalHourlyJobsRecent` | [`Int`](../scalars/Int.md) | Total hourly jobs done for last 180 days |
| `totalFixedJobs` | [`Int`](../scalars/Int.md) | Total fixed price jobs. |
| `totalFixedJobsRecent` | [`Int`](../scalars/Int.md) | Total fixed price jobs performed in the last 180 days |
| `responsiveness` | [`String`](../scalars/String.md) | Freelancer's responsiveness to client's invites |
| `totalRevenue` | [`Money`](Money.md) | Total Revenue. The actual amount, freelancer has received. |
| `activeInterviews` | [`Int`](../scalars/Int.md) | Total no of interviews in progress. |
| `currentContracts` | [`Int`](../scalars/Int.md) | Total no of active contracts. |
| `jobSuccessScore` | [`Float`](../scalars/Float.md) | Job Success Score calculated Biweekly |
| `topRatedStatus` | [`String`](../scalars/String.md) | Top rated status |
| `topRatedPlusStatus` | [`String`](../scalars/String.md) | Top rated plus status |
| `vetted` | [`Boolean`](../scalars/Boolean.md) | Flag that indicates if freelancer is expert-vetted |
| `totalHoursActual` | [`Float`](../scalars/Float.md) | Total hours calculated by total charges divided by hourly rate |
| `totalHours` | [`Float`](../scalars/Float.md) | Total Billed Hours. A summation of billed hours with total charges >= $1. |
| `totalHoursRecent` | [`Float`](../scalars/Float.md) | Total Hours worked for last 180 days |
| `totalFeedback` | [`Float`](../scalars/Float.md) | Total Feedback score received |
| `totalFeedbackRecent` | [`Float`](../scalars/Float.md) | Total Feedback score received for last 180 days |
| `billedContracts` | [`Int`](../scalars/Int.md) | Number of contracts with total charges >= $1. |
| `billedContractsRecent` | [`Int`](../scalars/Int.md) | Number of contracts with total charges >= $1 for last 180 days |
| `adjustedFeedbackScore` | [`Float`](../scalars/Float.md) | Freelancer Adjusted Score - a 5-star rating score the platform gives to each freelancer Based on the feedback scores received in each completed contract |
| `adjustedFeedbackScoreRecent` | [`Float`](../scalars/Float.md) | Freelancer adjusted average feedback score for the last 180 days |
| `profileStats` | [`FreelancerProfileStats`](FreelancerProfileStats.md) | Freelancer profile stats |
| `lastActivityDateTime` | [`String`](../scalars/String.md) | Last Activity Timestamp captured by the platform from these activities: Last job application submitted, last exam taken, last date worked, last date being hired, last payment date |
| `totalEarnings` | [`Money`](Money.md) | Life time Total Freelancer Earnings. The same value as Total Charge. |
| `topRatedStatusDatetime` | [`String`](../scalars/String.md) | The most recent timestamp when a freelancer being granted with a Top Rated status. |
| `recentEarnings` | [`Money`](Money.md) | Recent earnings for the last 180 days |
| `averageRecentEarnings` | [`Money`](Money.md) | Average recent earnings per contract |
| `recentCharge` | [`Money`](Money.md) | Recent charges for the last 180 days |
| `averageRecentCharge` | [`Money`](Money.md) | Average recent charge per contract |
| `qualityScore` | [`Float`](../scalars/Float.md) | Overall quality score for the freelancer |
| `totalHoursRounded` | [`Int`](../scalars/Int.md) | Total hours from Assignment table's "Hours" column |

## Examples

### Example

```json
{
  "user": GenericUser,
  "lastWorkedDateTime": "xyz789",
  "lastApplicationDate": "abc123",
  "totalHourlyJobs": 123,
  "totalHourlyJobsRecent": 987,
  "totalFixedJobs": 987,
  "totalFixedJobsRecent": 987,
  "responsiveness": "abc123",
  "totalRevenue": Money,
  "activeInterviews": 123,
  "currentContracts": 123,
  "jobSuccessScore": 987.65,
  "topRatedStatus": "abc123",
  "topRatedPlusStatus": "xyz789",
  "vetted": true,
  "totalHoursActual": 987.65,
  "totalHours": 123.45,
  "totalHoursRecent": 987.65,
  "totalFeedback": 987.65,
  "totalFeedbackRecent": 987.65,
  "billedContracts": 987,
  "billedContractsRecent": 123,
  "adjustedFeedbackScore": 123.45,
  "adjustedFeedbackScoreRecent": 987.65,
  "profileStats": FreelancerProfileStats,
  "lastActivityDateTime": "abc123",
  "totalEarnings": Money,
  "topRatedStatusDatetime": "abc123",
  "recentEarnings": Money,
  "averageRecentEarnings": Money,
  "recentCharge": Money,
  "averageRecentCharge": Money,
  "qualityScore": 123.45,
  "totalHoursRounded": 987
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileAggregates" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [FreelancerProfile](FreelancerProfile.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [FreelancerProfileAvailability](FreelancerProfileAvailability.md) ➡️
