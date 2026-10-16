---
title: "ClientInvitationChangeReason"
kind: "object"
domain: "Proposals"
gql_name: "ClientInvitationChangeReason"
html_id: "definition-ClientInvitationChangeReason"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientInvitationChangeReason"
generated_by: "scripts/convert.mjs"
---


# `ClientInvitationChangeReason` (object)

## Description

Details about client job application invitation change reason

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID`](../scalars/ID.md) | Change reason ID |
| `reason` | [`String`](../scalars/String.md) | Reason text |
| `reasonText` | [`String`](../scalars/String.md) | Other reason text |
| `message` | [`String`](../scalars/String.md) | Message supplied during change |

## Examples

### Example

```json
{
  "id": "4",
  "reason": "xyz789",
  "reasonText": "abc123",
  "message": "xyz789"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientInvitationChangeReason" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ClientInvitationAdditionalInfo](ClientInvitationAdditionalInfo.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ClientInvitationConnection](ClientInvitationConnection.md) ➡️
