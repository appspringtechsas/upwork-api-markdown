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
        "time": 987,
        "contractId": "abc123",
        "mouseEventsCount": 987,
        "keyboardEventsCount": 123,
        "teamName": "xyz789",
        "status": "abc123",
        "activeWindowTitle": "xyz789",
        "memo": "xyz789",
        "companyId": "xyz789",
        "hasScreenshot": false,
        "screenshotUrl": "xyz789",
        "screenshotImage": "abc123",
        "screenshotImageLarge": "abc123",
        "screenshotImageMedium": "abc123",
        "screenshotImageThumbnail": "abc123",
        "hasWebcam": false,
        "webcamUrl": "abc123",
        "webcamImage": "xyz789",
        "webcamImageThumbnail": "abc123",
        "task": "xyz789",
        "minutes": SnapshotMinutes
      }
    ]
  }
}
```
