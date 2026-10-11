---
title: "FreelancerProfileUserPreferences"
kind: "object"
domain: "Users and teams"
gql_name: "FreelancerProfileUserPreferences"
html_id: "definition-FreelancerProfileUserPreferences"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileUserPreferences"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfileUserPreferences` (object)

## Description

User preferences of the profile

## Fields

| Field | Type | Description |
|---|---|---|
| `visibilityLevel` | [`FreelancerProfileVisibility!`](../enums/FreelancerProfileVisibility.md) | Public, private or Upwork only |
| `hideAgencyEarnings` | [`Boolean`](../scalars/Boolean.md) | Should the agency earnings be displayed on the freelancer's profile |
| `hideEarnings` | [`Boolean`](../scalars/Boolean.md) | Should the freelancer earnings on their profile be hidden |
| `exposeFullName` | [`Boolean!`](../scalars/Boolean.md) | Are both first and last name displayed? |
| `clientFeedbackOptional` | [`Boolean`](../scalars/Boolean.md) | Do we force the client to provide feedback? |
| `projectTypePreference` | [`FreelancerProjectTypePreference`](../enums/FreelancerProjectTypePreference.md) | Project type preference |
| `hideJss` | [`Boolean!`](../scalars/Boolean.md) | Is the Job Success Score hidden on the freelancer's profile? |

## Examples

### Example

```json
{
  "visibilityLevel": "PUBLIC",
  "hideAgencyEarnings": true,
  "hideEarnings": false,
  "exposeFullName": true,
  "clientFeedbackOptional": true,
  "projectTypePreference": "BOTH_LONGTERM_AND_ONETIME",
  "hideJss": false
}
```
