---
title: "Search"
kind: "object"
domain: "Search"
gql_name: "Search"
html_id: "definition-Search"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Search"
generated_by: "scripts/convert.mjs"
---


# `Search` (object)

## Description

Search result

## Fields

| Field | Type | Description |
|---|---|---|
| `searchFreelancerPublicProfile` | [`SemSearchV2Response!`](SemSearchV2Response.md) | Returns the Freelancer Profiles based on the given filter and publicly visible |

## Field arguments

### `searchFreelancerPublicProfile`

| Argument | Type | Description |
|---|---|---|
| `request` | [`SemSearchV2Request!`](../inputs/SemSearchV2Request.md) | Search request payload |

## Examples

### Example

```json
{"searchFreelancerPublicProfile": SemSearchV2Response}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Search" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [PublicMarketplaceJobPostingsSearchEngagementDuration](PublicMarketplaceJobPostingsSearchEngagementDuration.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [SemSearchV2Profile](SemSearchV2Profile.md) ➡️
