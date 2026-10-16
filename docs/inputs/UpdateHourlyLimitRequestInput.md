---
title: "UpdateHourlyLimitRequestInput"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "UpdateHourlyLimitRequestInput"
html_id: "definition-UpdateHourlyLimitRequestInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-UpdateHourlyLimitRequestInput"
generated_by: "scripts/convert.mjs"
---


# `UpdateHourlyLimitRequestInput` (input object)

## Description

Update hourly limit request

## Fields

| Field | Type | Description |
|---|---|---|
| `notifications` | [`NotificationsInput`](NotificationsInput.md) | Notification configurations |
| `weeklyLimit` | [`String`](../scalars/String.md) | Weekly hourly limit |

## Examples

### Example

```json
{
  "notifications": NotificationsInput,
  "weeklyLimit": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-UpdateHourlyLimitRequestInput" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [SearchOffersInput](SearchOffersInput.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [VendorContractSearchFilter](VendorContractSearchFilter.md) ➡️
