---
title: "CompanyInfo"
kind: "object"
domain: "Users and teams"
gql_name: "CompanyInfo"
html_id: "definition-CompanyInfo"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CompanyInfo"
generated_by: "scripts/convert.mjs"
---


# `CompanyInfo` (object)

## Description

Public and private company info bundle

## Fields

| Field | Type | Description |
|---|---|---|
| `public` | [`PublicCompanyInfo`](PublicCompanyInfo.md) | Public-facing company information |
| `private` | [`PrivateCompanyInfo`](PrivateCompanyInfo.md) | Private/internal company information |

## Examples

### Example

```json
{
  "public": PublicCompanyInfo,
  "private": PrivateCompanyInfo
}
```
