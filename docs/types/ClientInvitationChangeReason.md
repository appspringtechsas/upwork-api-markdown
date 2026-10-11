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
  "reason": "abc123",
  "reasonText": "xyz789",
  "message": "abc123"
}
```
