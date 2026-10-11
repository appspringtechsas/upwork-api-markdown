---
title: "TalentPurchasedInvitationBadge"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentPurchasedInvitationBadge"
html_id: "definition-TalentPurchasedInvitationBadge"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentPurchasedInvitationBadge"
generated_by: "scripts/convert.mjs"
---


# `TalentPurchasedInvitationBadge` (object)

## Description

Purchased invitation badge details for premium visibility

## Fields

| Field | Type | Description |
|---|---|---|
| `active` | [`Boolean`](../scalars/Boolean.md) | Whether badge is currently active |
| `maxPrice` | [`Int`](../scalars/Int.md) | Maximum price for jobs to display badge |
| `nextRenewalAt` | [`String`](../scalars/String.md) | Next renewal date for the badge |

## Examples

### Example

```json
{
  "active": false,
  "maxPrice": 987,
  "nextRenewalAt": "xyz789"
}
```
