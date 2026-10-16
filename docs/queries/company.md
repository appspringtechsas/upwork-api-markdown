---
title: "company"
kind: "query"
gql_name: "company"
returns: "CompanyInfo"
html_id: "query-company"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-company"
generated_by: "scripts/convert.mjs"
---


# `company`

## Description

Get company info

## Required Permissions

"Common Entities - Read-Only Access"

## Response

Returns a [`CompanyInfo`](../types/CompanyInfo.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Company identifier |

## Examples

### Detailed structure

#### Query

```graphql
query company($id: ID!) {
  company(id: $id) {
    public {
      ...PublicCompanyInfoFragment
    }
    private {
      ...PrivateCompanyInfoFragment
    }
  }
}
```

#### Variables

```json
{"id": 4}
```

#### Response

```json
{
  "data": {
    "company": {
      "public": PublicCompanyInfo,
      "private": PrivateCompanyInfo
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-company" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [talentWorkHistory](talentWorkHistory.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [companySelector](companySelector.md) ➡️
