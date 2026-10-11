---
title: "RoomType"
kind: "enum"
domain: "Users and teams"
gql_name: "RoomType"
html_id: "definition-RoomType"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-RoomType"
generated_by: "scripts/convert.mjs"
---


# `RoomType` (enum)

## Values

| Value | Description |
|---|---|
| `ONE_ON_ONE` | Designed for direct chat between two users (can't add others and can never leave the room) |
| `GROUP` | A group room is a regular room that is created on a particular user's request. The user can invite any number of users from their address book, and they can even invite users via email addresses to join the room. Users can be invited with either Admin or Participant roles. Admins can change the name of the room, the topic, invite new users, etc. The creator of the room is, by default, assigned the Owner role. |
| `INTERVIEW` | Interview rooms are a special type of room linked to upwork applications. There's one such room created for every job application with the client and the freelancer as the initial members of the room. They can only add people to these rooms if they're part of the client or freelancer's companies. The client and freelancer themselves can't leave this room. Hiring managers from the client's company can join these rooms without being added by others in the room. |

## Examples

### Example

```graphql
"ONE_ON_ONE"
```
