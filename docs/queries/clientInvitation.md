---
title: "clientInvitation"
kind: "query"
gql_name: "clientInvitation"
returns: "ClientInvitation"
html_id: "query-clientInvitation"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-clientInvitation"
generated_by: "scripts/convert.mjs"
---


# `clientInvitation`

## Description

Returns client invitation for a given invitation Id

## Required Permissions

"List Invitation Entities as a client - Read-Only Access"

## Response

Returns a [`ClientInvitation`](../types/ClientInvitation.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `filter` | [`ClientInvitationFilter!`](../inputs/ClientInvitationFilter.md) | Filter for fetching a specific invitation |

## Examples

### Detailed structure

#### Query

```graphql
query clientInvitation($filter: ClientInvitationFilter!) {
  clientInvitation(filter: $filter) {
    id
    client {
      ...ClientInvitationParticipantFragment
    }
    freelancer {
      ...ClientInvitationParticipantFragment
    }
    jobPosting {
      ...JobPostingFragment
    }
    invitationLetter
    inviteAttempt
    context
    statusDetails {
      ...ClientInvitationStatusDetailsFragment
    }
    acceptanceDetails {
      ...ClientInvitationAcceptanceDetailsFragment
    }
    additionalInfo {
      ...ClientInvitationAdditionalInfoFragment
    }
  }
}
```

#### Variables

```json
{"filter": ClientInvitationFilter}
```

#### Response

```json
{
  "data": {
    "clientInvitation": {
      "id": 4,
      "client": ClientInvitationParticipant,
      "freelancer": ClientInvitationParticipant,
      "jobPosting": JobPosting,
      "invitationLetter": "abc123",
      "inviteAttempt": 987,
      "context": "Freelancer",
      "statusDetails": ClientInvitationStatusDetails,
      "acceptanceDetails": ClientInvitationAcceptanceDetails,
      "additionalInfo": ClientInvitationAdditionalInfo
    }
  }
}
```
