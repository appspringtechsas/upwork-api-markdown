---
title: "PurchaseOrder"
kind: "object"
domain: "Offers and Contracts"
gql_name: "PurchaseOrder"
html_id: "definition-PurchaseOrder"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PurchaseOrder"
generated_by: "scripts/convert.mjs"
---


# `PurchaseOrder` (object)

## Description

Purchase order information

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | ID of the PO |
| `orderNumber` | [`String!`](../scalars/String.md) | The order number to be displayed to the user |
| `description` | [`String`](../scalars/String.md) | Description associated with the offer, if any |
| `amount` | [`Money!`](Money.md) | PO amount |
| `expiresAtDateTime` | [`String`](../scalars/String.md) | Time for experince of the model |
| `aclType` | [`PurchaseOrderAclType!`](../enums/PurchaseOrderAclType.md) | Controls who can see/use this PO |
| `aclSpecification` | [`String`](../scalars/String.md) | ACL specification |
| `archived` | [`Boolean!`](../scalars/Boolean.md) | Whether PO is archived |
| `placeHolder` | [`Boolean!`](../scalars/Boolean.md) | True if "I don't have it yet" is enabled and selected |
| `createdAtDateTime` | [`String!`](../scalars/String.md) | Creation timestamp |
| `creator` | [`GenericUser!`](GenericUser.md) | User who created the PO |
| `alertThreshold` | [`String`](../scalars/String.md) | Percentage of spend used at which point user shall be notified |
| `notificationAlcType` | [`PurchaseOrderNotificationAclType`](../enums/PurchaseOrderNotificationAclType.md) | Controls who gets notified |
| `notificationAlcSpecification` | [`String`](../scalars/String.md) | Notification ACL specification |

## Examples

### Example

```json
{
  "id": 4,
  "orderNumber": "abc123",
  "description": "abc123",
  "amount": Money,
  "expiresAtDateTime": "abc123",
  "aclType": "HMS_IN_COMPANY",
  "aclSpecification": "abc123",
  "archived": false,
  "placeHolder": true,
  "createdAtDateTime": "xyz789",
  "creator": GenericUser,
  "alertThreshold": "abc123",
  "notificationAlcType": "ALL_USERS_WITH_HIRING_PERMISSIONS_IN_COMPANY",
  "notificationAlcSpecification": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PurchaseOrder" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [PtcData](PtcData.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [StipendContractTerm](StipendContractTerm.md) ➡️
