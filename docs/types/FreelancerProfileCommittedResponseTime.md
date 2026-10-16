---
title: "FreelancerProfileCommittedResponseTime"
kind: "object"
domain: "Users and teams"
gql_name: "FreelancerProfileCommittedResponseTime"
html_id: "definition-FreelancerProfileCommittedResponseTime"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileCommittedResponseTime"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfileCommittedResponseTime` (object)

## Description

Freelancer's CommittedResponseTime

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Committed response time record identifier |
| `committedResponseTime` | [`FreelancerProfileResponseTime`](../enums/FreelancerProfileResponseTime.md) | Response times committed by Freelancer (can be immediate, soon or never) |
| `name` | [`String`](../scalars/String.md) | Display name: Immediate (30 min) or Soon (12 hours) or Never |
| `createdDateTime` | [`String!`](../scalars/String.md) | Creation timestamp |
| `updatedDateTime` | [`String`](../scalars/String.md) | Last update timestamp |

## Examples

### Example

```json
{
  "id": "4",
  "committedResponseTime": "NEVER",
  "name": "abc123",
  "createdDateTime": "xyz789",
  "updatedDateTime": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileCommittedResponseTime" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [FreelancerProfileCertificate](FreelancerProfileCertificate.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [FreelancerProfileCompletenessSummary](FreelancerProfileCompletenessSummary.md) ➡️
