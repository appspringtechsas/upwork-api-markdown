---
title: "jobPubDetails"
kind: "query"
gql_name: "jobPubDetails"
returns: "JobPubDetails"
html_id: "query-jobPubDetails"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-jobPubDetails"
generated_by: "scripts/convert.mjs"
---


# `jobPubDetails`

## Description

Fetch public job details including client info, opening details, and qualifications

## Response

Returns a [`JobPubDetails`](../types/JobPubDetails.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) |  |

## Examples

### Detailed structure

#### Query

```graphql
query jobPubDetails($id: ID!) {
  jobPubDetails(id: $id) {
    buyer {
      ...JobPubBuyerInfoFragment
    }
    buyerExtra {
      ...BuyerExtraFragment
    }
    opening {
      ...JobPubOpeningInfoFragment
    }
    qualifications {
      ...JobQualificationsFragment
    }
    similarJobs {
      ...PubSimilarJobFragment
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
    "jobPubDetails": {
      "buyer": JobPubBuyerInfo,
      "buyerExtra": BuyerExtra,
      "opening": JobPubOpeningInfo,
      "qualifications": JobQualifications,
      "similarJobs": [PubSimilarJob]
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-jobPubDetails" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [jobPostSkillSearch](jobPostSkillSearch.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [mutations index](../mutations/README.md) ➡️
