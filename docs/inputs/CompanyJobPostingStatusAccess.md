---
title: "CompanyJobPostingStatusAccess"
kind: "input_object"
domain: "Job Posts"
gql_name: "CompanyJobPostingStatusAccess"
html_id: "definition-CompanyJobPostingStatusAccess"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CompanyJobPostingStatusAccess"
generated_by: "scripts/convert.mjs"
---


# `CompanyJobPostingStatusAccess` (input object)

## Description

Filter input based on status and access type for job search

## Fields

| Field | Type | Description |
|---|---|---|
| `statuses_any` | [`[JobPostingStatus!]`](../enums/JobPostingStatus.md) | Job posting statuses to filter by |
| `accesses_any` | [`[AccessType!]`](../enums/AccessType.md) | Access types to filter by |

## Examples

### Example

```json
{"statuses_any": ["REQUESTED"], "accesses_any": ["PUBLIC_INDEX"]}
```
