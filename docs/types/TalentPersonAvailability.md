---
title: "TalentPersonAvailability"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentPersonAvailability"
html_id: "definition-TalentPersonAvailability"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentPersonAvailability"
generated_by: "scripts/convert.mjs"
---


# `TalentPersonAvailability` (object)

## Description

Freelancer availability information including capacity and schedule

## Fields

| Field | Type | Description |
|---|---|---|
| `personId` | [`String`](../scalars/String.md) | Person identifier |
| `capacity` | [`FreelancerProfileAvailabilityCapacity`](../enums/FreelancerProfileAvailabilityCapacity.md) | Availability capacity (full-time, part-time, etc.) |
| `createdDateTime` | [`String`](../scalars/String.md) | When availability record was created |
| `availabilityDateTime` | [`String`](../scalars/String.md) | When freelancer becomes available |
| `updatedDateTime` | [`String`](../scalars/String.md) | Last update timestamp |
| `purchasedInvitationBadge` | [`TalentPurchasedInvitationBadge`](TalentPurchasedInvitationBadge.md) | Purchased invitation badge status |
| `minHours` | [`Int`](../scalars/Int.md) | Minimum hours available per week |
| `maxHours` | [`Int`](../scalars/Int.md) | Maximum hours available per week |
| `availableDays` | [`[Day]!`](../enums/Day.md) | Days of the week available for work |

## Examples

### Example

```json
{
  "personId": "xyz789",
  "capacity": "fullTime",
  "createdDateTime": "xyz789",
  "availabilityDateTime": "xyz789",
  "updatedDateTime": "abc123",
  "purchasedInvitationBadge": TalentPurchasedInvitationBadge,
  "minHours": 987,
  "maxHours": 987,
  "availableDays": ["MONDAY"]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentPersonAvailability" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [TalentOtherCommunityCertificate](TalentOtherCommunityCertificate.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [TalentPortfolioProjectsConnection](TalentPortfolioProjectsConnection.md) ➡️
