---
title: "Snapshot"
kind: "object"
domain: "Users and teams"
gql_name: "Snapshot"
html_id: "definition-Snapshot"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Snapshot"
generated_by: "scripts/convert.mjs"
---


# `Snapshot` (object)

## Description

Complete snapshot of work with screenshots, activity tracking, and metadata

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID`](../scalars/ID.md) | Unique identifier for the Snapshot |
| `time` | [`Int`](../scalars/Int.md) | Time of the snapshot (epoch seconds) |
| `contractId` | [`String`](../scalars/String.md) | Identifier for the contract |
| `mouseEventsCount` | [`Int`](../scalars/Int.md) | Number of mouse events |
| `keyboardEventsCount` | [`Int`](../scalars/Int.md) | Number of keyboard events |
| `teamName` | [`String`](../scalars/String.md) | Team name associated with the Snapshot |
| `status` | [`String`](../scalars/String.md) | Status of the Snapshot |
| `activeWindowTitle` | [`String`](../scalars/String.md) | Title of the active window during the Snapshot |
| `memo` | [`String`](../scalars/String.md) | Memo associated with the Snapshot |
| `companyId` | [`String`](../scalars/String.md) | Company identifier associated with the Snapshot |
| `hasScreenshot` | [`Boolean`](../scalars/Boolean.md) | Indicates whether the Snapshot has a screenshot |
| `screenshotUrl` | [`String`](../scalars/String.md) | URL of the screenshot |
| `screenshotImage` | [`String`](../scalars/String.md) | Path to the screenshot image |
| `screenshotImageLarge` | [`String`](../scalars/String.md) | Path to the large version of the screenshot image |
| `screenshotImageMedium` | [`String`](../scalars/String.md) | Path to the medium version of the screenshot image |
| `screenshotImageThumbnail` | [`String`](../scalars/String.md) | Path to the thumbnail version of the screenshot image |
| `hasWebcam` | [`Boolean`](../scalars/Boolean.md) | Indicates whether the Snapshot has webcam data |
| `webcamUrl` | [`String`](../scalars/String.md) | URL of the webcam data |
| `webcamImage` | [`String`](../scalars/String.md) | Path to the webcam image |
| `webcamImageThumbnail` | [`String`](../scalars/String.md) | Path to the thumbnail version of the webcam image |
| `task` | [`String`](../scalars/String.md) | Task associated with the Snapshot |
| `minutes` | [`SnapshotMinutes`](SnapshotMinutes.md) | List of events per minute for a Snapshot |

## Examples

### Example

```json
{
  "id": 4,
  "time": 987,
  "contractId": "abc123",
  "mouseEventsCount": 987,
  "keyboardEventsCount": 123,
  "teamName": "abc123",
  "status": "abc123",
  "activeWindowTitle": "xyz789",
  "memo": "xyz789",
  "companyId": "xyz789",
  "hasScreenshot": false,
  "screenshotUrl": "xyz789",
  "screenshotImage": "abc123",
  "screenshotImageLarge": "xyz789",
  "screenshotImageMedium": "abc123",
  "screenshotImageThumbnail": "abc123",
  "hasWebcam": true,
  "webcamUrl": "xyz789",
  "webcamImage": "xyz789",
  "webcamImageThumbnail": "xyz789",
  "task": "xyz789",
  "minutes": SnapshotMinutes
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Snapshot" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [RoomUser](RoomUser.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [SnapshotMinute](SnapshotMinute.md) ➡️
