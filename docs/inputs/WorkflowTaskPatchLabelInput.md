---
title: "WorkflowTaskPatchLabelInput"
kind: "input_object"
domain: "Workflow"
gql_name: "WorkflowTaskPatchLabelInput"
html_id: "definition-WorkflowTaskPatchLabelInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-WorkflowTaskPatchLabelInput"
generated_by: "scripts/convert.mjs"
---


# `WorkflowTaskPatchLabelInput` (input object)

## Description

Input for adding or removing a label from a workflow task

## Fields

| Field | Type | Description |
|---|---|---|
| `label` | [`WorkflowTaskLabel`](../enums/WorkflowTaskLabel.md) | Label to update |
| `enabled` | [`Boolean`](../scalars/Boolean.md) | Whether to enable or disable the label |

## Examples

### Example

```json
{"label": "FLAGGED", "enabled": false}
```
