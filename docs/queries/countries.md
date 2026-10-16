---
title: "countries"
kind: "query"
gql_name: "countries"
returns: "[Country!]!"
html_id: "query-countries"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-countries"
generated_by: "scripts/convert.mjs"
---


# `countries`

## Description

List of countries. Currently no filtering is available

## Required Permissions

"Common Functionality - Read And Write Access"

## Response

Returns [`[Country!]!`](../types/Country.md)

## Examples

### Detailed structure

#### Query

```graphql
query countries {
  countries {
    id
    name
    twoLetterAbbreviation
    threeLetterAbbreviation
    region
    phoneCode
    relatedRegion {
      ...RegionFragment
    }
    relatedSubRegion {
      ...RegionFragment
    }
    active
    registrationAllowed
  }
}
```

#### Response

```json
{
  "data": {
    "countries": [
      {
        "id": 4,
        "name": "xyz789",
        "twoLetterAbbreviation": "abc123",
        "threeLetterAbbreviation": "abc123",
        "region": "EU",
        "phoneCode": "xyz789",
        "relatedRegion": Region,
        "relatedSubRegion": Region,
        "active": true,
        "registrationAllowed": true
      }
    ]
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-countries" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [marketplaceJobPostingsContents](marketplaceJobPostingsContents.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [languages](languages.md) ➡️
