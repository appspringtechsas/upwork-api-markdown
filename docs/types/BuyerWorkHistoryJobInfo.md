---
title: "BuyerWorkHistoryJobInfo"
kind: "object"
domain: "Other"
gql_name: "BuyerWorkHistoryJobInfo"
html_id: "definition-BuyerWorkHistoryJobInfo"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-BuyerWorkHistoryJobInfo"
generated_by: "scripts/convert.mjs"
---


# `BuyerWorkHistoryJobInfo` (object)

## Description

Job Information

## Fields

| Field | Type | Description |
|---|---|---|
| `title` | [`String`](../scalars/String.md) | Job title |
| `type` | [`ContractType`](../enums/ContractType.md) | Contract type (HOURLY,FIXED) - external type from job service |

## Examples

### Example

```json
{"title": "abc123", "type": "HOURLY"}
```
