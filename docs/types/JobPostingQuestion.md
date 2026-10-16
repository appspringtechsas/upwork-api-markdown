---
title: "JobPostingQuestion"
kind: "object"
domain: "Job Posts"
gql_name: "JobPostingQuestion"
html_id: "definition-JobPostingQuestion"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingQuestion"
generated_by: "scripts/convert.mjs"
---


# `JobPostingQuestion` (object)

## Description

Screening question for a job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Question identifier |
| `question` | [`String`](../scalars/String.md) | Question text |
| `user` | [`GenericUser`](GenericUser.md) | User who created the question |
| `questionType` | [`QuestionType`](../enums/QuestionType.md) | Type of question |
| `auditTime` | [`AuditTime`](AuditTime.md) | Audit timestamps |

## Examples

### Example

```json
{
  "id": "4",
  "question": "abc123",
  "user": GenericUser,
  "questionType": "EXPERIENCE",
  "auditTime": AuditTime
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingQuestion" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [JobPostingQualification](JobPostingQualification.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [JobPostingSegmentationData](JobPostingSegmentationData.md) ➡️
