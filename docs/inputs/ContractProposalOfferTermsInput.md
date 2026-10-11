---
title: "ContractProposalOfferTermsInput"
kind: "input_object"
domain: "Other"
gql_name: "ContractProposalOfferTermsInput"
html_id: "definition-ContractProposalOfferTermsInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ContractProposalOfferTermsInput"
generated_by: "scripts/convert.mjs"
---


# `ContractProposalOfferTermsInput` (input object)

## Description

Contract proposal offer terms. Exactly one of 'hourlyTerms' or 'milestoneTerms' properties should be set

## Fields

| Field | Type | Description |
|---|---|---|
| `hourlyTerms` | [`ContractProposalHourlyTermsInput`](ContractProposalHourlyTermsInput.md) | Hourly terms |
| `milestoneTerms` | [`ContractProposalMilestoneTermsV2Input`](ContractProposalMilestoneTermsV2Input.md) | Milestone terms |

## Examples

### Example

```json
{
  "hourlyTerms": ContractProposalHourlyTermsInput,
  "milestoneTerms": ContractProposalMilestoneTermsV2Input
}
```
