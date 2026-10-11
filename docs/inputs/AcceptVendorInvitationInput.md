---
title: "AcceptVendorInvitationInput"
kind: "input_object"
domain: "Other"
gql_name: "AcceptVendorInvitationInput"
html_id: "definition-AcceptVendorInvitationInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-AcceptVendorInvitationInput"
generated_by: "scripts/convert.mjs"
---


# `AcceptVendorInvitationInput` (input object)

## Description

Main input type for accepting vendor invitation

## Fields

| Field | Type | Description |
|---|---|---|
| `invitationUid` | [`ID!`](../scalars/ID.md) | Unique identifier of the invitation to accept |
| `attachments` | [`[String]`](../scalars/String.md) | List of attachment file URLs |
| `bid` | [`Float`](../scalars/Float.md) | Proposed bid amount |
| `connectBid` | [`Float`](../scalars/Float.md) | Connect bid amount if applicable |
| `coverLetter` | [`String`](../scalars/String.md) | Cover letter text for the proposal |
| `duration` | [`String`](../scalars/String.md) | Expected project duration (e.g., "2w", "3m") |
| `milestones` | [`[AcceptVendorInvitationMilestone]`](AcceptVendorInvitationMilestone.md) | List of milestone configurations |
| `occupationUid` | [`String`](../scalars/String.md) | Occupation identifier for the proposal |
| `questionsAnswers` | [`[AcceptVendorInvitationQuestionAnswer]`](AcceptVendorInvitationQuestionAnswer.md) | List of screening questions and answers |
| `sri` | [`AcceptVendorInvitationSri`](AcceptVendorInvitationSri.md) | SRI configuration if applicable |
| `teamUid` | [`String`](../scalars/String.md) | Team identifier if applying as a team |

## Examples

### Example

```json
{
  "invitationUid": 4,
  "attachments": ["xyz789"],
  "bid": 123.45,
  "connectBid": 123.45,
  "coverLetter": "abc123",
  "duration": "xyz789",
  "milestones": [AcceptVendorInvitationMilestone],
  "occupationUid": "abc123",
  "questionsAnswers": [
    AcceptVendorInvitationQuestionAnswer
  ],
  "sri": AcceptVendorInvitationSri,
  "teamUid": "abc123"
}
```
