---
title: "clientProposal"
kind: "query"
gql_name: "clientProposal"
returns: "ClientProposal"
html_id: "query-clientProposal"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-clientProposal"
generated_by: "scripts/convert.mjs"
---


# `clientProposal`

## Description

Client proposal by ID

## Required Permissions

"Client Proposals - Read And Write Access"

## Response

Returns a [`ClientProposal`](../types/ClientProposal.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | ID of the client proposal |

## Examples

### Detailed structure

#### Query

```graphql
query clientProposal($id: ID!) {
  clientProposal(id: $id) {
    id
    user {
      ...GenericUserFragment
    }
    organization {
      ...GenericOrganizationFragment
    }
    job {
      ...MarketplaceJobPostingFragment
    }
    inviteToInterview {
      ...InviteToInterviewFragment
    }
    room {
      ...RoomFragment
    }
    terms {
      ...ProposalTermsFragment
    }
    coverLetter
    attachments {
      ...ProposalAttachmentFragment
    }
    projectPlan {
      ...ProposalProjectPlanFragment
    }
    auditDetails {
      ...ProposalAuditDetailsFragment
    }
    status {
      ...ClientProposalStatusFragment
    }
    annotations
  }
}
```

#### Variables

```json
{"id": 4}
```

#### Response

```json
{
  "data": {
    "clientProposal": {
      "id": 4,
      "user": GenericUser,
      "organization": GenericOrganization,
      "job": MarketplaceJobPosting,
      "inviteToInterview": InviteToInterview,
      "room": Room,
      "terms": ProposalTerms,
      "coverLetter": "abc123",
      "attachments": [ProposalAttachment],
      "projectPlan": ProposalProjectPlan,
      "auditDetails": ProposalAuditDetails,
      "status": ClientProposalStatus,
      "annotations": ["Recommended"]
    }
  }
}
```

### Real-life example

#### Query

```graphql
query ClientProposalDetails($id: ID!) {
  clientProposal(id: $id) {
    id
    coverLetter
    status {
      status
      reason {
        reason
      }
    }
    terms {
      chargeRate {
        displayValue
        currency
      }
      estimatedDuration {
        label
      }
      upfrontPaymentPercent
    }
    projectPlan {
      milestones {
        description
        dueDate
        amount
      }
    }
    user {
      id
    }
    job {
      id
    }
  }
}
```

#### Variables

```json
{"id": "2056554495343624193"}
```

#### Response

```json
{
  "data": {
    "clientProposal": {
      "id": "2056554495343624193",
      "coverLetter": "Cover letter on behalf of user f605181456bd95zl applying to the opening #2056499367840778935 on Tue May 19 01:56:14 GMT 2026 as part of release testing by Upwork QA",
      "status": {
        "status": "Created",
        "reason": null
      },
      "terms": {
        "chargeRate": {
          "displayValue": "USD 308.92",
          "currency": "USD"
        },
        "estimatedDuration": null,
        "upfrontPaymentPercent": 0
      },
      "projectPlan": null,
      "user": {
        "id": "2056388534005908022"
      },
      "job": {
        "id": "2056499367840778935"
      }
    }
  }
}
```

## Used in sample flows

- Step **2** (View proposal) in [Working with Proposals as a client](../operations/examples/proposals.md)

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-clientProposal" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [vendorProposals](vendorProposals.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [clientProposals](clientProposals.md) ➡️
