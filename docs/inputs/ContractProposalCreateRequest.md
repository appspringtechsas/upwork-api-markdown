---
title: "ContractProposalCreateRequest"
kind: "input_object"
domain: "Other"
gql_name: "ContractProposalCreateRequest"
html_id: "definition-ContractProposalCreateRequest"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ContractProposalCreateRequest"
generated_by: "scripts/convert.mjs"
---


# `ContractProposalCreateRequest` (input object)

## Fields

| Field | Type | Description |
|---|---|---|
| `clientTeamId` | [`ID!`](../scalars/ID.md) | Client team for the contract proposal |
| `clientPersonId` | [`ID!`](../scalars/ID.md) | Client person responsible for the contract proposal |
| `freelancerId` | [`ID!`](../scalars/ID.md) | Freelancer that is making the contract proposal |
| `agencyTeamId` | [`ID`](../scalars/ID.md) | Agency team responsible for the contract proposal. Only populated for agency proposals |
| `agencyManagerId` | [`ID`](../scalars/ID.md) | Agency manager responsible for the contract proposal. Only populated for agency proposals |
| `source` | [`ContractProposalSourceInput!`](ContractProposalSourceInput.md) | Contract proposal source (either a contract or a Dash room) |
| `title` | [`String!`](../scalars/String.md) | Title of the contract proposal |
| `description` | [`String`](../scalars/String.md) | Description of the contract proposal |
| `offerTerms` | [`ContractProposalOfferTermsInput!`](ContractProposalOfferTermsInput.md) | Offer terms for the offer that will be created from this contract proposal if it is accepted |
| `deliveryModel` | [`DeliveryModelInput!`](../enums/DeliveryModelInput.md) | Contract proposal delivery model (only TALENT_MARKETPLACE and DIRECT_CONTRACT_V2 are supported) |
| `rateIncreaseRequest` | [`ContractProposalRateIncreaseRequest`](ContractProposalRateIncreaseRequest.md) | Planned rate increase, if any |
| `attachmentUids` | [`[String!]`](../scalars/String.md) | Attachment UIDs for the contract proposal |
| `startDateTime` | [`String`](../scalars/String.md) | Contract start date/time in ISO-8601 format |
| `jobPostingUid` | [`ID`](../scalars/ID.md) | Job posting UID, if the contract proposal is created from a job posting |

## Examples

### Example

```json
{
  "clientTeamId": 4,
  "clientPersonId": 4,
  "freelancerId": 4,
  "agencyTeamId": 4,
  "agencyManagerId": 4,
  "source": ContractProposalSourceInput,
  "title": "abc123",
  "description": "xyz789",
  "offerTerms": ContractProposalOfferTermsInput,
  "deliveryModel": "TALENT_MARKETPLACE",
  "rateIncreaseRequest": ContractProposalRateIncreaseRequest,
  "attachmentUids": ["xyz789"],
  "startDateTime": "xyz789",
  "jobPostingUid": 4
}
```
