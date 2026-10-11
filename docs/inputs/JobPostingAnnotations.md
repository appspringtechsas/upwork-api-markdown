---
title: "JobPostingAnnotations"
kind: "input_object"
domain: "Job Posts"
gql_name: "JobPostingAnnotations"
html_id: "definition-JobPostingAnnotations"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingAnnotations"
generated_by: "scripts/convert.mjs"
---


# `JobPostingAnnotations` (input object)

## Description

Annotations for job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `tags` | [`[String]`](../scalars/String.md) | Tags for categorization |
| `customFields` | [`[JobPostingAnnotationsCustomField]`](JobPostingAnnotationsCustomField.md) | Custom field key-value pairs |

## Examples

### Example

```json
{
  "tags": ["abc123"],
  "customFields": [JobPostingAnnotationsCustomField]
}
```
