---
title: "VendorInvitationAuditDetails"
kind: "object"
domain: "Proposals"
gql_name: "VendorInvitationAuditDetails"
html_id: "definition-VendorInvitationAuditDetails"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-VendorInvitationAuditDetails"
generated_by: "scripts/convert.mjs"
---


# `VendorInvitationAuditDetails` (object)

## Description

Details about the audit of the invitation

## Fields

| Field | Type | Description |
|---|---|---|
| `createdBy` | [`String`](../scalars/String.md) | Who created the invite, the value can be a user UID or a word, e.g. UID: 12345678910, word: "system" |
| `createdDateTime` | [`String`](../scalars/String.md) | When the invite was created, will have the format yyyy-mm-ddThh:MM:ss.SSSZ |
| `modifiedBy` | [`String`](../scalars/String.md) | Who last modified the invite, the value can be a user UID or a word, e.g. UID: 12345678910, word: "system" |
| `modifiedDateTime` | [`String`](../scalars/String.md) | When the invite was last updated, will have the format yyyy-mm-ddThh:MM:ss.SSSZ |

## Examples

### Example

```json
{
  "createdBy": "xyz789",
  "createdDateTime": "xyz789",
  "modifiedBy": "abc123",
  "modifiedDateTime": "xyz789"
}
```
