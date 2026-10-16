---
title: "FreelancerSearchResultContractFeedbackSummary"
kind: "object"
domain: "Search"
gql_name: "FreelancerSearchResultContractFeedbackSummary"
html_id: "definition-FreelancerSearchResultContractFeedbackSummary"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerSearchResultContractFeedbackSummary"
generated_by: "scripts/convert.mjs"
---


# `FreelancerSearchResultContractFeedbackSummary` (object)

## Description

Contract feedback summary in freelancer search results

## Fields

| Field | Type | Description |
|---|---|---|
| `publicComment` | [`Boolean`](../scalars/Boolean.md) | Boolean indicating if the feedback is public |
| `comment` | [`String`](../scalars/String.md) | Comment provided by the client |
| `score` | [`Float`](../scalars/Float.md) | Feedback score |

## Examples

### Example

```json
{
  "publicComment": false,
  "comment": "xyz789",
  "score": 123.45
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerSearchResultContractFeedbackSummary" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [FreelancerProfilesSearchResultEdge](FreelancerProfilesSearchResultEdge.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [FreelancerSearchResultContractSummary](FreelancerSearchResultContractSummary.md) ➡️
