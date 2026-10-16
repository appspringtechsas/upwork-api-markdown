---
title: "BuyerExtra"
kind: "object"
domain: "Other"
gql_name: "BuyerExtra"
html_id: "definition-BuyerExtra"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-BuyerExtra"
generated_by: "scripts/convert.mjs"
---


# `BuyerExtra` (object)

## Description

Client extra info

## Fields

| Field | Type | Description |
|---|---|---|
| `isPaymentMethodVerified` | [`Boolean`](../scalars/Boolean.md) | Whether the client has verified their payment method |
| `workHistory` | [`[BuyerWorkHistoryItem]`](BuyerWorkHistoryItem.md) | List of buyer's previous work history and completed contracts |

## Examples

### Example

```json
{
  "isPaymentMethodVerified": false,
  "workHistory": [BuyerWorkHistoryItem]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-BuyerExtra" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [BuyerAssignmentsStats](BuyerAssignmentsStats.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [BuyerJobs](BuyerJobs.md) ➡️
