---
title: "TalentProfileCommunityCertificate"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentProfileCommunityCertificate"
html_id: "definition-TalentProfileCommunityCertificate"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentProfileCommunityCertificate"
generated_by: "scripts/convert.mjs"
---


# `TalentProfileCommunityCertificate` (object)

## Description

Community or diversity certificate associated with a freelancer profile

## Fields

| Field | Type | Description |
|---|---|---|
| `personId` | [`String`](../scalars/String.md) | Person identifier |
| `certificateAttachmentId` | [`String`](../scalars/String.md) | Attachment ID for certificate document |
| `certificationNumber` | [`String`](../scalars/String.md) | Certificate number or identifier |
| `expirationDate` | [`String`](../scalars/String.md) | Certificate expiration date |
| `businessName` | [`String`](../scalars/String.md) | Business name on the certificate |
| `visibility` | [`TalentCommunityCertificateVisibility`](../enums/TalentCommunityCertificateVisibility.md) | Visibility setting for the certificate |
| `certificate` | [`TalentCommunityCertificate`](TalentCommunityCertificate.md) | Certificate details |
| `otherCertificate` | [`TalentOtherCommunityCertificate`](TalentOtherCommunityCertificate.md) | Other certificate details if not in standard list |

## Examples

### Example

```json
{
  "personId": "xyz789",
  "certificateAttachmentId": "abc123",
  "certificationNumber": "abc123",
  "expirationDate": "abc123",
  "businessName": "xyz789",
  "visibility": "PUBLIC",
  "certificate": TalentCommunityCertificate,
  "otherCertificate": TalentOtherCommunityCertificate
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentProfileCommunityCertificate" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [TalentProfileAggregate](TalentProfileAggregate.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [TalentProfileCompletenessSummary](TalentProfileCompletenessSummary.md) ➡️
