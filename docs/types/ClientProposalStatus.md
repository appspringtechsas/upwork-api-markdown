---
title: "ClientProposalStatus"
kind: "object"
domain: "Proposals"
gql_name: "ClientProposalStatus"
html_id: "definition-ClientProposalStatus"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientProposalStatus"
generated_by: "scripts/convert.mjs"
---


# `ClientProposalStatus` (object)

## Description

Client proposal status

## Fields

| Field | Type | Description |
|---|---|---|
| `status` | [`ClientProposalStatusName!`](../enums/ClientProposalStatusName.md) | Status of the proposal |
| `reason` | [`ProposalReason`](ProposalReason.md) | Reason for proposal to switch to current status. Applicable for declined or withdrawn proposals. |

## Examples

### Example

```json
{"status": "Created", "reason": ProposalReason}
```
