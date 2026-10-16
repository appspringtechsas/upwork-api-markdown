---
title: "WorkflowTaskView"
kind: "object"
domain: "Workflow"
gql_name: "WorkflowTaskView"
html_id: "definition-WorkflowTaskView"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-WorkflowTaskView"
generated_by: "scripts/convert.mjs"
---


# `WorkflowTaskView` (object)

## Description

Detailed view of a single task within a workflow

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID`](../scalars/ID.md) | Task identifier |
| `type` | [`String`](../scalars/String.md) | Task type |
| `title` | [`String`](../scalars/String.md) | Task title |
| `description` | [`String`](../scalars/String.md) | Task description |
| `status` | [`WorkflowTaskStatus!`](../enums/WorkflowTaskStatus.md) | Current status of the task |
| `assignee` | [`WorkflowTaskAssigneeView`](WorkflowTaskAssigneeView.md) | User or entity assigned to this task |
| `comments` | [`[WorkflowTaskComment!]`](WorkflowTaskComment.md) | Comments associated with this task |
| `createdDateTime` | [`String`](../scalars/String.md) | Task creation date and time |
| `finishedDateTime` | [`String`](../scalars/String.md) | Task completion date and time |
| `dueDate` | [`String`](../scalars/String.md) | Task due date |
| `modifiedDateTime` | [`String`](../scalars/String.md) | Task last modification date and time |
| `createdBy` | [`String`](../scalars/String.md) | User who created the task |
| `modifiedBy` | [`String`](../scalars/String.md) | User who last modified the task |
| `labels` | [`[WorkflowTaskLabel!]`](../enums/WorkflowTaskLabel.md) | Labels applied to this task |
| `active` | [`Boolean`](../scalars/Boolean.md) | Whether the task is active |
| `notRequired` | [`Boolean`](../scalars/Boolean.md) | Whether the task is not required |
| `dependsOn` | [`String`](../scalars/String.md) | Task dependencies |
| `externalTaskId` | [`String`](../scalars/String.md) | External task identifier |
| `delayReasons` | [`String`](../scalars/String.md) | Reasons for task delay |
| `customAttributes` | [`[WorkflowTaskCustomAttribute!]`](WorkflowTaskCustomAttribute.md) | Custom attributes for this task |
| `order` | [`Int`](../scalars/Int.md) | Display order of the task |
| `canEdit` | [`Boolean`](../scalars/Boolean.md) | Whether the current user can edit this task |
| `owner` | [`Boolean`](../scalars/Boolean.md) | Provides a possibility for the user to filter on UI it's own tasks . |

## Examples

### Example

```json
{
  "id": 4,
  "type": "xyz789",
  "title": "abc123",
  "description": "abc123",
  "status": "NOT_OPEN",
  "assignee": WorkflowTaskAssigneeView,
  "comments": [WorkflowTaskComment],
  "createdDateTime": "abc123",
  "finishedDateTime": "xyz789",
  "dueDate": "xyz789",
  "modifiedDateTime": "abc123",
  "createdBy": "xyz789",
  "modifiedBy": "xyz789",
  "labels": ["FLAGGED"],
  "active": true,
  "notRequired": false,
  "dependsOn": "xyz789",
  "externalTaskId": "xyz789",
  "delayReasons": "abc123",
  "customAttributes": [WorkflowTaskCustomAttribute],
  "order": 987,
  "canEdit": true,
  "owner": true
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-WorkflowTaskView" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [WorkflowTaskCustomAttribute](WorkflowTaskCustomAttribute.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [WorkflowView](WorkflowView.md) ➡️
