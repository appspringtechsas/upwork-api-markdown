---
title: "BPAPrivateDataFilter"
kind: "input_object"
domain: "Reporting"
gql_name: "BPAPrivateDataFilter"
html_id: "definition-BPAPrivateDataFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-BPAPrivateDataFilter"
generated_by: "scripts/convert.mjs"
---


# `BPAPrivateDataFilter` (input object)

## Description

Filter for BPA (Billing Platform API) private data

## Fields

| Field | Type | Description |
|---|---|---|
| `serviceName_eq` | [`String`](../scalars/String.md) | Filter by service name |
| `serviceVersion_eq` | [`String`](../scalars/String.md) | Filter by service version |

## Examples

### Example

```json
{
  "serviceName_eq": "xyz789",
  "serviceVersion_eq": "abc123"
}
```
