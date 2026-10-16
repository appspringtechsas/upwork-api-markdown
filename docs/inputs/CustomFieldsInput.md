---
title: "CustomFieldsInput"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "CustomFieldsInput"
html_id: "definition-CustomFieldsInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CustomFieldsInput"
generated_by: "scripts/convert.mjs"
---


# `CustomFieldsInput` (input object)

## Description

custom fields input parameters

## Fields

| Field | Type | Description |
|---|---|---|
| `responseIds` | [`[ID!]`](../scalars/ID.md) | Each id is a unique identification for the response |
| `ids` | [`[ID!]`](../scalars/ID.md) | Each id is a unique identification for the custom field |
| `itemIds` | [`[ID!]`](../scalars/ID.md) | For each id if the response belongs to a dropdown type, item id refers to the custom field dropdown item primary key, Unique identification for the dropdown item |
| `rollupAssignmentIds` | [`[ID!]`](../scalars/ID.md) | Each id points to top level (first contract in chain of contracts) contract. Rate changes on this contract will preserve the rollup in the new contract Deprecated(reason: "use firstContractIds") |
| `offerIds` | [`[ID!]`](../scalars/ID.md) | Offers ids |
| `jobPostingIds` | [`[ID!]`](../scalars/ID.md) | Job posting ids |
| `byoInvitationIds` | [`[ID!]`](../scalars/ID.md) | Each id is for bringYourOwnFreelancer. Since the offer doesn't exist yet at time of invite, it's stored against the byo invite and saved to the offer, then contract by the byo service when the invitation has been responded to |
| `buyItNowIds` | [`[ID!]`](../scalars/ID.md) | Each id is for buy it now - the predefined work package |
| `questionnaireResponsesIds` | [`[ID!]`](../scalars/ID.md) | Each id points to classif and fl/cl questionnaires which use custom fields as their storage backend |
| `organizationIds` | [`[ID!]`](../scalars/ID.md) | If organizationIds are specified, only responses belonging to custom fields accessible by hiring managers in the specified teams will be returned. These organizationIds can be 'team OrganizationIds' or 'root organizationId'. Custom fields that are accessible/visible through out the COMPANY are always included in the response. |

## Examples

### Example

```json
{
  "responseIds": ["4"],
  "ids": ["4"],
  "itemIds": [4],
  "rollupAssignmentIds": [4],
  "offerIds": ["4"],
  "jobPostingIds": [4],
  "byoInvitationIds": ["4"],
  "buyItNowIds": [4],
  "questionnaireResponsesIds": ["4"],
  "organizationIds": ["4"]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CustomFieldsInput" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [CreationOfferInput](CreationOfferInput.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [DeleteMilestoneInput](DeleteMilestoneInput.md) ➡️
