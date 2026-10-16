---
title: "FreelancerProfileCertificate"
kind: "object"
domain: "Users and teams"
gql_name: "FreelancerProfileCertificate"
html_id: "definition-FreelancerProfileCertificate"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileCertificate"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfileCertificate` (object)

## Description

Freelancer's Certificates

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Certificate record identifier |
| `earnedDate` | [`String`](../scalars/String.md) | Date the certificate was earned (ISO-8601 format) |
| ⚠️ `submissionCode` | [`String`](../scalars/String.md) | Submission code for verification **⚠️ Deprecated — sensitive information.** |
| `notes` | [`String`](../scalars/String.md) | Additional notes about the certificate |
| `score` | [`String`](../scalars/String.md) | Score achieved for the certificate |
| `active` | [`Boolean`](../scalars/Boolean.md) | Whether the certificate is currently active |
| `verified` | [`Boolean`](../scalars/Boolean.md) | Whether the certificate has been verified |
| `url` | [`String`](../scalars/String.md) | External URL for the certificate |
| `createdDateTime` | [`String`](../scalars/String.md) | Creation timestamp (ISO-8601 format) |
| `lastUpdatedDateTime` | [`String`](../scalars/String.md) | Last update timestamp (ISO-8601 format) |
| `expirationDate` | [`String`](../scalars/String.md) | Expiration date of the certificate (ISO-8601 format) |
| `externalId` | [`String`](../scalars/String.md) | External identifier for the certificate |

## Examples

### Example

```json
{
  "id": "4",
  "earnedDate": "abc123",
  "submissionCode": "abc123",
  "notes": "abc123",
  "score": "abc123",
  "active": false,
  "verified": true,
  "url": "abc123",
  "createdDateTime": "xyz789",
  "lastUpdatedDateTime": "xyz789",
  "expirationDate": "xyz789",
  "externalId": "xyz789"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileCertificate" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [FreelancerProfileAvailability](FreelancerProfileAvailability.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [FreelancerProfileCommittedResponseTime](FreelancerProfileCommittedResponseTime.md) ➡️
