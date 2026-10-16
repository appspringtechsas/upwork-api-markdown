---
title: "UpdateWorkflowTaskDetailsInput"
kind: "input_object"
domain: "Workflow"
gql_name: "UpdateWorkflowTaskDetailsInput"
html_id: "definition-UpdateWorkflowTaskDetailsInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-UpdateWorkflowTaskDetailsInput"
generated_by: "scripts/convert.mjs"
---


# `UpdateWorkflowTaskDetailsInput` (input object)

## Description

Input for updating workflow task details

## Fields

| Field | Type | Description |
|---|---|---|
| `status` | [`WorkflowTaskStatus`](../enums/WorkflowTaskStatus.md) | New status for the task |
| `labels` | [`[WorkflowTaskPatchLabelInput!]`](WorkflowTaskPatchLabelInput.md) | Labels to add or remove from the task |

## Examples

### Example

```json
{
  "status": "NOT_OPEN",
  "labels": [WorkflowTaskPatchLabelInput]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-UpdateWorkflowTaskDetailsInput" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [WorkDiaryContractInput](WorkDiaryContractInput.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [WorkflowTaskPatchLabelInput](WorkflowTaskPatchLabelInput.md) ➡️
