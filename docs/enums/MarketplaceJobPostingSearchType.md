---
title: "MarketplaceJobPostingSearchType"
kind: "enum"
domain: "Job Posts"
gql_name: "MarketplaceJobPostingSearchType"
html_id: "definition-MarketplaceJobPostingSearchType"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplaceJobPostingSearchType"
generated_by: "scripts/convert.mjs"
---


# `MarketplaceJobPostingSearchType` (enum)

## Description

context and method of the job search being executed

## Values

| Value | Description |
|---|---|
| `USER_JOBS_SEARCH` | default search, will be always utilized when performing a user-initiated job search, any other value will be ignored |
| ⚠️ `JOBS_FEED` | retrieve saved searches **⚠️ Deprecated — No longer supported** |
| ⚠️ `USER_SITE_SEARCH_RSS` | retrieve values in RSS feed integration intended format **⚠️ Deprecated — No longer supported** |

## Examples

### Example

```graphql
"USER_JOBS_SEARCH"
```
