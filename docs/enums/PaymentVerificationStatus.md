---
title: "PaymentVerificationStatus"
kind: "enum"
domain: "Users and teams"
gql_name: "PaymentVerificationStatus"
html_id: "definition-PaymentVerificationStatus"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PaymentVerificationStatus"
generated_by: "scripts/convert.mjs"
---


# `PaymentVerificationStatus` (enum)

## Description

Payment method verification status codes

## Values

| Value | Description |
|---|---|
| `DEPOSIT_UNSUPPORTED` | Deposit verification not supported |
| `ONHOLD` | Verification on hold |
| `EXPIRED` | Verification expired |
| `DECLINED` | Verification declined |
| `VERIFICATIONFAILED` | Verification failed |
| `VERIFICATIONINPROGRESS` | Verification in progress |
| `VERIFIED` | Payment method verified |
| `ACTIVE` | Payment method active |

## Examples

### Example

```graphql
"DEPOSIT_UNSUPPORTED"
```
