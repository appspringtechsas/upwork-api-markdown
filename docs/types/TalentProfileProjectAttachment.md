---
title: "TalentProfileProjectAttachment"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentProfileProjectAttachment"
html_id: "definition-TalentProfileProjectAttachment"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentProfileProjectAttachment"
generated_by: "scripts/convert.mjs"
---


# `TalentProfileProjectAttachment` (object)

## Description

File or media attachment for a portfolio project

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID`](../scalars/ID.md) | Attachment identifier |
| `type` | [`String`](../scalars/String.md) | Attachment type (image, video, document) |
| `title` | [`String`](../scalars/String.md) | Attachment title |
| `attachmentName` | [`String`](../scalars/String.md) | Original filename |
| `attachmentSize` | [`Int`](../scalars/Int.md) | File size in bytes |
| `originalAttachment` | [`String`](../scalars/String.md) | URL to original attachment |
| `imageSmall` | [`String`](../scalars/String.md) | URL to small image version |
| `imageMiddle` | [`String`](../scalars/String.md) | URL to medium image version |
| `imageLarge` | [`String`](../scalars/String.md) | URL to large image version |
| `rank` | [`Int`](../scalars/Int.md) | Display order rank |
| `creationDateTime` | [`String`](../scalars/String.md) | When attachment was created |
| `description` | [`String`](../scalars/String.md) | Attachment description |
| `videoUrl` | [`String`](../scalars/String.md) | Video URL if applicable |
| `imageFixedWidth` | [`String`](../scalars/String.md) | URL to fixed-width image version |
| `group` | [`String`](../scalars/String.md) | Attachment group |

## Examples

### Example

```json
{
  "id": 4,
  "type": "xyz789",
  "title": "abc123",
  "attachmentName": "xyz789",
  "attachmentSize": 987,
  "originalAttachment": "xyz789",
  "imageSmall": "xyz789",
  "imageMiddle": "abc123",
  "imageLarge": "abc123",
  "rank": 123,
  "creationDateTime": "xyz789",
  "description": "xyz789",
  "videoUrl": "xyz789",
  "imageFixedWidth": "xyz789",
  "group": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentProfileProjectAttachment" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [TalentProfileProject](TalentProfileProject.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [TalentProfileProjectTag](TalentProfileProjectTag.md) ➡️
