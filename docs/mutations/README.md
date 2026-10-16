---
title: "Mutations"
kind: "index"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#group-Operations-Mutations"
generated_by: "scripts/convert.mjs"
---


# Mutations

GraphQL mutation operations of the Upwork API, grouped by domain. ⚠️ marks deprecated operations.

## Other

| Mutation | Description |
|---|---|
| [addJobPostingTag](addJobPostingTag.md) | Adds a custom annotation tag to a job posting. |
| [createJobPosting](createJobPosting.md) | Create a new Job post |
| [removeJobPostingTag](removeJobPostingTag.md) | Removes a custom annotation tag from a job posting. |
| [updateJobPosting](updateJobPosting.md) | Update an existing Job post by its ID |
| [acceptOffer](acceptOffer.md) | Freelancer accepts an Offer and returns the corresponding contract details. |
| [endContractByFreelancer](endContractByFreelancer.md) | End a contract by a freelancer |
| [withdrawOffer](withdrawOffer.md) | Withdraw an offer. |
| [activateMilestone](activateMilestone.md) | Client activates an existing milestone Note: if the client is an enterprise, the milestone will be activated i… |
| [approveMilestone](approveMilestone.md) | Approves a milestone |
| [createMilestoneV2](createMilestoneV2.md) | Client creates a new milestone (V2) |
| [createOffer](createOffer.md) | Create offer mutation used for all available types of offer including Fixed price and Hourly |
| [deleteMilestone](deleteMilestone.md) | Client deletes an existing milestone |
| [editMilestone](editMilestone.md) | Client edits an existing milestone |
| [endContractAtomic](endContractAtomic.md) | End a contract using the atomic flow |
| [endContractByClient](endContractByClient.md) | End a contract by a client |
| [pauseContract](pauseContract.md) | Pause a contract by a client |
| [rejectSubmittedMilestone](rejectSubmittedMilestone.md) | Allows client to reject a milestone submission from a freelancer |
| [restartContract](restartContract.md) | Restart a contract by a client |
| [updateContractHourlyLimit](updateContractHourlyLimit.md) | Update hourly limit |
| [sendCustomPayment](sendCustomPayment.md) | Send custom payment |
| [confirmFiles](confirmFiles.md) | Confirm files, returned is a flag indicating whether operation was successful or not |
| [confirmRoomMessageFiles](confirmRoomMessageFiles.md) | Confirms room message attachment files after upload to S3 |
| [createClientJobInvitation](createClientJobInvitation.md) | Creates a new invitation for a given freelancer, client and jobPosting parameters |
| [createDirectUploadLinkForFileAttachment](createDirectUploadLinkForFileAttachment.md) | Returns file upload details, containing upload url, for the attachment type informed. |
| [createDirectUploadLinkForJAClientProposal](createDirectUploadLinkForJAClientProposal.md) | Create direct upload link, to upload Job Application client proposal attachments |
| [createDirectUploadLinkForJAVendorProposal](createDirectUploadLinkForJAVendorProposal.md) | Create direct upload link, to upload Job Application vendor proposal attachments |
| [createDirectUploadLinkForRoomMessage](createDirectUploadLinkForRoomMessage.md) | Returns file upload details for a single room message attachment |
| [declineClientProposal](declineClientProposal.md) | Decline client proposal |
| [hideClientProposal](hideClientProposal.md) | Toggle hide status on the client proposal. |
| [markClientProposalAsRead](markClientProposalAsRead.md) | Mark client proposal as read |
| [messageClientProposal](messageClientProposal.md) | Message client proposal |
| [shortlistClientProposal](shortlistClientProposal.md) | Shortlist client proposal |
| [invoiceDownloadBulkAsyncV2](invoiceDownloadBulkAsyncV2.md) | Generate bulk async PDFs invoice/receipt for given accounting entities as well as the given criteria. |
| [invoiceDownloadBulkV2](invoiceDownloadBulkV2.md) | Generate bulk PDFs invoice/receipt for given accounting entities as well as the given criteria. |
| [addFreelancerEmploymentRecord](addFreelancerEmploymentRecord.md) | Add a new employment record for the freelancer (userId is taken from the context) |
| [addFreelancerOtherExperience](addFreelancerOtherExperience.md) | Add a new otherExperience for the freelancer (userId is taken from the context) |
| [addTeamActivity](addTeamActivity.md) | Create activity at team level. A user needs to have hiring manager privileges within the team in order to crea… |
| [addUserToRoom](addUserToRoom.md) | Adds users to an existing room |
| [archiveRoom](archiveRoom.md) | Archives an existing room |
| [archiveTeamActivity](archiveTeamActivity.md) | Archive activities. A user needs to have hiring manager privileges within the team in order to create an activ… |
| [assignTeamActivityToTheContract](assignTeamActivityToTheContract.md) | Assign and unassign contract to the list of activities. |
| [createOrganization](createOrganization.md) | Create a new child organization |
| [createRoomStoryV2](createRoomStoryV2.md) | Creates a new message or story in an existing room |
| [createRoomV2](createRoomV2.md) | Creates a new room and returns its information |
| [inviteToTeam](inviteToTeam.md) | Invite someone by email or username to an existing team |
| [removeFreelancerEmploymentRecord](removeFreelancerEmploymentRecord.md) | Delete employment record of the freelancer by employment record's id (provided userId is ignored and taken fro… |
| [removeFreelancerOtherExperience](removeFreelancerOtherExperience.md) | Delete other experience of the freelancer by other experience's id (userId is taken from the context) |
| [removeRoom](removeRoom.md) | Removes a room permanently |
| [removeRoomStory](removeRoomStory.md) | Removes a story from a room |
| [removeUserFromRoom](removeUserFromRoom.md) | Removes a user from a room |
| [roomCreate1on1IfNotExists](roomCreate1on1IfNotExists.md) | Creates a one-on-one room if it does not exist and returns the room information |
| [unarchiveTeamActivity](unarchiveTeamActivity.md) | Unarchive activities. A user needs to have hiring manager privileges within the team in order to create an act… |
| [updateFreelancerAvailability](updateFreelancerAvailability.md) | Update freelancer's availability given its id and userId |
| [updateFreelancerEmploymentRecord](updateFreelancerEmploymentRecord.md) | Update freelancer's employment record given its id (userId is taken from the context) |
| [updateFreelancerOtherExperience](updateFreelancerOtherExperience.md) | Update otherExperience for the freelancer given its id (userId is taken from the context) |
| [updateOrganization](updateOrganization.md) | Update organization data |
| [updateRoomStoryV2](updateRoomStoryV2.md) | Updates an existing message or story in a room |
| [updateRoomV2](updateRoomV2.md) | Updates an existing room and returns the updated room |
| [updateTeamActivity](updateTeamActivity.md) | Update activity at team level. A user needs to have hiring manager privileges within the team in order to crea… |
| [updateWorkflowTask](updateWorkflowTask.md) | Updates the status of the individual task associated with the workflowId and taskId |
| [acceptVendorInvitation](acceptVendorInvitation.md) | Accepts a vendor invitation and creates a proposal |
| [createContractProposal](createContractProposal.md) | Create (submit) a contract proposal. Vendor (freelancer or agency manager) operation. |
| [createDirectUploadLinkForJPAttachment](createDirectUploadLinkForJPAttachment.md) | Create a direct link for Jop Posting attachment |
| [createJobProposal](createJobProposal.md) | Create a new proposal using the new flow |
| [savePersonJob](savePersonJob.md) | Saves job for the current person. |
| [submitContractMilestone](submitContractMilestone.md) | Submit a contract milestone for review/approval |
| [withdrawContractProposal](withdrawContractProposal.md) | Withdraw a contract proposal. Vendor (freelancer or agency manager) operation. |

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#group-Operations-Mutations" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [jobPubDetails](../queries/jobPubDetails.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [addJobPostingTag](addJobPostingTag.md) ➡️
