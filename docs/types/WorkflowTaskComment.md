---
title: "WorkflowTaskComment"
kind: "object"
domain: "Workflow"
gql_name: "WorkflowTaskComment"
html_id: "definition-WorkflowTaskComment"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-WorkflowTaskComment"
generated_by: "scripts/convert.mjs"
---


# `WorkflowTaskComment` (object)

## Description

Comment added to a workflow task

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID`](../scalars/ID.md) | Comment identifier |
| `message` | [`String`](../scalars/String.md) | Comment message text |
| `createdDateTime` | [`String`](../scalars/String.md) | Comment creation date and time |
| `createdBy` | [`String`](../scalars/String.md) | User who created the comment |
| `visibleToClient` | [`Boolean`](../scalars/Boolean.md) | Whether the comment is visible to the client |
| `attachments` | [`[WorkflowTaskCommentAttachments]`](WorkflowTaskCommentAttachments.md) | Attachments associated with this comment |

## Examples

### Example

```json
{
  "id": 4,
  "message": "abc123",
  "createdDateTime": "abc123",
  "createdBy": "xyz789",
  "visibleToClient": true,
  "attachments": [WorkflowTaskCommentAttachments]
}
```
