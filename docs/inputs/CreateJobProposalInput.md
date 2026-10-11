---
title: "CreateJobProposalInput"
kind: "input_object"
domain: "Other"
gql_name: "CreateJobProposalInput"
html_id: "definition-CreateJobProposalInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CreateJobProposalInput"
generated_by: "scripts/convert.mjs"
---


# `CreateJobProposalInput` (input object)

## Description

Input type for creating a new proposal (v2)

## Fields

| Field | Type | Description |
|---|---|---|
| `selectedContractor` | [`CreateProposalSelectedContractor!`](CreateProposalSelectedContractor.md) | Selected contractor information |
| `jobReference` | [`String!`](../scalars/String.md) | Job reference ID |
| `chargedAmount` | [`Float!`](../scalars/Float.md) | Charged amount |
| `gitHubRepoLink` | [`String`](../scalars/String.md) | GitHub repository link |
| `coverLetter` | [`String!`](../scalars/String.md) | Cover letter |
| `questions` | [`[CreateProposalQuestion]`](CreateProposalQuestion.md) | Questions and answers |
| `attachments` | [`[String]`](../scalars/String.md) | Attachments |
| `umaTouched` | [`Boolean`](../scalars/Boolean.md) | Whether UMA was touched |
| `umaThreadId` | [`String`](../scalars/String.md) | Uma thread id |
| `sri` | [`CreateProposalSri`](CreateProposalSri.md) | SRI (Success Rate Index) information |
| `boostBidAmount` | [`Float`](../scalars/Float.md) | Boost bid amount |
| `occupationId` | [`String`](../scalars/String.md) | Occupation UID |
| `agencyOrgId` | [`String`](../scalars/String.md) | Agency organization UID |
| `teamOrgId` | [`String!`](../scalars/String.md) | Team organization UID |
| `estimatedDuration` | [`Int`](../scalars/Int.md) | Estimated duration in hours/days |
| `milestones` | [`[CreateProposalMilestone]`](CreateProposalMilestone.md) | Milestones |

## Examples

### Example

```json
{
  "selectedContractor": CreateProposalSelectedContractor,
  "jobReference": "abc123",
  "chargedAmount": 987.65,
  "gitHubRepoLink": "abc123",
  "coverLetter": "xyz789",
  "questions": [CreateProposalQuestion],
  "attachments": ["xyz789"],
  "umaTouched": true,
  "umaThreadId": "xyz789",
  "sri": CreateProposalSri,
  "boostBidAmount": 987.65,
  "occupationId": "abc123",
  "agencyOrgId": "xyz789",
  "teamOrgId": "abc123",
  "estimatedDuration": 123,
  "milestones": [CreateProposalMilestone]
}
```
