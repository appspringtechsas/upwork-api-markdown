---
title: "SubmissionEvent"
kind: "object"
domain: "Offers and Contracts"
gql_name: "SubmissionEvent"
html_id: "definition-SubmissionEvent"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-SubmissionEvent"
generated_by: "scripts/convert.mjs"
---


# `SubmissionEvent` (object)

## Description

Milestone submission event and associated messages

## Fields

| Field | Type | Description |
|---|---|---|
| `submission` | [`Submission!`](Submission.md) | Submission information |
| `submissionMessage` | [`SubmissionMessage`](SubmissionMessage.md) | Submission message |
| `revisionMessage` | [`SubmissionMessage`](SubmissionMessage.md) | Revision message |

## Examples

### Example

```json
{
  "submission": Submission,
  "submissionMessage": SubmissionMessage,
  "revisionMessage": SubmissionMessage
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-SubmissionEvent" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [SubmissionAttachmentDetails](SubmissionAttachmentDetails.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [SubmissionMessage](SubmissionMessage.md) ➡️
