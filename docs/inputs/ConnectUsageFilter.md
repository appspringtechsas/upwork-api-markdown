---
title: "ConnectUsageFilter"
kind: "input_object"
domain: "Other"
gql_name: "ConnectUsageFilter"
html_id: "definition-ConnectUsageFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ConnectUsageFilter"
generated_by: "scripts/convert.mjs"
---


# `ConnectUsageFilter` (input object)

## Description

Filters for searching Connect usage history

## Fields

| Field | Type | Description |
|---|---|---|
| `searchDateRange` | [`DateTimeRange!`](DateTimeRange.md) | Search Will be done for the given date range |
| `types` | [`[ConnectsPaymentsTransactionTypeEnum!]`](../enums/ConnectsPaymentsTransactionTypeEnum.md) | Filter search by the type of the transaction |

## Examples

### Example

```json
{"searchDateRange": DateTimeRange, "types": ["CREDIT"]}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ConnectUsageFilter" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [AcceptVendorInvitationSri](AcceptVendorInvitationSri.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ContractProposalCreateRequest](ContractProposalCreateRequest.md) ➡️
