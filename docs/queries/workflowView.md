---
title: "workflowView"
kind: "query"
gql_name: "workflowView"
returns: "WorkflowView"
html_id: "query-workflowView"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-workflowView"
generated_by: "scripts/convert.mjs"
---


# `workflowView`

## Description

Workflow encapsulates the detailed sequence of tasks or business activities needed to complete a business process. Following query allows retreival of workflow associated with a particular entityType and entityId.

## Required Permissions

"Job Postings - Read and Write Access"

## Response

Returns a [`WorkflowView`](../types/WorkflowView.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `entityType` | [`String!`](../scalars/String.md) | Type of business entity (e.g., Offer) |
| `entityId` | [`ID!`](../scalars/ID.md) | Entity identifier |

## Examples

### Detailed structure

#### Query

```graphql
query workflowView(
  $entityType: String!,
  $entityId: ID!
) {
  workflowView(
    entityType: $entityType,
    entityId: $entityId
  ) {
    id
    type
    onboardedStatus
    totalTasks
    notStartedTasksCount
    inProgressTasksCount
    completedTasksCount
    tasksOverdue
    percentComplete
    startDateTime
    completionDateTime
    associations {
      ...WorkflowAssociationViewFragment
    }
    tasks {
      ...WorkflowTaskViewFragment
    }
    createdDateTime
    modifiedDateTime
    createdBy
    modifiedBy
  }
}
```

#### Variables

```json
{"entityType": "abc123", "entityId": 4}
```

#### Response

```json
{
  "data": {
    "workflowView": {
      "id": 4,
      "type": "xyz789",
      "onboardedStatus": "NOT_STARTED",
      "totalTasks": 123,
      "notStartedTasksCount": 987,
      "inProgressTasksCount": 123,
      "completedTasksCount": 987,
      "tasksOverdue": 123,
      "percentComplete": 123,
      "startDateTime": "abc123",
      "completionDateTime": "xyz789",
      "associations": [WorkflowAssociationView],
      "tasks": [WorkflowTaskView],
      "createdDateTime": "xyz789",
      "modifiedDateTime": "abc123",
      "createdBy": "abc123",
      "modifiedBy": "xyz789"
    }
  }
}
```
