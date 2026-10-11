---
title: "MilestoneSubmissions"
kind: "object"
domain: "Offers and Contracts"
gql_name: "MilestoneSubmissions"
html_id: "definition-MilestoneSubmissions"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MilestoneSubmissions"
generated_by: "scripts/convert.mjs"
---


# `MilestoneSubmissions` (object)

## Description

Submission details associated with a milestone

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | ID of the submission |
| `noteToClient` | [`String`](../scalars/String.md) | Note mentioned to the client |
| `submissionDateTime` | [`String`](../scalars/String.md) | Submission date time |
| `submissionAmount` | [`Money`](Money.md) | Amount associated with the submission |
| `submissionAttachments` | [`[SubmissionAttachmentDetails!]`](SubmissionAttachmentDetails.md) | Attachments with the submission |

## Examples

### Example

```json
{
  "id": "4",
  "noteToClient": "abc123",
  "submissionDateTime": "abc123",
  "submissionAmount": Money,
  "submissionAttachments": [SubmissionAttachmentDetails]
}
```
