---
title: "FreelancerProfileProjectAttachment"
kind: "object"
domain: "Users and teams"
gql_name: "FreelancerProfileProjectAttachment"
html_id: "definition-FreelancerProfileProjectAttachment"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileProjectAttachment"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfileProjectAttachment` (object)

## Description

Project attachment

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID`](../scalars/ID.md) | Attachment identifier |
| `link` | [`String`](../scalars/String.md) | Public URL to the attachment |
| `fileName` | [`String`](../scalars/String.md) | Original file name |
| `fileSize` | [`Int`](../scalars/Int.md) | File size in bytes |
| `rank` | [`Int`](../scalars/Int.md) | Display order of the attachment |
| `videoUrl` | [`String`](../scalars/String.md) | Video URL if attachment is a video |
| `type` | [`String`](../scalars/String.md) | Attachment type (e.g., IMAGE, VIDEO) |
| `title` | [`String`](../scalars/String.md) | Attachment title |
| `description` | [`String`](../scalars/String.md) | Attachment description |
| `imageSmall` | [`String`](../scalars/String.md) | Small image URL |
| `imageMiddle` | [`String`](../scalars/String.md) | Medium image URL |
| `imageLarge` | [`String`](../scalars/String.md) | Large image URL |

## Examples

### Example

```json
{
  "id": 4,
  "link": "abc123",
  "fileName": "xyz789",
  "fileSize": 987,
  "rank": 123,
  "videoUrl": "xyz789",
  "type": "xyz789",
  "title": "xyz789",
  "description": "abc123",
  "imageSmall": "abc123",
  "imageMiddle": "xyz789",
  "imageLarge": "xyz789"
}
```
