---
title: "WorkDiaryCompanyTime"
kind: "object"
domain: "Users and teams"
gql_name: "WorkDiaryCompanyTime"
html_id: "definition-WorkDiaryCompanyTime"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-WorkDiaryCompanyTime"
generated_by: "scripts/convert.mjs"
---


# `WorkDiaryCompanyTime` (object)

## Description

Time tracking information for a work diary entry

## Fields

| Field | Type | Description |
|---|---|---|
| `trackedTime` | [`String`](../scalars/String.md) | Time tracked by the system |
| `manualTime` | [`String`](../scalars/String.md) | Manually entered time |
| `overtime` | [`String`](../scalars/String.md) | Overtime hours |
| `firstWorked` | [`String`](../scalars/String.md) | Timestamp when first work occurred |
| `lastWorked` | [`String`](../scalars/String.md) | Timestamp when last work occurred |
| `firstWorkedInt` | [`Int`](../scalars/Int.md) | First worked time as integer (epoch) |
| `lastWorkedInt` | [`Int`](../scalars/Int.md) | Last worked time as integer (epoch) |
| `lastScreenshot` | [`String`](../scalars/String.md) | Timestamp of last screenshot |

## Examples

### Example

```json
{
  "trackedTime": "abc123",
  "manualTime": "abc123",
  "overtime": "abc123",
  "firstWorked": "abc123",
  "lastWorked": "xyz789",
  "firstWorkedInt": 987,
  "lastWorkedInt": 123,
  "lastScreenshot": "xyz789"
}
```
