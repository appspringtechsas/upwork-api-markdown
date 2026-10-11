---
title: "UpdateWorkflowTaskResult"
kind: "object"
domain: "Workflow"
gql_name: "UpdateWorkflowTaskResult"
html_id: "definition-UpdateWorkflowTaskResult"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-UpdateWorkflowTaskResult"
generated_by: "scripts/convert.mjs"
---


# `UpdateWorkflowTaskResult` (object)

## Description

Result of updating a workflow task

## Fields

| Field | Type | Description |
|---|---|---|
| `workflowId` | [`ID`](../scalars/ID.md) | Workflow identifier |
| `updatedTaskView` | [`WorkflowTaskView`](WorkflowTaskView.md) | Updated task view details |

## Examples

### Example

```json
{"workflowId": 4, "updatedTaskView": WorkflowTaskView}
```
