---
title: "EndContractAtomicInput"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "EndContractAtomicInput"
html_id: "definition-EndContractAtomicInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-EndContractAtomicInput"
generated_by: "scripts/convert.mjs"
---


# `EndContractAtomicInput` (input object)

## Description

Contract end payload for atomic end-contract flow

## Fields

| Field | Type | Description |
|---|---|---|
| `endDate` | [`String`](../scalars/String.md) | End contract date (timestamp) defaults to the current day |
| `feedbacks` | [`EndContractAtomicFeedbacksInput`](EndContractAtomicFeedbacksInput.md) | Feedback and payment payloads for atomic end-contract flow |
| `iovationBlackbox` | [`String`](../scalars/String.md) | Iovation blackbox payload |
| `ipAddress` | [`String`](../scalars/String.md) | Client IP address |
| `idempotencyKey` | [`String`](../scalars/String.md) | Idempotency key for safe retries |
| `languageFeedback` | [`Int`](../scalars/Int.md) | Language proficiency feedback |
| `bonusMessage` | [`String`](../scalars/String.md) | Bonus message |
| `bonusTimestampIssued` | [`String`](../scalars/String.md) | Bonus issuance timestamp |
| `bonusAmount` | [`WMMoneyInput`](WMMoneyInput.md) | Bonus amount |
| `additionalAmount` | [`WMMoneyInput`](WMMoneyInput.md) | Additional fixed-price payment amount |
| `payWhat` | [`EndContractPayWhat`](../enums/EndContractPayWhat.md) | What to pay on fixed-price contract end |
| `reasonRef` | [`String`](../scalars/String.md) | Contract end reason ID. Optional. See Query.reasons(reasonType: CONTRACT_END_HOURLY) and Query.reasons(reasonType: CONTRACT_END_FIXED) for the list of possible reasons. |

## Examples

### Example

```json
{
  "endDate": "abc123",
  "feedbacks": EndContractAtomicFeedbacksInput,
  "iovationBlackbox": "xyz789",
  "ipAddress": "xyz789",
  "idempotencyKey": "abc123",
  "languageFeedback": 123,
  "bonusMessage": "abc123",
  "bonusTimestampIssued": "xyz789",
  "bonusAmount": WMMoneyInput,
  "additionalAmount": WMMoneyInput,
  "payWhat": "REMAINING",
  "reasonRef": "xyz789"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-EndContractAtomicInput" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [EndContractAtomicFeedbacksInput](EndContractAtomicFeedbacksInput.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [EndContractInput](EndContractInput.md) ➡️
