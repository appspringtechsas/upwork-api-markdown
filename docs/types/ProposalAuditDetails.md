---
title: "ProposalAuditDetails"
kind: "object"
domain: "Proposals"
gql_name: "ProposalAuditDetails"
html_id: "definition-ProposalAuditDetails"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ProposalAuditDetails"
generated_by: "scripts/convert.mjs"
---


# `ProposalAuditDetails` (object)

## Description

Proposal audit details

## Fields

| Field | Type | Description |
|---|---|---|
| `createdByUser` | [`GenericUser!`](GenericUser.md) | User that created the proposal |
| `modifiedByUser` | [`GenericUser`](GenericUser.md) | Last modifier. Modifiers of a proposal could be either Freelancer, Client, or System. In case of System, modifiedByUser will be null |
| `createdDateTime` | [`DateTime!`](DateTime.md) | Creation date and time, is the date when proposal is created by applying, or date when an invite to interview is accepted. |
| `modifiedDateTime` | [`DateTime`](DateTime.md) | Last modification date and time |

## Examples

### Example

```json
{
  "createdByUser": GenericUser,
  "modifiedByUser": GenericUser,
  "createdDateTime": DateTime,
  "modifiedDateTime": DateTime
}
```
