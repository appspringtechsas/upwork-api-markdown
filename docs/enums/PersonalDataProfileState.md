---
title: "PersonalDataProfileState"
kind: "enum"
domain: "Users and teams"
gql_name: "PersonalDataProfileState"
html_id: "definition-PersonalDataProfileState"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PersonalDataProfileState"
generated_by: "scripts/convert.mjs"
---


# `PersonalDataProfileState` (enum)

## Description

Personal data profile states

## Values

| Value | Description |
|---|---|
| `IN_PROGRESS` | Profile creation in progress |
| `ACCEPTED` | Profile accepted and visible |
| `DRAFT` | Draft state not yet submitted |
| `REJECTED` | Profile rejected |
| `UNDER_REVIEW` | Awaiting manual review |
| `NOT_STARTED` | No setup has been started |
| `FAILED_REVIEW_QUEUE_SUBMISSION` | Failed automated review queue |
| `ELANCER_ONBOARDING` | Legacy onboarding flow |
| `AUTO_REJECTED_DELAYED` | Auto rejection after delay |
| `IN_PROCESS` | Processing state |
| `AUTO_ACCEPTED` | Automatically accepted |
| `AUTO_REJECTED` | Automatically rejected |

## Examples

### Example

```graphql
"IN_PROGRESS"
```
