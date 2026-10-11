---
title: "FreelancerProfileCompletenessSummary"
kind: "object"
domain: "Users and teams"
gql_name: "FreelancerProfileCompletenessSummary"
html_id: "definition-FreelancerProfileCompletenessSummary"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileCompletenessSummary"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfileCompletenessSummary` (object)

## Description

Freelancer Profile Completeness Summary

## Fields

| Field | Type | Description |
|---|---|---|
| `user` | [`GenericUser!`](GenericUser.md) | User who owns this profile |
| `actual` | [`Int!`](../scalars/Int.md) | Actual percentage completed |
| `display` | [`Int!`](../scalars/Int.md) | Display value of percentage complete |
| `action` | [`String`](../scalars/String.md) | Action message that needs to be displayed |
| `actionCredit` | [`Int`](../scalars/Int.md) | Percentage that gets added to the total percent complete if action is taken |
| `actionForEmptySection` | [`String`](../scalars/String.md) | Action for empty section |
| `skillsCount` | [`Int!`](../scalars/Int.md) | Skills count |
| `employmentRecordCount` | [`Int!`](../scalars/Int.md) | Number of employment experiences |
| `portraitRecordCount` | [`Int!`](../scalars/Int.md) | Number of portraits in the profile |
| `overviewRecordCount` | [`Int!`](../scalars/Int.md) | Number of overviews in the profile |
| `videoRecordCount` | [`Int!`](../scalars/Int.md) | Number of videos in the profile |
| `educationRecordCount` | [`Int!`](../scalars/Int.md) | Number of education records entered in the profile |
| `certificatesCount` | [`Int!`](../scalars/Int.md) | Number of certificates added against this profile |
| `otherExperiencesCount` | [`Int!`](../scalars/Int.md) | Count of other experiences |
| `portfolioCount` | [`Int!`](../scalars/Int.md) | Count of portfolio project items |
| `linkedExternalAccountsCount` | [`Int!`](../scalars/Int.md) | Number of external accounts that have been linked to this profile |
| `createdDateTime` | [`String!`](../scalars/String.md) | Creation timestamp |

## Examples

### Example

```json
{
  "user": GenericUser,
  "actual": 987,
  "display": 123,
  "action": "abc123",
  "actionCredit": 987,
  "actionForEmptySection": "abc123",
  "skillsCount": 987,
  "employmentRecordCount": 987,
  "portraitRecordCount": 123,
  "overviewRecordCount": 123,
  "videoRecordCount": 123,
  "educationRecordCount": 987,
  "certificatesCount": 987,
  "otherExperiencesCount": 123,
  "portfolioCount": 123,
  "linkedExternalAccountsCount": 987,
  "createdDateTime": "xyz789"
}
```
