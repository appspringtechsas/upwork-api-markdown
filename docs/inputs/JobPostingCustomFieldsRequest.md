---
title: "JobPostingCustomFieldsRequest"
kind: "input_object"
domain: "Job Posts"
gql_name: "JobPostingCustomFieldsRequest"
html_id: "definition-JobPostingCustomFieldsRequest"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingCustomFieldsRequest"
generated_by: "scripts/convert.mjs"
---


# `JobPostingCustomFieldsRequest` (input object)

## Description

Custom fields request for job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `responses` | [`[CustomFieldsResponse]`](CustomFieldsResponse.md) | Custom field responses |
| `newDropdowns` | [`[CustomFieldDropDown]`](CustomFieldDropDown.md) | New dropdown options |

## Examples

### Example

```json
{
  "responses": [CustomFieldsResponse],
  "newDropdowns": [CustomFieldDropDown]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingCustomFieldsRequest" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [JobPostingCreateRequest](JobPostingCreateRequest.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [JobPostingLocationRequest](JobPostingLocationRequest.md) ➡️
