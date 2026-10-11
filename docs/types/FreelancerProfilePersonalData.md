---
title: "FreelancerProfilePersonalData"
kind: "object"
domain: "Users and teams"
gql_name: "FreelancerProfilePersonalData"
html_id: "definition-FreelancerProfilePersonalData"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfilePersonalData"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfilePersonalData` (object)

## Description

Attributes of personal data.

## Fields

| Field | Type | Description |
|---|---|---|
| `firstName` | [`String!`](../scalars/String.md) | First name |
| `lastName` | [`String!`](../scalars/String.md) | Last name |
| `portrait` | [`Portrait`](Portrait.md) | Profile portrait image |
| `title` | [`String`](../scalars/String.md) | Profile Title |
| `description` | [`String`](../scalars/String.md) | Profile Description |
| `address` | [`FreelancerLocation`](FreelancerLocation.md) | Freelancer address |
| `chargeRate` | [`Money!`](Money.md) | Freelancer's typical billing rate |
| `workPhone` | [`String`](../scalars/String.md) | Work phone number |
| `profileUrl` | [`String`](../scalars/String.md) | Link to the freelancer's profile |
| `profileState` | [`PersonalDataProfileState`](../enums/PersonalDataProfileState.md) | Under review, auto rejected, rejected, accepted etc. |

## Examples

### Example

```json
{
  "firstName": "xyz789",
  "lastName": "abc123",
  "portrait": Portrait,
  "title": "xyz789",
  "description": "xyz789",
  "address": FreelancerLocation,
  "chargeRate": Money,
  "workPhone": "abc123",
  "profileUrl": "xyz789",
  "profileState": "IN_PROGRESS"
}
```
