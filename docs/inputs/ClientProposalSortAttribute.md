---
title: "ClientProposalSortAttribute"
kind: "input_object"
domain: "Proposals"
gql_name: "ClientProposalSortAttribute"
html_id: "definition-ClientProposalSortAttribute"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientProposalSortAttribute"
generated_by: "scripts/convert.mjs"
---


# `ClientProposalSortAttribute` (input object)

## Description

Sorting configuration for client proposals

## Fields

| Field | Type | Description |
|---|---|---|
| `field` | [`ClientProposalSortAttributeType!`](../enums/ClientProposalSortAttributeType.md) | Attribute to sort client proposals by |
| `sortOrder` | [`SortOrder!`](../enums/SortOrder.md) | Sorting order |

## Examples

### Example

```json
{"field": "CHARGERATE", "sortOrder": "ASC"}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientProposalSortAttribute" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ClientProposalShortlistRequest](ClientProposalShortlistRequest.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [CreateDirectFileAttachmentUploadLinkInput](CreateDirectFileAttachmentUploadLinkInput.md) ➡️
