---
title: "FreelancerProfileLanguage"
kind: "object"
domain: "Users and teams"
gql_name: "FreelancerProfileLanguage"
html_id: "definition-FreelancerProfileLanguage"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileLanguage"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfileLanguage` (object)

## Description

Freelancer language with proficiency and verification

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Language record identifier |
| `language` | [`Language!`](Language.md) | Language details |
| `verified` | [`Boolean`](../scalars/Boolean.md) | Whether the language is verified |
| `verifiedByCertificate` | [`Boolean`](../scalars/Boolean.md) | Verified via certificate |
| `verifiedByFeedback` | [`Boolean`](../scalars/Boolean.md) | Verified via feedback |

## Examples

### Example

```json
{
  "id": "4",
  "language": Language,
  "verified": true,
  "verifiedByCertificate": false,
  "verifiedByFeedback": false
}
```
