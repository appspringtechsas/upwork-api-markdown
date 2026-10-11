---
title: "WorkDiaryCompanySnapshot"
kind: "object"
domain: "Users and teams"
gql_name: "WorkDiaryCompanySnapshot"
html_id: "definition-WorkDiaryCompanySnapshot"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-WorkDiaryCompanySnapshot"
generated_by: "scripts/convert.mjs"
---


# `WorkDiaryCompanySnapshot` (object)

## Description

Complete snapshot of work diary data including time, task, and screenshots

## Fields

| Field | Type | Description |
|---|---|---|
| `contract` | [`WorkDiaryCompanyContract`](WorkDiaryCompanyContract.md) | Associated contract |
| `user` | [`WorkDiaryCompanyUser`](WorkDiaryCompanyUser.md) | User who performed the work |
| `duration` | [`String`](../scalars/String.md) | Duration of work as string |
| `durationInt` | [`Int`](../scalars/Int.md) | Duration as integer (seconds) |
| `task` | [`WorkDiaryCompanySnapshotTask`](WorkDiaryCompanySnapshotTask.md) | Task being worked on |
| `time` | [`WorkDiaryCompanyTime`](WorkDiaryCompanyTime.md) | Time tracking details |
| `screenshots` | [`[WorkDiaryCompanySnapshotScreenshot]`](WorkDiaryCompanySnapshotScreenshot.md) | Screenshot and webcam images |

## Examples

### Example

```json
{
  "contract": WorkDiaryCompanyContract,
  "user": WorkDiaryCompanyUser,
  "duration": "abc123",
  "durationInt": 123,
  "task": WorkDiaryCompanySnapshotTask,
  "time": WorkDiaryCompanyTime,
  "screenshots": [WorkDiaryCompanySnapshotScreenshot]
}
```
