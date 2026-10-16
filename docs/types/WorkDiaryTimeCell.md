---
title: "WorkDiaryTimeCell"
kind: "object"
domain: "Users and teams"
gql_name: "WorkDiaryTimeCell"
html_id: "definition-WorkDiaryTimeCell"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-WorkDiaryTimeCell"
generated_by: "scripts/convert.mjs"
---


# `WorkDiaryTimeCell` (object)

## Description

10-minute billable time period with activity tracking and screenshots

## Fields

| Field | Type | Description |
|---|---|---|
| `cellDateTime` | [`DateTime`](DateTime.md) | Timestamp that denotes the beginning of timecell |
| `snapshotDateTime` | [`DateTime`](DateTime.md) | Timestamp at which the snapshot has been taken during the timecell |
| `overtime` | [`Boolean`](../scalars/Boolean.md) | Should this timelog entry be considered overtime (available only if "useLegacyEndpoint" is not set to true) |
| `manual` | [`Boolean`](../scalars/Boolean.md) | True if the contractor has entered manual time for this timecell |
| `activityLevel` | [`Int`](../scalars/Int.md) | Activity level that is a measure (derived from) keyboard events and mouse events during this timecell |
| `memo` | [`String`](../scalars/String.md) | Memo of the work done during this timecell |
| `task` | [`WorkDiaryTask`](WorkDiaryTask.md) | Task (e.g., Jira Task) associated with this timecell |
| `mouseEventsCount` | [`Int`](../scalars/Int.md) | Number of mouse events during this timecell |
| `keyboardEventsCount` | [`Int`](../scalars/Int.md) | Number of keyboard events during this timecell |
| `activeWindowTitle` | [`String`](../scalars/String.md) | Title of the window which was active during the screen capture |
| `hideScreenshots` | [`Boolean`](../scalars/Boolean.md) | Should this screenshot be hidden |
| `hasScreenshot` | [`Boolean`](../scalars/Boolean.md) | Is there a screenshot associated with this timecell |
| `screenshotImageUrl` | [`String`](../scalars/String.md) | Image URL of the screenshot associated with this timecell |
| `screenshotImageUrlMedium` | [`String`](../scalars/String.md) | Image URL (medium size) of the screenshot associated with this timecell |
| `screenshotImageThumbnail` | [`String`](../scalars/String.md) | Thumbnail of the screenshot associated with this timecell |
| `webcamEnabled` | [`Boolean`](../scalars/Boolean.md) | Was there a webcam associated with this timecell |
| `webcamImageUrl` | [`String`](../scalars/String.md) | Webcam image associated with this timecell |
| `webcamImageThumbnail` | [`String`](../scalars/String.md) | Thumbnail URL of the webcam image associated with this timecell |
| `snapshotExpired` | [`Boolean`](../scalars/Boolean.md) | Has the snapshot associated expired |

## Examples

### Example

```json
{
  "cellDateTime": DateTime,
  "snapshotDateTime": DateTime,
  "overtime": false,
  "manual": true,
  "activityLevel": 123,
  "memo": "abc123",
  "task": WorkDiaryTask,
  "mouseEventsCount": 987,
  "keyboardEventsCount": 987,
  "activeWindowTitle": "xyz789",
  "hideScreenshots": false,
  "hasScreenshot": true,
  "screenshotImageUrl": "abc123",
  "screenshotImageUrlMedium": "abc123",
  "screenshotImageThumbnail": "xyz789",
  "webcamEnabled": true,
  "webcamImageUrl": "abc123",
  "webcamImageThumbnail": "xyz789",
  "snapshotExpired": true
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-WorkDiaryTimeCell" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [WorkDiaryTask](WorkDiaryTask.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [UpdateWorkflowTaskResult](UpdateWorkflowTaskResult.md) ➡️
