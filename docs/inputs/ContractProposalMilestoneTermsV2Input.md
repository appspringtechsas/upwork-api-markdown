---
title: "ContractProposalMilestoneTermsV2Input"
kind: "input_object"
domain: "Other"
gql_name: "ContractProposalMilestoneTermsV2Input"
html_id: "definition-ContractProposalMilestoneTermsV2Input"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ContractProposalMilestoneTermsV2Input"
generated_by: "scripts/convert.mjs"
---


# `ContractProposalMilestoneTermsV2Input` (input object)

## Fields

| Field | Type | Description |
|---|---|---|
| `budget` | [`MoneyInput!`](MoneyInput.md) | Expected budget for the project; can be different from total milestone amount |
| `wholeAmount` | [`Boolean`](../scalars/Boolean.md) | If true, will create a single milestone with the total budget; otherwise, expects the list of milestones |
| `milestones` | [`[ContractProposalMilestoneInput]!`](ContractProposalMilestoneInput.md) | Milestones |

## Examples

### Example

```json
{
  "budget": MoneyInput,
  "wholeAmount": false,
  "milestones": [ContractProposalMilestoneInput]
}
```
