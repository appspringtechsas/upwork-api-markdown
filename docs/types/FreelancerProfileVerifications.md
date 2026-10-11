---
title: "FreelancerProfileVerifications"
kind: "object"
domain: "Users and teams"
gql_name: "FreelancerProfileVerifications"
html_id: "definition-FreelancerProfileVerifications"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileVerifications"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfileVerifications` (object)

## Description

Freelancer Profile Verifications

## Fields

| Field | Type | Description |
|---|---|---|
| `idVerified` | [`Boolean!`](../scalars/Boolean.md) | If the freelancer's ID is verified |
| `phoneVerified` | [`Boolean!`](../scalars/Boolean.md) | If the freelancer's phone number is verified |
| `webcamVerified` | [`Boolean!`](../scalars/Boolean.md) | If the identification through webcam is done |
| `idBadgeStatus` | [`String`](../scalars/String.md) | ID badge status |

## Examples

### Example

```json
{
  "idVerified": false,
  "phoneVerified": false,
  "webcamVerified": true,
  "idBadgeStatus": "abc123"
}
```
