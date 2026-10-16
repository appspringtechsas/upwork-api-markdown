---
title: "visitor"
kind: "query"
gql_name: "visitor"
returns: "Visitor"
html_id: "query-visitor"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-visitor"
generated_by: "scripts/convert.mjs"
---


# `visitor`

## Description

Visitor details

## Required Permissions

"Common Functionality - Read And Write Access"

## Response

Returns a [`Visitor`](../types/Visitor.md)

## Examples

### Detailed structure

#### Query

```graphql
query visitor {
  visitor {
    i18n {
      ...VisitorI18NFragment
    }
    segment {
      ...VisitorSegmentFragment
    }
  }
}
```

#### Response

```json
{
  "data": {
    "visitor": {
      "i18n": VisitorI18N,
      "segment": VisitorSegment
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-visitor" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [timeZones](timeZones.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [contract](contract.md) ➡️
