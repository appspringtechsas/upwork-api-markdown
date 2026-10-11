---
title: "RoomStoryFileAttachmentInput"
kind: "input_object"
domain: "Users and teams"
gql_name: "RoomStoryFileAttachmentInput"
html_id: "definition-RoomStoryFileAttachmentInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-RoomStoryFileAttachmentInput"
generated_by: "scripts/convert.mjs"
---


# `RoomStoryFileAttachmentInput` (input object)

## Description

Inout for Story Attachment creation

## Fields

| Field | Type | Description |
|---|---|---|
| `fileId` | [`ID!`](../scalars/ID.md) | File uid returned from createDirectUploadLinkForRoomMessage |
| `fileName` | [`String!`](../scalars/String.md) | Original file name (same value passed to createDirectUploadLinkForRoomMessage) |
| `fileSize` | [`String`](../scalars/String.md) | File size in bytes as a string, e.g. "1024" |
| `contentType` | [`String`](../scalars/String.md) | MIME type, e.g. "text/plain" or "image/png" |
| `imageId` | [`ID`](../scalars/ID.md) | Thumbnail/preview file uid — required for inline image preview in messaging UI |
| `imageUrl` | [`String`](../scalars/String.md) | Thumbnail preview URL; defaults to /ab/messages/att/{imageUid} when imageUid is set |
| `originalWidth` | [`String`](../scalars/String.md) | Original image width in pixels, e.g. "710" |
| `originalHeight` | [`String`](../scalars/String.md) | Original image height in pixels, e.g. "837" |
| `thumbnailWidth` | [`String`](../scalars/String.md) | Thumbnail width in pixels, e.g. "305" |
| `thumbnailHeight` | [`String`](../scalars/String.md) | Thumbnail height in pixels, e.g. "360" |
| `thumbnailSize` | [`String`](../scalars/String.md) | Thumbnail file size in bytes as a string, e.g. "22425" |

## Examples

### Example

```json
{
  "fileId": 4,
  "fileName": "abc123",
  "fileSize": "abc123",
  "contentType": "abc123",
  "imageId": "4",
  "imageUrl": "abc123",
  "originalWidth": "abc123",
  "originalHeight": "xyz789",
  "thumbnailWidth": "xyz789",
  "thumbnailHeight": "abc123",
  "thumbnailSize": "xyz789"
}
```
