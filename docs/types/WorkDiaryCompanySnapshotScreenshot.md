---
title: "WorkDiaryCompanySnapshotScreenshot"
kind: "object"
domain: "Users and teams"
gql_name: "WorkDiaryCompanySnapshotScreenshot"
html_id: "definition-WorkDiaryCompanySnapshotScreenshot"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-WorkDiaryCompanySnapshotScreenshot"
generated_by: "scripts/convert.mjs"
---


# `WorkDiaryCompanySnapshotScreenshot` (object)

## Description

Screenshot and webcam data for a work diary snapshot

## Fields

| Field | Type | Description |
|---|---|---|
| `activity` | [`Int`](../scalars/Int.md) | Activity level percentage |
| `screenshotUrl` | [`String`](../scalars/String.md) | URL to screenshot |
| `screenshotImage` | [`String`](../scalars/String.md) | Path to screenshot image |
| `screenshotImageLarge` | [`String`](../scalars/String.md) | Path to large screenshot image |
| `screenshotImageMedium` | [`String`](../scalars/String.md) | Path to medium screenshot image |
| `screenshotImageThumbnail` | [`String`](../scalars/String.md) | Path to screenshot thumbnail |
| `hasScreenshot` | [`Boolean`](../scalars/Boolean.md) | Whether snapshot has a screenshot |
| `hasWebcam` | [`Boolean`](../scalars/Boolean.md) | Whether snapshot has webcam image |
| `webcamUrl` | [`String`](../scalars/String.md) | URL to webcam image |
| `webcamImage` | [`String`](../scalars/String.md) | Path to webcam image |
| `webcamImageThumbnail` | [`String`](../scalars/String.md) | Path to webcam thumbnail |
| `flags` | [`WorkDiaryCompanySnapshotScreenshotFlag`](WorkDiaryCompanySnapshotScreenshotFlag.md) | Screenshot display flags |

## Examples

### Example

```json
{
  "activity": 987,
  "screenshotUrl": "xyz789",
  "screenshotImage": "abc123",
  "screenshotImageLarge": "xyz789",
  "screenshotImageMedium": "xyz789",
  "screenshotImageThumbnail": "abc123",
  "hasScreenshot": false,
  "hasWebcam": false,
  "webcamUrl": "xyz789",
  "webcamImage": "abc123",
  "webcamImageThumbnail": "xyz789",
  "flags": WorkDiaryCompanySnapshotScreenshotFlag
}
```
