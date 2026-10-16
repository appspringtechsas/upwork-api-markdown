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
  "invitationUid": "4",
  "attachments": ["abc123"],
  "bid": 987.65,
  "connectBid": 987.65,
  "coverLetter": "abc123",
  "duration": "abc123",
  "milestones": [AcceptVendorInvitationMilestone],
  "occupationUid": "xyz789",
  "questionsAnswers": [
    AcceptVendorInvitationQuestionAnswer
  ],
  "sri": AcceptVendorInvitationSri,
  "teamUid": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-AcceptVendorInvitationInput" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [WorkflowTaskPatchLabelInput](WorkflowTaskPatchLabelInput.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [AcceptVendorInvitationMilestone](AcceptVendorInvitationMilestone.md) ➡️
