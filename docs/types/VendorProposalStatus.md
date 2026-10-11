---
title: "VendorProposalStatus"
kind: "object"
domain: "Proposals"
gql_name: "VendorProposalStatus"
html_id: "definition-VendorProposalStatus"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-VendorProposalStatus"
generated_by: "scripts/convert.mjs"
---


# `VendorProposalStatus` (object)

## Description

Status of a vendor proposal

## Fields

| Field | Type | Description |
|---|---|---|
| `status` | [`VendorProposalStatusName!`](../enums/VendorProposalStatusName.md) | Status name of the proposal |
| `reason` | [`ProposalReason`](ProposalReason.md) | Reason for the proposal status |

## Examples

### Example

```json
{"status": "Created", "reason": ProposalReason}
```
