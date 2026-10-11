---
title: "NotificationsInput"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "NotificationsInput"
html_id: "definition-NotificationsInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-NotificationsInput"
generated_by: "scripts/convert.mjs"
---


# `NotificationsInput` (input object)

## Description

Notification configurations

## Fields

| Field | Type | Description |
|---|---|---|
| `notifyClient` | [`Boolean`](../scalars/Boolean.md) | Notify client |
| `notifyVendor` | [`Boolean`](../scalars/Boolean.md) | Notify vendor |
| `sendDash2ContractRoom` | [`Boolean`](../scalars/Boolean.md) | Notify contract room |

## Examples

### Example

```json
{"notifyClient": false, "notifyVendor": true, "sendDash2ContractRoom": true}
```
