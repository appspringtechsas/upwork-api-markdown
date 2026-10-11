---
title: "VendorUserInput"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "VendorUserInput"
html_id: "definition-VendorUserInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-VendorUserInput"
generated_by: "scripts/convert.mjs"
---


# `VendorUserInput` (input object)

## Description

User info associated with the offer

## Fields

| Field | Type | Description |
|---|---|---|
| `userId` | [`ID!`](../scalars/ID.md) | Vendor user identifier |
| `teamId` | [`ID!`](../scalars/ID.md) | for agency offers, must be set to the agency team the offer belongs to; for individual freelancers must be set to freelancer's sole proprietor organization |

## Examples

### Example

```json
{"userId": 4, "teamId": "4"}
```
