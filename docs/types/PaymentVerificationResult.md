---
title: "PaymentVerificationResult"
kind: "object"
domain: "Users and teams"
gql_name: "PaymentVerificationResult"
html_id: "definition-PaymentVerificationResult"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PaymentVerificationResult"
generated_by: "scripts/convert.mjs"
---


# `PaymentVerificationResult` (object)

## Description

Payment verification result

## Fields

| Field | Type | Description |
|---|---|---|
| `status` | [`PaymentVerificationStatus`](../enums/PaymentVerificationStatus.md) | Payment verification status |
| `paymentVerified` | [`Boolean`](../scalars/Boolean.md) | A flag that indicates whether the payment method is verified or not |

## Examples

### Example

```json
{"status": "DEPOSIT_UNSUPPORTED", "paymentVerified": true}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PaymentVerificationResult" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [Page](Page.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [PersonalDataLocation](PersonalDataLocation.md) ➡️
