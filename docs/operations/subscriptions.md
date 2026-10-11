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
| UPDATE | marketplace job posting was updated |  |
| CLOSE | marketplace job posting was closed |  |

Subscription events when any action is performed on any offer. The operation can be initiated by Vendor Organization or Client Organization.

| Entity | Action | Description |
|---|---|---|
| Offer (OFFER) | CREATE | new offer was created |
| DECLINE | offer was declined |  |
| EXPIRED | offer expired |  |
| CANCELLED | offer was cancelled |  |
| WITHDREW | offer was withdrawn |  |
| ACCEPTED | offer is accepted |  |

Subscription events when any action is performed on any Job Application, initiated by a Vendor.

| Entity | Action | Description |
|---|---|---|
| Vendor Job Application (Vendor JA) | VendorCreate | job application was created by vendor |
| ClientCreate | job application was created by client, an invitation was sent |  |
| SystemAccept | job application was accepted by system (currently this only means that connects were charged successfully |  |
| VendorWithdraw | vendor withrdew the job application |  |
| VendorReplace | job application was replaced (vendor proposed different terms) |  |
| ClientActivate | client activated job application by starting conversation with the freelancer |  |
| ClientOffer | client made an offer |  |
| ClientDecline | client declined job application |  |
| SystemArchive | job application was archived by system (for example, when opening was cancelled) |  |
| VendorHide | job application was hidden by vendor |  |
| VendorUnHide | job application was unhidden by vendor |  |
| SystemReject | job application was rejected by the system (currently this means that use had not enough connects) |  |
| SystemReplace | new job application was created by system with new terms proposed by vendor |  |
| VendorReapply | when vendor re-apply to a job |  |
| VendorAcceptInvite | when vendor accepts an invite-to-interview |  |
| SystemHold | when system marks application as on hold |  |
| SystemUnHold | when system marks application as not on hold |  |
| VendorAcceptOffer | when vendor accepts client offer |  |
| VendorDeclineOffer | when vendor declines client offer |  |
| ClientWithdrawOffer | when client withdrew the offer |  |
| SystemApplyToStaffAugDuplicate | when system apply staff event happened |  |
| SystemWithdraw | system withdrew event |  |
| VendorAcceptInviteWithPendingOffer | vendor accepts a job invitation with offer in pending state |  |
| VendorAcceptInviteWithAcceptedOffer | vendor accepts a job invitation with accepted offer |  |
| VendorInitiate | vendor submits a regular job application(proposal) |  |
| SystemInvalidate | system invalidate event |  |
| ValidationTimeOut | validation timeouts |  |
| SystemValidate | system validate event |  |
| ClientHire | client hires |  |
| OccupationUpdated | occupation updated |  |
| OccupationRemoved | occupation removed |  |
| UpdateTerms | terms were updated |  |

Subscription events when any action is performed on any Job Application, initiated by a Client.

| Entity | Action | Description |
|---|---|---|
| Client Job Application (Client JA) | VendorCreate | job application was created by vendor |
| SystemPublish | job application was accepted by system |  |
| ClientActivate | client activated job application by starting conversation with the vendor |  |
| ClientAccept | client made an offer to vendor |  |
| ClientDecline | client declined job application |  |
| VendorWithdraw | vendor withrdew the job application |  |
| VendorReplace | job application was replaced (vendor proposed different terms) |  |
| ClientRead | job application was read by the client |  |
| ClientHide | job application was unhidden by the client |  |
| ClientUnhide | job application was unhidden by the client |  |
| SystemHide | job application was hidden by the system |  |
| SystemUnhide | job application was unhidden by the system |  |
| SystemRecommend | job application was recommended by the system |  |
| SystemArchive | job application was archived by system (for example, when opening was cancelled) |  |
| ClientMessage | client sends a message |  |
| VendorAcceptInvite | vendor accepts a job invitation |  |
| ClientShortlist | client shortlisted an application |  |
| ClientUnshortlist | client unshortlisted an application |  |
| SystemScoreApplication | match scored a job application |  |
| SystemReplace | new job application was created by system with new terms proposed by vendor |  |
| NotRecommend | not recommended event |  |
| VendorDeclineOffer | when vendor declines client offer |  |
| ClientWithdrawOffer | when vendor withdraws client offer |  |
| VendorAcceptOffer | when vendor accepts client offer |  |
| VendorAcceptInviteWithPendingOffer | vendor accepts a job invitation with offer in pending state |  |
| VendorAcceptInviteWithAcceptedOffer | vendor accepts a job invitation with accepted offer |  |
| SystemWithdraw | system withdrew event |  |
| OccupationUpdated | occupation updated |  |
| OccupationRemoved | occupation removed |  |
| UpdateTerms | terms were updated |  |
| OutOfMoney | job application went out of money |  |
| RecruiterShortlist | vendor shortlisted a job application |  |
| RecruiterUnshortlist | vendor unshortlisted a job application |  |

Subscription events when any milestone is refreshed.

| Entity | Action | Description |
|---|---|---|
| Milestone (MILESTONE) | REFRESH | milestone refreshed |

Subscription events when any action is performed on a Contract Feedback, initiated by any party.

| Entity | Action | Description |
|---|---|---|
| Contract Feedback (CFB) | SUBMIT | contract feedback was submitted |
| UPDATE | contract feedback was updated |  |
| DELETE | contract feedback was deleted |  |
