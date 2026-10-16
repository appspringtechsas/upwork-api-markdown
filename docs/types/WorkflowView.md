---
title: "WorkflowView"
kind: "object"
domain: "Workflow"
gql_name: "WorkflowView"
html_id: "definition-WorkflowView"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-WorkflowView"
generated_by: "scripts/convert.mjs"
---


# `WorkflowView` (object)

## Description

Comprehensive view of a workflow instance with all its tasks and metadata

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID`](../scalars/ID.md) | Workflow identifier |
| `type` | [`String`](../scalars/String.md) | Workflow type |
| `onboardedStatus` | [`WorkflowOnboardingStatus`](../enums/WorkflowOnboardingStatus.md) | Current onboarding status of the workflow |
| `totalTasks` | [`Int`](../scalars/Int.md) | Total number of tasks in the workflow |
| `notStartedTasksCount` | [`Int`](../scalars/Int.md) | Number of tasks not yet started |
| `inProgressTasksCount` | [`Int`](../scalars/Int.md) | Number of tasks currently in progress |
| `completedTasksCount` | [`Int`](../scalars/Int.md) | Number of completed tasks |
| `tasksOverdue` | [`Int`](../scalars/Int.md) | Number of overdue tasks |
| `percentComplete` | [`Int`](../scalars/Int.md) | Percentage of workflow completion |
| `startDateTime` | [`String`](../scalars/String.md) | Workflow start date and time |
| `completionDateTime` | [`String`](../scalars/String.md) | Workflow completion date and time |
| `associations` | [`[WorkflowAssociationView!]`](WorkflowAssociationView.md) | Associated entities for this workflow |
| `tasks` | [`[WorkflowTaskView!]`](WorkflowTaskView.md) | List of tasks in the workflow |
| `createdDateTime` | [`String`](../scalars/String.md) | Workflow creation date and time |
| `modifiedDateTime` | [`String`](../scalars/String.md) | Workflow last modification date and time |
| `createdBy` | [`String`](../scalars/String.md) | User who created the workflow |
| `modifiedBy` | [`String`](../scalars/String.md) | User who last modified the workflow |

## Examples

### Example

```json
{
  "id": "4",
  "type": "abc123",
  "onboardedStatus": "NOT_STARTED",
  "totalTasks": 123,
  "notStartedTasksCount": 987,
  "inProgressTasksCount": 987,
  "completedTasksCount": 987,
  "tasksOverdue": 987,
  "percentComplete": 987,
  "startDateTime": "abc123",
  "completionDateTime": "xyz789",
  "associations": [WorkflowAssociationView],
  "tasks": [WorkflowTaskView],
  "createdDateTime": "abc123",
  "modifiedDateTime": "xyz789",
  "createdBy": "abc123",
  "modifiedBy": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-WorkflowView" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [WorkflowTaskView](WorkflowTaskView.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [AcceptVendorInvitationResponse](AcceptVendorInvitationResponse.md) ➡️
