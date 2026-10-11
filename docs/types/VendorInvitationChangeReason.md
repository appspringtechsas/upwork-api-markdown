---
title: "VendorInvitationChangeReason"
kind: "object"
domain: "Proposals"
gql_name: "VendorInvitationChangeReason"
html_id: "definition-VendorInvitationChangeReason"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-VendorInvitationChangeReason"
generated_by: "scripts/convert.mjs"
---


# `VendorInvitationChangeReason` (object)

## Description

Details about vendor job application invitation change reason

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Change reason ID |
| `reasonText` | [`String`](../scalars/String.md) | Text showing reason |
| `message` | [`String`](../scalars/String.md) | Message supplied during change |

## Examples

### Example

```json
{
  "id": "4",
  "reasonText": "xyz789",
  "message": "abc123"
}
```
