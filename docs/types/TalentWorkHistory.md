---
title: "TalentWorkHistory"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentWorkHistory"
html_id: "definition-TalentWorkHistory"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentWorkHistory"
generated_by: "scripts/convert.mjs"
---


# `TalentWorkHistory` (object)

## Description

Work history entry including contract, feedback, and job details

## Fields

| Field | Type | Description |
|---|---|---|
| `contract` | [`TalentContract`](TalentContract.md) | Contract details |
| `contractAggregate` | [`TalentContractAggregate`](TalentContractAggregate.md) | Aggregated contract statistics |
| `feedback` | [`TalentContractFeedback`](TalentContractFeedback.md) | Feedback for this contract |
| `opening` | [`TalentOpening`](TalentOpening.md) | Job opening details |

## Examples

### Example

```json
{
  "contract": TalentContract,
  "contractAggregate": TalentContractAggregate,
  "feedback": TalentContractFeedback,
  "opening": TalentOpening
}
```
