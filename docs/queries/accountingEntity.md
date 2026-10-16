---
title: "accountingEntity"
kind: "query"
gql_name: "accountingEntity"
returns: "AccountingEntity!"
html_id: "query-accountingEntity"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-accountingEntity"
generated_by: "scripts/convert.mjs"
---


# `accountingEntity`

## Description

Get the Accounting Entity of the current user from their organization uid

## Required Permissions

"Read only access for transaction data"

## Response

Returns an [`AccountingEntity!`](../types/AccountingEntity.md)

## Examples

### Detailed structure

#### Query

```graphql
query accountingEntity {
  accountingEntity {
    id
  }
}
```

#### Response

```json
{"data": {"accountingEntity": {"id": "4"}}}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-accountingEntity" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [workflowView](workflowView.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [bidsForJob](bidsForJob.md) ➡️
