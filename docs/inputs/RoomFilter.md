---
title: "RoomFilter"
kind: "input_object"
domain: "Users and teams"
gql_name: "RoomFilter"
html_id: "definition-RoomFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-RoomFilter"
generated_by: "scripts/convert.mjs"
---


# `RoomFilter` (input object)

## Fields

| Field | Type | Description |
|---|---|---|
| `roomType_eq` | [`RoomTypeFilter`](../enums/RoomTypeFilter.md) | Specifies a filter by type for the list of rooms |
| `roomPrivacy_eq` | [`RoomPrivacyFilter`](../enums/RoomPrivacyFilter.md) | Specifies a filter by the privacy of the room |
| `subscribed_eq` | [`Boolean`](../scalars/Boolean.md) | If specified, only the rooms that the user is (or is not) subscribed to will be returned. Default: true |
| `activeSince_eq` | [`String`](../scalars/String.md) | Return only the rooms that have had new activity since the given time. |
| `includeFavorites_eq` | [`Boolean`](../scalars/Boolean.md) | Include all favorite rooms, regardless of when the last activity in those rooms took place. Ignored if 'activeSince' is not set. |
| `includeUnreadIfActive_eq` | [`Boolean`](../scalars/Boolean.md) | Include all rooms having unread stories, regardless of when the last activity in those rooms took place. Ignored if 'activeSince' is not set. |
| `unreadRoomsOnly_eq` | [`Boolean`](../scalars/Boolean.md) | Filteres rooms that has unread stories if set to true. Note: This is mutually exclusive with 'activeSince' |
| `local_eq` | [`String`](../scalars/String.md) | The locale to use when stories are returned with the room |
| `includeHidden_eq` | [`Boolean`](../scalars/Boolean.md) | If false filters rooms which are not hidden, otherwise return all the rooms. Default: true |
| `objectReferenceId_eq` | [`ID`](../scalars/ID.md) | If specified, returns only rooms associated with that referenceId. If there are no rooms with that associated object reference and 'roomName' and 'roomType' are provided, creates a new room with those values and the associated object reference |
| `roomCategory_eq` | [`RoomCategoryFilter`](../enums/RoomCategoryFilter.md) | Filters rooms by given category |

## Examples

### Example

```json
{
  "roomType_eq": "ALL",
  "roomPrivacy_eq": "ALL",
  "subscribed_eq": true,
  "activeSince_eq": "abc123",
  "includeFavorites_eq": true,
  "includeUnreadIfActive_eq": true,
  "unreadRoomsOnly_eq": false,
  "local_eq": "abc123",
  "includeHidden_eq": false,
  "objectReferenceId_eq": "4",
  "roomCategory_eq": "FAVORITES"
}
```
