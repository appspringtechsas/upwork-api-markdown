---
title: "Subscriptions"
kind: "section"
html_id: "operations-subscriptions"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#operations-subscriptions"
generated_by: "scripts/convert.mjs"
---


# Subscriptions

## Subscriptions in GraphQL

The **Subscription** feature allows clients, agencies and freelancers to subscribe to specific events within the system. Once a subscribed event occurs, the system automatically sends a payload to the client’s designated webhook. This payload includes essential details about the event, such as the **entity**, **action**, and **id** associated with the event.

By utilizing this feature, consumers can stay updated with real-time changes, ensuring they are always in sync with the events that matter most to their application or business. The subscription process is flexible and can be configured to trigger on various events, such as updates, creations, or other predefined actions.

> Once a subscription is created, it needs to be reviewed and approved by Upwork Team. Untill then, the subscription will remain in REVIEW state.

## Key Components:

- **Entity**

  : Represents the object or resource associated with the event (e.g., "JP", "OFFER", "JA").
- **Action**

  : Describes the type of event or operation performed (e.g., "NEW", "UPDATE", "CANCELLED").
- **ID**

  : A unique identifier associated with the event, typically referencing a specific record or transaction.

When an event that the client has subscribed to is triggered, the system will send a payload to the client's webhook endpoint. This payload will include the entity name, action taken, and a unique identifier (ID) to allow for easy tracking and handling of the event.

## Example Payload:

```json
{
    "entity": "OFFER",
    "action": "CREATE",
    "id": "123456789"
}
```

To manage your subscriptions and configure events easily, you can use our [Subscription Management Tool](https://www.upwork.com/developer/subscriptions). This tool allows you to view, create, and update your subscriptions through a user-friendly interface.

This ensures that consumers receive the necessary data to process events in real-time, giving them complete control over how events are handled within their application. The flexibility to define custom webhooks and subscribe to a range of events provides a powerful way to integrate the system's activities with the client’s workflows.

## Supported events:

- [Job postings (JP)](subscriptions.md#supported-events)
- [Offer (OFFER)](subscriptions.md#supported-events)
- [Vendor Job Application (Vendor JA)](subscriptions.md#supported-events)
- [Client Job Application (Client JA)](subscriptions.md#supported-events)
- [Milestone (MILESTONE)](subscriptions.md#supported-events)
- [Contract Feedback (CFB)](subscriptions.md#supported-events)

Subscription events when any action is initiated by a Client and performed on any marketplace job.

| Entity | Action | Description |
|---|---|---|
| Job postings (JP) | NEW | new marketplace job posting was created |
| Job postings (JP) | UPDATE | marketplace job posting was updated |
| Job postings (JP) | CLOSE | marketplace job posting was closed |

Subscription events when any action is performed on any offer. The operation can be initiated by Vendor Organization or Client Organization.

| Entity | Action | Description |
|---|---|---|
| Offer (OFFER) | CREATE | new offer was created |
| Offer (OFFER) | DECLINE | offer was declined |
| Offer (OFFER) | EXPIRED | offer expired |
| Offer (OFFER) | CANCELLED | offer was cancelled |
| Offer (OFFER) | WITHDREW | offer was withdrawn |
| Offer (OFFER) | ACCEPTED | offer is accepted |

Subscription events when any action is performed on any Job Application, initiated by a Vendor.

| Entity | Action | Description |
|---|---|---|
| Vendor Job Application (Vendor JA) | VendorCreate | job application was created by vendor |
| Vendor Job Application (Vendor JA) | ClientCreate | job application was created by client, an invitation was sent |
| Vendor Job Application (Vendor JA) | SystemAccept | job application was accepted by system (currently this only means that connects were charged successfully |
| Vendor Job Application (Vendor JA) | VendorWithdraw | vendor withrdew the job application |
| Vendor Job Application (Vendor JA) | VendorReplace | job application was replaced (vendor proposed different terms) |
| Vendor Job Application (Vendor JA) | ClientActivate | client activated job application by starting conversation with the freelancer |
| Vendor Job Application (Vendor JA) | ClientOffer | client made an offer |
| Vendor Job Application (Vendor JA) | ClientDecline | client declined job application |
| Vendor Job Application (Vendor JA) | SystemArchive | job application was archived by system (for example, when opening was cancelled) |
| Vendor Job Application (Vendor JA) | VendorHide | job application was hidden by vendor |
| Vendor Job Application (Vendor JA) | VendorUnHide | job application was unhidden by vendor |
| Vendor Job Application (Vendor JA) | SystemReject | job application was rejected by the system (currently this means that use had not enough connects) |
| Vendor Job Application (Vendor JA) | SystemReplace | new job application was created by system with new terms proposed by vendor |
| Vendor Job Application (Vendor JA) | VendorReapply | when vendor re-apply to a job |
| Vendor Job Application (Vendor JA) | VendorAcceptInvite | when vendor accepts an invite-to-interview |
| Vendor Job Application (Vendor JA) | SystemHold | when system marks application as on hold |
| Vendor Job Application (Vendor JA) | SystemUnHold | when system marks application as not on hold |
| Vendor Job Application (Vendor JA) | VendorAcceptOffer | when vendor accepts client offer |
| Vendor Job Application (Vendor JA) | VendorDeclineOffer | when vendor declines client offer |
| Vendor Job Application (Vendor JA) | ClientWithdrawOffer | when client withdrew the offer |
| Vendor Job Application (Vendor JA) | SystemApplyToStaffAugDuplicate | when system apply staff event happened |
| Vendor Job Application (Vendor JA) | SystemWithdraw | system withdrew event |
| Vendor Job Application (Vendor JA) | VendorAcceptInviteWithPendingOffer | vendor accepts a job invitation with offer in pending state |
| Vendor Job Application (Vendor JA) | VendorAcceptInviteWithAcceptedOffer | vendor accepts a job invitation with accepted offer |
| Vendor Job Application (Vendor JA) | VendorInitiate | vendor submits a regular job application(proposal) |
| Vendor Job Application (Vendor JA) | SystemInvalidate | system invalidate event |
| Vendor Job Application (Vendor JA) | ValidationTimeOut | validation timeouts |
| Vendor Job Application (Vendor JA) | SystemValidate | system validate event |
| Vendor Job Application (Vendor JA) | ClientHire | client hires |
| Vendor Job Application (Vendor JA) | OccupationUpdated | occupation updated |
| Vendor Job Application (Vendor JA) | OccupationRemoved | occupation removed |
| Vendor Job Application (Vendor JA) | UpdateTerms | terms were updated |

Subscription events when any action is performed on any Job Application, initiated by a Client.

| Entity | Action | Description |
|---|---|---|
| Client Job Application (Client JA) | VendorCreate | job application was created by vendor |
| Client Job Application (Client JA) | SystemPublish | job application was accepted by system |
| Client Job Application (Client JA) | ClientActivate | client activated job application by starting conversation with the vendor |
| Client Job Application (Client JA) | ClientAccept | client made an offer to vendor |
| Client Job Application (Client JA) | ClientDecline | client declined job application |
| Client Job Application (Client JA) | VendorWithdraw | vendor withrdew the job application |
| Client Job Application (Client JA) | VendorReplace | job application was replaced (vendor proposed different terms) |
| Client Job Application (Client JA) | ClientRead | job application was read by the client |
| Client Job Application (Client JA) | ClientHide | job application was unhidden by the client |
| Client Job Application (Client JA) | ClientUnhide | job application was unhidden by the client |
| Client Job Application (Client JA) | SystemHide | job application was hidden by the system |
| Client Job Application (Client JA) | SystemUnhide | job application was unhidden by the system |
| Client Job Application (Client JA) | SystemRecommend | job application was recommended by the system |
| Client Job Application (Client JA) | SystemArchive | job application was archived by system (for example, when opening was cancelled) |
| Client Job Application (Client JA) | ClientMessage | client sends a message |
| Client Job Application (Client JA) | VendorAcceptInvite | vendor accepts a job invitation |
| Client Job Application (Client JA) | ClientShortlist | client shortlisted an application |
| Client Job Application (Client JA) | ClientUnshortlist | client unshortlisted an application |
| Client Job Application (Client JA) | SystemScoreApplication | match scored a job application |
| Client Job Application (Client JA) | SystemReplace | new job application was created by system with new terms proposed by vendor |
| Client Job Application (Client JA) | NotRecommend | not recommended event |
| Client Job Application (Client JA) | VendorDeclineOffer | when vendor declines client offer |
| Client Job Application (Client JA) | ClientWithdrawOffer | when vendor withdraws client offer |
| Client Job Application (Client JA) | VendorAcceptOffer | when vendor accepts client offer |
| Client Job Application (Client JA) | VendorAcceptInviteWithPendingOffer | vendor accepts a job invitation with offer in pending state |
| Client Job Application (Client JA) | VendorAcceptInviteWithAcceptedOffer | vendor accepts a job invitation with accepted offer |
| Client Job Application (Client JA) | SystemWithdraw | system withdrew event |
| Client Job Application (Client JA) | OccupationUpdated | occupation updated |
| Client Job Application (Client JA) | OccupationRemoved | occupation removed |
| Client Job Application (Client JA) | UpdateTerms | terms were updated |
| Client Job Application (Client JA) | OutOfMoney | job application went out of money |
| Client Job Application (Client JA) | RecruiterShortlist | vendor shortlisted a job application |
| Client Job Application (Client JA) | RecruiterUnshortlist | vendor unshortlisted a job application |

Subscription events when any milestone is refreshed.

| Entity | Action | Description |
|---|---|---|
| Milestone (MILESTONE) | REFRESH | milestone refreshed |

Subscription events when any action is performed on a Contract Feedback, initiated by any party.

| Entity | Action | Description |
|---|---|---|
| Contract Feedback (CFB) | SUBMIT | contract feedback was submitted |
| Contract Feedback (CFB) | UPDATE | contract feedback was updated |
| Contract Feedback (CFB) | DELETE | contract feedback was deleted |

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#operations-subscriptions" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [reports](examples/reports.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [queries index](../queries/README.md) ➡️
