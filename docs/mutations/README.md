---
title: "Mutations"
kind: "index"
generated_by: "scripts/convert.mjs"
---


# Mutations

GraphQL mutation operations of the Upwork API, grouped by domain. ⚠️ marks deprecated operations.

## Other

| Mutation | Description |
|---|---|
| [undefined](addJobPostingTag.md) | Adds a custom annotation tag to a job posting. |
| [undefined](createJobPosting.md) | Create a new Job post |
| [undefined](removeJobPostingTag.md) | Removes a custom annotation tag from a job posting. |
| [undefined](updateJobPosting.md) | Update an existing Job post by its ID |
| [undefined](acceptOffer.md) | Freelancer accepts an Offer and returns the corresponding contract details. |
| [undefined](endContractByFreelancer.md) | End a contract by a freelancer |
| [undefined](withdrawOffer.md) | Withdraw an offer. |
| [undefined](activateMilestone.md) | Client activates an existing milestone Note: if the client is an enterprise, the milestone will be activated i… |
| [undefined](approveMilestone.md) | Approves a milestone |
| [undefined](createMilestoneV2.md) | Client creates a new milestone (V2) |
| [undefined](createOffer.md) | Create offer mutation used for all available types of offer including Fixed price and Hourly |
| [undefined](deleteMilestone.md) | Client deletes an existing milestone |
| [undefined](editMilestone.md) | Client edits an existing milestone |
| [undefined](endContractAtomic.md) | End a contract using the atomic flow |
| [undefined](endContractByClient.md) | End a contract by a client |
| [undefined](pauseContract.md) | Pause a contract by a client |
| [undefined](rejectSubmittedMilestone.md) | Allows client to reject a milestone submission from a freelancer |
| [undefined](restartContract.md) | Restart a contract by a client |
| [undefined](updateContractHourlyLimit.md) | Update hourly limit |
| [undefined](sendCustomPayment.md) | Send custom payment |
| [undefined](confirmFiles.md) | Confirm files, returned is a flag indicating whether operation was successful or not |
| [undefined](confirmRoomMessageFiles.md) | Confirms room message attachment files after upload to S3 |
| [undefined](createClientJobInvitation.md) | Creates a new invitation for a given freelancer, client and jobPosting parameters |
| [undefined](createDirectUploadLinkForFileAttachment.md) | Returns file upload details, containing upload url, for the attachment type informed. |
| [undefined](createDirectUploadLinkForJAClientProposal.md) | Create direct upload link, to upload Job Application client proposal attachments |
| [undefined](createDirectUploadLinkForJAVendorProposal.md) | Create direct upload link, to upload Job Application vendor proposal attachments |
| [undefined](createDirectUploadLinkForRoomMessage.md) | Returns file upload details for a single room message attachment |
| [undefined](declineClientProposal.md) | Decline client proposal |
| [undefined](hideClientProposal.md) | Toggle hide status on the client proposal. |
| [undefined](markClientProposalAsRead.md) | Mark client proposal as read |
| [undefined](messageClientProposal.md) | Message client proposal |
| [undefined](shortlistClientProposal.md) | Shortlist client proposal |
| [undefined](invoiceDownloadBulkAsyncV2.md) | Generate bulk async PDFs invoice/receipt for given accounting entities as well as the given criteria. |
| [undefined](invoiceDownloadBulkV2.md) | Generate bulk PDFs invoice/receipt for given accounting entities as well as the given criteria. |
| [undefined](addFreelancerEmploymentRecord.md) | Add a new employment record for the freelancer (userId is taken from the context) |
| [undefined](addFreelancerOtherExperience.md) | Add a new otherExperience for the freelancer (userId is taken from the context) |
| [undefined](addTeamActivity.md) | Create activity at team level. A user needs to have hiring manager privileges within the team in order to crea… |
| [undefined](addUserToRoom.md) | Adds users to an existing room |
| [undefined](archiveRoom.md) | Archives an existing room |
| [undefined](archiveTeamActivity.md) | Archive activities. A user needs to have hiring manager privileges within the team in order to create an activ… |
| [undefined](assignTeamActivityToTheContract.md) | Assign and unassign contract to the list of activities. |
| [undefined](createOrganization.md) | Create a new child organization |
| [undefined](createRoomStoryV2.md) | Creates a new message or story in an existing room |
| [undefined](createRoomV2.md) | Creates a new room and returns its information |
| [undefined](inviteToTeam.md) | Invite someone by email or username to an existing team |
| [undefined](removeFreelancerEmploymentRecord.md) | Delete employment record of the freelancer by employment record's id (provided userId is ignored and taken fro… |
| [undefined](removeFreelancerOtherExperience.md) | Delete other experience of the freelancer by other experience's id (userId is taken from the context) |
| [undefined](removeRoom.md) | Removes a room permanently |
| [undefined](removeRoomStory.md) | Removes a story from a room |
| [undefined](removeUserFromRoom.md) | Removes a user from a room |
| [undefined](roomCreate1on1IfNotExists.md) | Creates a one-on-one room if it does not exist and returns the room information |
| [undefined](unarchiveTeamActivity.md) | Unarchive activities. A user needs to have hiring manager privileges within the team in order to create an act… |
| [undefined](updateFreelancerAvailability.md) | Update freelancer's availability given its id and userId |
| [undefined](updateFreelancerEmploymentRecord.md) | Update freelancer's employment record given its id (userId is taken from the context) |
| [undefined](updateFreelancerOtherExperience.md) | Update otherExperience for the freelancer given its id (userId is taken from the context) |
| [undefined](updateOrganization.md) | Update organization data |
| [undefined](updateRoomStoryV2.md) | Updates an existing message or story in a room |
| [undefined](updateRoomV2.md) | Updates an existing room and returns the updated room |
| [undefined](updateTeamActivity.md) | Update activity at team level. A user needs to have hiring manager privileges within the team in order to crea… |
| [undefined](updateWorkflowTask.md) | Updates the status of the individual task associated with the workflowId and taskId |
| [undefined](acceptVendorInvitation.md) | Accepts a vendor invitation and creates a proposal |
| [undefined](createContractProposal.md) | Create (submit) a contract proposal. Vendor (freelancer or agency manager) operation. |
| [undefined](createDirectUploadLinkForJPAttachment.md) | Create a direct link for Jop Posting attachment |
| [undefined](createJobProposal.md) | Create a new proposal using the new flow |
| [undefined](savePersonJob.md) | Saves job for the current person. |
| [undefined](submitContractMilestone.md) | Submit a contract milestone for review/approval |
| [undefined](withdrawContractProposal.md) | Withdraw a contract proposal. Vendor (freelancer or agency manager) operation. |
