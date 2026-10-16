---
title: "TalentCommunityCertificate"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentCommunityCertificate"
html_id: "definition-TalentCommunityCertificate"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentCommunityCertificate"
generated_by: "scripts/convert.mjs"
---


# `TalentCommunityCertificate` (object)

## Description

Community certificate details including provider and verification info

## Fields

| Field | Type | Description |
|---|---|---|
| `name` | [`String`](../scalars/String.md) | Certificate name |
| `description` | [`String`](../scalars/String.md) | Certificate description |
| `logoUrl` | [`String`](../scalars/String.md) | URL to certificate logo |
| `verificationMethod` | [`String`](../scalars/String.md) | Method used to verify the certificate |
| `provider` | [`String`](../scalars/String.md) | Certificate provider organization |
| `providerLink` | [`String`](../scalars/String.md) | Link to provider website |
| `duration` | [`Int`](../scalars/Int.md) | Certificate duration in days |
| `classifications` | [`[TalentDiversityCertificateClassification]`](TalentDiversityCertificateClassification.md) | Diversity classifications for this certificate |
| `status` | [`TalentCommunityCertificateStatus`](../enums/TalentCommunityCertificateStatus.md) | Current status of the certificate |

## Examples

### Example

```json
{
  "name": "xyz789",
  "description": "xyz789",
  "logoUrl": "xyz789",
  "verificationMethod": "xyz789",
  "provider": "abc123",
  "providerLink": "xyz789",
  "duration": 987,
  "classifications": [
    TalentDiversityCertificateClassification
  ],
  "status": "PENDING"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentCommunityCertificate" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [TalentCloudTaskSection](TalentCloudTaskSection.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [TalentContract](TalentContract.md) ➡️
