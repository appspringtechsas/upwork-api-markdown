---
title: "TalentContractTerms"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentContractTerms"
html_id: "definition-TalentContractTerms"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentContractTerms"
generated_by: "scripts/convert.mjs"
---


# `TalentContractTerms` (object)

## Description

Contract terms including rate and payment structure

## Fields

| Field | Type | Description |
|---|---|---|
| `hourlyRate` | [`String`](../scalars/String.md) | Hourly rate |
| `jobType` | [`TalentJobType`](../enums/TalentJobType.md) | Job type (hourly or fixed) |
| `stipendAmount` | [`String`](../scalars/String.md) | Stipend amount if applicable |
| `fixedAmount` | [`String`](../scalars/String.md) | Fixed amount if applicable |

## Examples

### Example

```json
{
  "hourlyRate": "abc123",
  "jobType": "FIXED",
  "stipendAmount": "abc123",
  "fixedAmount": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentContractTerms" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [TalentContractFeedback](TalentContractFeedback.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [TalentDiversityCertificateClassification](TalentDiversityCertificateClassification.md) ➡️
