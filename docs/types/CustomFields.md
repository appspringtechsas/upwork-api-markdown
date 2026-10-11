---
title: "CustomFields"
kind: "object"
domain: "Offers and Contracts"
gql_name: "CustomFields"
html_id: "definition-CustomFields"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CustomFields"
generated_by: "scripts/convert.mjs"
---


# `CustomFields` (object)

## Description

Custom field snapshot

## Fields

| Field | Type | Description |
|---|---|---|
| `responseId` | [`ID`](../scalars/ID.md) | Unique identification for the response |
| `id` | [`ID`](../scalars/ID.md) | Unique identification for the custom field |
| `itemId` | [`ID`](../scalars/ID.md) | If the response belongs to a dropdown type, item id refers to the custom field dropdown item primary key, Unique identification for the dropdown item |
| `typeSnap` | [`CustomFieldsTypeSnap`](../enums/CustomFieldsTypeSnap.md) | Type snap |
| `labelSnap` | [`String`](../scalars/String.md) | Label snap |
| `displayValueSnap` | [`String`](../scalars/String.md) | Display value snap |
| `creator` | [`GenericUser`](GenericUser.md) | Custom field creator |
| `createdDateTime` | [`DateTime`](DateTime.md) | Creation date time |
| ⚠️ `rollupAssignmentId` | [`ID`](../scalars/ID.md) | Top level (first contract in chain of contracts) contract. Rate changes on this contract will preserve the rollup in the new contract **⚠️ Deprecated — use firstContractId instead** |
| `firstContractId` | [`ID`](../scalars/ID.md) | Top level (first contract in chain of contracts) contract. Rate changes on this contract will preserve the rollup in the new contract |
| `offerId` | [`ID`](../scalars/ID.md) | Offer ID |
| `jobPostingId` | [`ID`](../scalars/ID.md) | Job posting ID |
| `byoInvitationId` | [`ID`](../scalars/ID.md) | For bringYourOwnFreelancer - since the offer doesn't exist yet at time of invite, it's stored against the byo invite and saved to the offer, Then contract by the byo service when the invitation has been responded to |
| `buyItNowId` | [`ID`](../scalars/ID.md) | For buy it now - the predefined work package |
| `questionnaireResponsesId` | [`ID`](../scalars/ID.md) | For classif and fl/cl questionnaires which use custom fields as their storage backend |
| `stale` | [`Boolean`](../scalars/Boolean.md) | Stale flag |
| `termSectionId` | [`ID`](../scalars/ID.md) | For default terms - used by the default terms system within enterprise |
| `aclSnap` | [`String`](../scalars/String.md) | for eg: TEAM:13343888. COMPANY indicates the custom field has an acces level at the root organization. And TEAM: indicates access only under a specific team with that |

## Examples

### Example

```json
{
  "responseId": "4",
  "id": 4,
  "itemId": 4,
  "typeSnap": "TEXT_FIELD",
  "labelSnap": "xyz789",
  "displayValueSnap": "xyz789",
  "creator": GenericUser,
  "createdDateTime": DateTime,
  "rollupAssignmentId": "4",
  "firstContractId": "4",
  "offerId": 4,
  "jobPostingId": "4",
  "byoInvitationId": "4",
  "buyItNowId": 4,
  "questionnaireResponsesId": "4",
  "stale": false,
  "termSectionId": "4",
  "aclSnap": "abc123"
}
```
