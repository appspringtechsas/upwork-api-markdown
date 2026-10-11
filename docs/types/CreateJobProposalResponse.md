---
title: "CreateJobProposalResponse"
kind: "object"
domain: "Other"
gql_name: "CreateJobProposalResponse"
html_id: "definition-CreateJobProposalResponse"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CreateJobProposalResponse"
generated_by: "scripts/convert.mjs"
---


# `CreateJobProposalResponse` (object)

## Description

Response type for create proposal v2 mutation

## Fields

| Field | Type | Description |
|---|---|---|
| `newProposalId` | [`ID`](../scalars/ID.md) | The ID of the created proposal (if no errors) |
| `status` | [`CreateJobProposalStatus`](../enums/CreateJobProposalStatus.md) | The create proposal operation status |
| `error` | [`CreateJobProposalError`](../enums/CreateJobProposalError.md) | The pre-apply validation error (if any) |

## Examples

### Example

```json
{
  "newProposalId": "4",
  "status": "SUCCESS",
  "error": "OK"
}
```
