---
title: "snapshotsByContractId"
kind: "query"
gql_name: "snapshotsByContractId"
returns: "[Snapshot]"
html_id: "query-snapshotsByContractId"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-snapshotsByContractId"
generated_by: "scripts/convert.mjs"
---


# `snapshotsByContractId`

## Description

List all Snapshots for given contract ID and particular timestamp. timestamp are in (Unix Epoch seconds)

## Required Permissions

"Scope to read snapshots information - Public"

## Response

Returns [`[Snapshot]`](../types/Snapshot.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `input` | [`SnapshotsByContractIdInput!`](../inputs/SnapshotsByContractIdInput.md) | Contract and timestamp parameters |

## Examples

### Detailed structure

#### Query

```graphql
query snapshotsByContractId($input: SnapshotsByContractIdInput!) {
  snapshotsByContractId(input: $input) {
    id
    time
    contractId
    mouseEventsCount
    keyboardEventsCount
    teamName
    status
    activeWindowTitle
    memo
    companyId
    hasScreenshot
    screenshotUrl
    screenshotImage
    screenshotImageLarge
    screenshotImageMedium
    screenshotImageThumbnail
    hasWebcam
    webcamUrl
    webcamImage
    webcamImageThumbnail
    task
    minutes {
      ...SnapshotMinutesFragment
    }
  }
}
```

#### Variables

```json
{"input": SnapshotsByContractIdInput}
```

#### Response

```json
{
  "data": {
    "snapshotsByContractId": [
      {
        "id": "4",
        "time": 123,
        "contractId": "abc123",
        "mouseEventsCount": 123,
        "keyboardEventsCount": 123,
        "teamName": "xyz789",
        "status": "abc123",
        "activeWindowTitle": "abc123",
        "memo": "xyz789",
        "companyId": "abc123",
        "hasScreenshot": false,
        "screenshotUrl": "xyz789",
        "screenshotImage": "xyz789",
        "screenshotImageLarge": "abc123",
        "screenshotImageMedium": "xyz789",
        "screenshotImageThumbnail": "xyz789",
        "hasWebcam": false,
        "webcamUrl": "xyz789",
        "webcamImage": "xyz789",
        "webcamImageThumbnail": "abc123",
        "task": "abc123",
        "minutes": SnapshotMinutes
      }
    ]
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-snapshotsByContractId" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [roomStory](roomStory.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [user](user.md) ➡️
