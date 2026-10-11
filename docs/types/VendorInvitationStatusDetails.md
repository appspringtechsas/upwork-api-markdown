---
title: "VendorInvitationStatusDetails"
kind: "object"
domain: "Proposals"
gql_name: "VendorInvitationStatusDetails"
html_id: "definition-VendorInvitationStatusDetails"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-VendorInvitationStatusDetails"
generated_by: "scripts/convert.mjs"
---


# `VendorInvitationStatusDetails` (object)

## Description

Status details of the invitation

## Fields

| Field | Type | Description |
|---|---|---|
| `status` | [`VendorInvitationStatus`](../enums/VendorInvitationStatus.md) | Status of the invitation |
| `lastStatusChangeReason` | [`VendorInvitationChangeReason`](VendorInvitationChangeReason.md) | Reason for the last change of status for the invite |

## Examples

### Example

```json
{
  "status": "Pending",
  "lastStatusChangeReason": VendorInvitationChangeReason
}
```
