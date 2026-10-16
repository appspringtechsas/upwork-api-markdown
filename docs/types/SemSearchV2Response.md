---
title: "SemSearchV2Response"
kind: "object"
domain: "Search"
gql_name: "SemSearchV2Response"
html_id: "definition-SemSearchV2Response"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-SemSearchV2Response"
generated_by: "scripts/convert.mjs"
---


# `SemSearchV2Response` (object)

## Description

SEM search response

## Fields

| Field | Type | Description |
|---|---|---|
| `pagingInfo` | [`PagingInfo!`](PagingInfo.md) | Paging information for the result set |
| `profiles` | [`[SemSearchV2Profile]!`](SemSearchV2Profile.md) | Matching profiles |

## Examples

### Example

```json
{
  "pagingInfo": PagingInfo,
  "profiles": [SemSearchV2Profile]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-SemSearchV2Response" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [SemSearchV2Profile](SemSearchV2Profile.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [UserFreelancerProfilesSearchRecord](UserFreelancerProfilesSearchRecord.md) ➡️
