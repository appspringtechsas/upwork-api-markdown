---
title: "WorkflowTaskCommentAttachments"
kind: "object"
domain: "Workflow"
gql_name: "WorkflowTaskCommentAttachments"
html_id: "definition-WorkflowTaskCommentAttachments"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-WorkflowTaskCommentAttachments"
generated_by: "scripts/convert.mjs"
---


# `WorkflowTaskCommentAttachments` (object)

## Description

File or document attached to a workflow task comment

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID`](../scalars/ID.md) | Attachment identifier |
| `name` | [`String`](../scalars/String.md) | Attachment name |
| `type` | [`String`](../scalars/String.md) | Attachment type |

## Examples

### Example

```json
{
  "id": 4,
  "name": "xyz789",
  "type": "abc123"
}
```
