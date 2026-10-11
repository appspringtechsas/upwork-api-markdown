---
title: "updateWorkflowTask"
kind: "mutation"
gql_name: "updateWorkflowTask"
returns: "UpdateWorkflowTaskResult!"
html_id: "mutation-updateWorkflowTask"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-updateWorkflowTask"
generated_by: "scripts/convert.mjs"
---


# `updateWorkflowTask`

## Description

Updates the status of the individual task associated with the workflowId and taskId

## Required Permissions

"Job Postings - Read and Write Access"

## Response

Returns an [`UpdateWorkflowTaskResult!`](../types/UpdateWorkflowTaskResult.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `workflowId` | [`ID`](../scalars/ID.md) | Workflow identifier |
| `taskId` | [`ID`](../scalars/ID.md) | Task identifier |
| `updateWorkflowTaskDetailsInput` | [`UpdateWorkflowTaskDetailsInput`](../inputs/UpdateWorkflowTaskDetailsInput.md) | Update payload |

## Examples

### Detailed structure

#### Query

```graphql
mutation updateWorkflowTask(
  $workflowId: ID,
  $taskId: ID,
  $updateWorkflowTaskDetailsInput: UpdateWorkflowTaskDetailsInput
) {
  updateWorkflowTask(
    workflowId: $workflowId,
    taskId: $taskId,
    updateWorkflowTaskDetailsInput: $updateWorkflowTaskDetailsInput
  ) {
    workflowId
    updatedTaskView {
      ...WorkflowTaskViewFragment
    }
  }
}
```

#### Variables

```json
{
  "workflowId": 4,
  "taskId": "4",
  "updateWorkflowTaskDetailsInput": UpdateWorkflowTaskDetailsInput
}
```

#### Response

```json
{
  "data": {
    "updateWorkflowTask": {
      "workflowId": 4,
      "updatedTaskView": WorkflowTaskView
    }
  }
}
```
