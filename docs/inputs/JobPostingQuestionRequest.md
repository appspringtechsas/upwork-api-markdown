---
title: "JobPostingQuestionRequest"
kind: "input_object"
domain: "Job Posts"
gql_name: "JobPostingQuestionRequest"
html_id: "definition-JobPostingQuestionRequest"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingQuestionRequest"
generated_by: "scripts/convert.mjs"
---


# `JobPostingQuestionRequest` (input object)

## Description

Screening question for job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `question` | [`String!`](../scalars/String.md) | Question text |
| `type` | [`QuestionType`](../enums/QuestionType.md) | Type of question |

## Examples

### Example

```json
{"question": "xyz789", "type": "EXPERIENCE"}
```
