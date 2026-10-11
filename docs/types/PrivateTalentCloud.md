---
title: "PrivateTalentCloud"
kind: "object"
domain: "Talent Clouds"
gql_name: "PrivateTalentCloud"
html_id: "definition-PrivateTalentCloud"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PrivateTalentCloud"
generated_by: "scripts/convert.mjs"
---


# `PrivateTalentCloud` (object)

## Description

A private group of professional freelancers and agencies for Upwork Enterprise clients

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Unique identifier for the talent cloud |
| `name` | [`String!`](../scalars/String.md) | Name of the talent cloud |
| `creator` | [`GenericUser!`](GenericUser.md) | User who created the talent cloud |
| `creatorOrganization` | [`GenericOrganization!`](GenericOrganization.md) | Organization of the talent cloud creator |
| `joinInstructions` | [`String!`](../scalars/String.md) | Instructions displayed to freelancers when requesting to join |
| `welcomeMessageToAddedFreelancers` | [`String!`](../scalars/String.md) | Welcome message displayed to freelancers after joining |
| `joinRequestAutoApproved` | [`Boolean!`](../scalars/Boolean.md) | Whether join requests are automatically approved without manual review |
| `messageAfterJoinRequest` | [`String!`](../scalars/String.md) | Message displayed to freelancers after submitting a join request |
| `joinRejectionMessage` | [`String!`](../scalars/String.md) | Message displayed to freelancers if their join request was rejected |
| `externalName` | [`String`](../scalars/String.md) | Name displayed in external contexts outside the client company |
| `active` | [`Boolean!`](../scalars/Boolean.md) | Whether the talent cloud is currently active |
| `joinRequestNotifyUsers` | [`[GenericUser]!`](GenericUser.md) | Users to notify when new join requests are created |
| `logoImageLarge` | [`File`](File.md) | Large logo image file |
| `logoImageSmall` | [`File`](File.md) | Small logo image file |
| `description` | [`String!`](../scalars/String.md) | Description of the talent cloud |
| `onboardingTaskEnabled` | [`Boolean!`](../scalars/Boolean.md) | Whether onboarding tasks are enabled for this talent cloud |
| `onboardingTaskEnableUpdatedDateTime` | [`String`](../scalars/String.md) | Timestamp when onboarding tasks were first enabled |
| `selectable` | [`Boolean!`](../scalars/Boolean.md) | Whether this talent cloud can be selected for new offers |

## Examples

### Example

```json
{
  "id": "4",
  "name": "abc123",
  "creator": GenericUser,
  "creatorOrganization": GenericOrganization,
  "joinInstructions": "xyz789",
  "welcomeMessageToAddedFreelancers": "abc123",
  "joinRequestAutoApproved": true,
  "messageAfterJoinRequest": "xyz789",
  "joinRejectionMessage": "xyz789",
  "externalName": "abc123",
  "active": true,
  "joinRequestNotifyUsers": [GenericUser],
  "logoImageLarge": File,
  "logoImageSmall": File,
  "description": "abc123",
  "onboardingTaskEnabled": true,
  "onboardingTaskEnableUpdatedDateTime": "abc123",
  "selectable": true
}
```
