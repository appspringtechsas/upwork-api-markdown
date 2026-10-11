---
title: "TalentProfilePersonalData"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentProfilePersonalData"
html_id: "definition-TalentProfilePersonalData"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentProfilePersonalData"
generated_by: "scripts/convert.mjs"
---


# `TalentProfilePersonalData` (object)

## Description

Personal data including name, title, description, and billing rate

## Fields

| Field | Type | Description |
|---|---|---|
| `firstName` | [`String!`](../scalars/String.md) | Freelancer's first name |
| `lastName` | [`String!`](../scalars/String.md) | Freelancer's last name |
| `portrait` | [`Portrait`](Portrait.md) | Profile photo or avatar |
| `title` | [`String`](../scalars/String.md) | Profile title |
| `description` | [`String`](../scalars/String.md) | Profile description |
| `chargeRate` | [`Money!`](Money.md) | Freelancer's typical billing rate |
| `profileUrl` | [`String`](../scalars/String.md) | Link to the freelancer's profile |
| `profileState` | [`PersonalDataProfileState`](../enums/PersonalDataProfileState.md) | Under review, auto rejected, rejected, accepted etc. |
| `location` | [`PersonalDataLocation`](PersonalDataLocation.md) | Personal data location |

## Examples

### Example

```json
{
  "firstName": "abc123",
  "lastName": "xyz789",
  "portrait": Portrait,
  "title": "xyz789",
  "description": "xyz789",
  "chargeRate": Money,
  "profileUrl": "abc123",
  "profileState": "IN_PROGRESS",
  "location": PersonalDataLocation
}
```
