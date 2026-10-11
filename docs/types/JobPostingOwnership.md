---
title: "JobPostingOwnership"
kind: "object"
domain: "Job Posts"
gql_name: "JobPostingOwnership"
html_id: "definition-JobPostingOwnership"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingOwnership"
generated_by: "scripts/convert.mjs"
---


# `JobPostingOwnership` (object)

## Description

Owner and organization associations for a job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `user` | [`GenericUser`](GenericUser.md) | User who owns the posting |
| `clientCompany` | [`CurrentOrganization`](CurrentOrganization.md) | Client company associated with the posting |
| `company` | [`GenericOrganization`](GenericOrganization.md) | Company owning the posting |
| `team` | [`GenericOrganization`](GenericOrganization.md) | Team owning the posting |

## Examples

### Example

```json
{
  "user": GenericUser,
  "clientCompany": CurrentOrganization,
  "company": GenericOrganization,
  "team": GenericOrganization
}
```
