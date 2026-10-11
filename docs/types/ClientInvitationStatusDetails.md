---
title: "ClientInvitationStatusDetails"
kind: "object"
domain: "Proposals"
gql_name: "ClientInvitationStatusDetails"
html_id: "definition-ClientInvitationStatusDetails"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientInvitationStatusDetails"
generated_by: "scripts/convert.mjs"
---


# `ClientInvitationStatusDetails` (object)

## Description

Status details of the invitation

## Fields

| Field | Type | Description |
|---|---|---|
| `status` | [`ClientInvitationStatus`](../enums/ClientInvitationStatus.md) | Status of the invitation |
| `lastStatusChangeReason` | [`ClientInvitationChangeReason`](ClientInvitationChangeReason.md) | Reason for the last change of status for the invite |

## Examples

### Example

```json
{
  "status": "Drafted",
  "lastStatusChangeReason": ClientInvitationChangeReason
}
```
