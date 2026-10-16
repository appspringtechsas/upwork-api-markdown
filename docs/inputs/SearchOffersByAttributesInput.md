---
title: "SearchOffersByAttributesInput"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "SearchOffersByAttributesInput"
html_id: "definition-SearchOffersByAttributesInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-SearchOffersByAttributesInput"
generated_by: "scripts/convert.mjs"
---


# `SearchOffersByAttributesInput` (input object)

## Description

Input for searching offers by attributes

## Fields

| Field | Type | Description |
|---|---|---|
| `ids` | [`[ID!]!`](../scalars/ID.md) | List of attribute identifiers |
| `searchAttribute` | [`OfferSearchAttribute!`](../enums/OfferSearchAttribute.md) | Attribute to search offers by |
| `states` | [`[OfferLegacyState!]`](../enums/OfferLegacyState.md) | Legacy offer states to search by |
| `includeAttachments` | [`Boolean`](../scalars/Boolean.md) | `true` |
| `includeMilestones` | [`Boolean`](../scalars/Boolean.md) | `true` |
| `includeScheduledRateIncrease` | [`Boolean`](../scalars/Boolean.md) | `false` |

## Examples

### Example

```json
{
  "ids": ["4"],
  "searchAttribute": "JobApplication",
  "states": ["Draft"],
  "includeAttachments": false,
  "includeMilestones": false,
  "includeScheduledRateIncrease": true
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-SearchOffersByAttributesInput" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [RejectMilestoneSubmissionInput](RejectMilestoneSubmissionInput.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [SearchOffersInput](SearchOffersInput.md) ➡️
