---
title: "WorkflowTaskAssigneeView"
kind: "object"
domain: "Workflow"
gql_name: "WorkflowTaskAssigneeView"
html_id: "definition-WorkflowTaskAssigneeView"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-WorkflowTaskAssigneeView"
generated_by: "scripts/convert.mjs"
---


# `WorkflowTaskAssigneeView` (object)

## Description

Entity assigned to a workflow task

## Fields

| Field | Type | Description |
|---|---|---|
| `entityType` | [`String`](../scalars/String.md) | Type of the assignee entity |
| `entityId` | [`ID`](../scalars/ID.md) | Identifier of the assignee entity |

## Examples

### Example

```json
{"entityType": "xyz789", "entityId": 4}
```
