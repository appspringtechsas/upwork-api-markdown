---
title: "acceptVendorInvitation"
kind: "mutation"
gql_name: "acceptVendorInvitation"
returns: "AcceptVendorInvitationResponse!"
html_id: "mutation-acceptVendorInvitation"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-acceptVendorInvitation"
generated_by: "scripts/convert.mjs"
---


# `acceptVendorInvitation`

## Description

Accepts a vendor invitation and creates a proposal

## Required Permissions

"Freelancer's Invitation Entities - Read and Write Access"

## Response

Returns an [`AcceptVendorInvitationResponse!`](../types/AcceptVendorInvitationResponse.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `input` | [`AcceptVendorInvitationInput!`](../inputs/AcceptVendorInvitationInput.md) | input data for accepting vendor invitation |

## Examples

### Detailed structure

#### Query

```graphql
mutation acceptVendorInvitation($input: AcceptVendorInvitationInput!) {
  acceptVendorInvitation(input: $input) {
    proposalUid
  }
}
```

#### Variables

```json
{"input": AcceptVendorInvitationInput}
```

#### Response

```json
{"data": {"acceptVendorInvitation": {"proposalUid": 4}}}
```
