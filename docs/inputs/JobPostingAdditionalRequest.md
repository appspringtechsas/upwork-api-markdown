---
title: "JobPostingAdditionalRequest"
kind: "input_object"
domain: "Job Posts"
gql_name: "JobPostingAdditionalRequest"
html_id: "definition-JobPostingAdditionalRequest"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingAdditionalRequest"
generated_by: "scripts/convert.mjs"
---


# `JobPostingAdditionalRequest` (input object)

## Description

Additional options for job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `directHire` | [`Boolean`](../scalars/Boolean.md) | Whether direct hire is enabled |
| `invitePost` | [`Boolean`](../scalars/Boolean.md) | Whether this is an invite-only post |
| `earlyEngagement` | [`Boolean`](../scalars/Boolean.md) | Whether early engagement is enabled |
| `earlyEngagementVisited` | [`Boolean`](../scalars/Boolean.md) | Whether early engagement was visited |

## Examples

### Example

```json
{
  "directHire": true,
  "invitePost": false,
  "earlyEngagement": true,
  "earlyEngagementVisited": false
}
```
