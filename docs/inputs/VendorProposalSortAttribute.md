---
title: "VendorProposalSortAttribute"
kind: "input_object"
domain: "Proposals"
gql_name: "VendorProposalSortAttribute"
html_id: "definition-VendorProposalSortAttribute"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-VendorProposalSortAttribute"
generated_by: "scripts/convert.mjs"
---


# `VendorProposalSortAttribute` (input object)

## Description

Sorting configuration for vendor proposals

## Fields

| Field | Type | Description |
|---|---|---|
| `field` | [`VendorProposalSortAttributeType!`](../enums/VendorProposalSortAttributeType.md) | Attribute to sort vendor proposals by |
| `sortOrder` | [`SortOrder!`](../enums/SortOrder.md) | Sorting order |

## Examples

### Example

```json
{"field": "CREATEDDATETIME", "sortOrder": "ASC"}
```
