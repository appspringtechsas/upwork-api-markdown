---
title: "WorkflowAssociationView"
kind: "object"
domain: "Workflow"
gql_name: "WorkflowAssociationView"
html_id: "definition-WorkflowAssociationView"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-WorkflowAssociationView"
generated_by: "scripts/convert.mjs"
---


# `WorkflowAssociationView` (object)

## Description

Association between a workflow and an external entity

## Fields

| Field | Type | Description |
|---|---|---|
| `entityType` | [`String`](../scalars/String.md) | Type of the associated entity |
| `entityValue` | [`String`](../scalars/String.md) | Value or identifier of the associated entity |

## Examples

### Example

```json
{
  "entityType": "xyz789",
  "entityValue": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-WorkflowAssociationView" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [UpdateWorkflowTaskResult](UpdateWorkflowTaskResult.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [WorkflowTaskAssigneeView](WorkflowTaskAssigneeView.md) ➡️
