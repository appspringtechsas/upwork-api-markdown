---
title: "Queries"
kind: "index"
generated_by: "scripts/convert.mjs"
---


# Queries

GraphQL query operations of the Upwork API, grouped by domain. ⚠️ marks deprecated operations.

## Other

| Query | Description |
|---|---|
| [undefined](jobPosting.md) | Get job posting by its ID |
| [undefined](marketplaceJobPosting.md) | Get marketplace job posting by its ID |
| [undefined](marketplaceJobPostings.md) ⚠️ |  |
| [undefined](marketplaceJobPostingsContents.md) | Get marketplace job postings content by ID |
| [undefined](countries.md) | List of countries. Currently no filtering is available |
| [undefined](languages.md) | Get the list of languages |
| [undefined](reasons.md) | Reasons for some actions. Examples - declining invitation, ending contract, withdrawing offer |
| [undefined](regions.md) | Get the list of regions |
| [undefined](requestMetadata.md) | Information about request - whether it is an internal requests, in specific mode, etc |
| [undefined](timeZones.md) | List of all availabe time zones |
| [undefined](visitor.md) | Visitor details |
| [undefined](contract.md) ⚠️ | Fetch contract information by ID. Note: The provided 'id' corresponds to the id of the contract term in the Co… |
| [undefined](contractByTerm.md) | Get contract data by term id |
| [undefined](contractDetails.md) | Get contract data by contract id. |
| [undefined](contractList.md) | Get contract details list by contract ids |
| [undefined](contractProposal.md) | Fetch contract proposal information by contract proposal ID. |
| [undefined](contractTerm.md) | Get contract and single term data |
| [undefined](customFields.md) | Custom fields information |
| [undefined](offer.md) | Returns offer for the given id |
| [undefined](offersByAttribute.md) | Get offers by search attribute and id. |
| [undefined](offersByAttributes.md) | Get modernized offers by search for multiple attributes ids. |
| [undefined](vendorContracts.md) | Get list of contracts associated with a specific vendor |
| [undefined](ontologyCategories.md) | Fetch all enabled categories/subcategories/services |
| [undefined](ontologyElementsSearchByPrefLabel.md) | Allows search of elements by prefLabel and return the elements that have provided string in prefLabel, at star… |
| [undefined](ontologyEntities.md) | Lookup entities by IDs |
| [undefined](ontologyEntitiesFiltered.md) | Lookup entities by pref label and status, currently this field supports only taxonomyLevel=SERVICE E.g support… |
| [undefined](ontologyEntity.md) | Fetch entity by ID |
| [undefined](ontologyEntitySearchRecords.md) | Search ontology entities by ontoloyIds ontologyId is consistent accross all environments as opposed to UID whi… |
| [undefined](ontologyOccupationsCategoriesServices.md) | Searches occupations categories services by list of category Uids and return the list of categories and a map … |
| [undefined](ontologySkills.md) | Get the list of skills paginated with limit and offset |
| [undefined](clientInvitation.md) | Returns client invitation for a given invitation Id |
| [undefined](clientInvitationsActive.md) | Returns client active invitations for a given job posting |
| [undefined](proposalMetadata.md) | Metadata for proposals |
| [undefined](vendorProposal.md) | Vendor proposal by ID |
| [undefined](vendorProposals.md) | List of vendor proposals based on filters like job posting ids, vendor id, etc. |
| [undefined](clientProposal.md) | Client proposal by ID |
| [undefined](clientProposals.md) | Search client proposal |
| [undefined](contractTimeReport.md) |  |
| [undefined](timeReport.md) ⚠️ | Get the time report details for the given time range and a given organization |
| [undefined](transactionHistory.md) | Returns some total data about the entire set of transactions. |
| [undefined](freelancerProfileSearchRecords.md) | Search freelancer profiles based on various filters |
| [undefined](marketplaceJobPostingsSearch.md) | Search Marketplace Jobs and get their relevant details searchType determines the context and method of the job… |
| [undefined](publicMarketplaceJobPostingsSearch.md) | Public job postings in the marketplace |
| [undefined](search.md) | Universal search |
| [undefined](talentCloudTasks.md) ⚠️ | List of task overviews for specified talent clouds |
| [undefined](talentPortfolioProjects.md) | Loads profile projects by filter parameters |
| [undefined](talentProfile.md) | Primary or specialized profile can be retrieved. |
| [undefined](talentProfileByProfileKey.md) | Primary profile by profile key |
| [undefined](talentProfiles.md) | Loads general profile by personId list and profileIds |
| [undefined](talentSpecializedProfile.md) | Primary or specialized profile can be retrieved. |
| [undefined](talentSpecializedProfiles.md) | Primary or specialized profile can be retrieved. |
| [undefined](talentWorkHistory.md) | Returns the work history for a talent including contracts and feedback |
| [undefined](company.md) | Get company info |
| [undefined](companySelector.md) | Company selector provides information on companies that user can select |
| [undefined](contractRoom.md) | Returns the interview room associated with the given contractId |
| [undefined](freelancerProfileByProfileKey.md) | Retrieve freelancer profile by the freelancer profile key(ciphertext) |
| [undefined](offerRoom.md) | Returns room associated with the given offerId |
| [undefined](oneOnOneRoom.md) | Returns one-on-one room between the current user and specified user within an organization |
| [undefined](organization.md) | Current organization |
| [undefined](profileActivityMetrics.md) | Returns profile activity metrics for the authenticated freelancer, including profile views, invitations, and p… |
| [undefined](profileActivityMetricsAvailability.md) | Returns the available date ranges for each profile activity metric type for the authenticated freelancer. |
| [undefined](profileActivityMetricsLastUpdated.md) | Returns the last updated timestamp for the requested profile activity metrics. |
| [undefined](proposalRoom.md) | Returns room associated with a vendor proposal |
| [undefined](publicRooms.md) | Get public rooms inside an organization |
| [undefined](room.md) | Details of a room |
| [undefined](roomList.md) | List of rooms based on the given filter condition |
| [undefined](roomStories.md) | Returns stories in the room |
| [undefined](roomStory.md) | Returns a particular story from a room |
| [undefined](snapshotsByContractId.md) | List all Snapshots for given contract ID and particular timestamp. timestamp are in (Unix Epoch seconds) |
| [undefined](user.md) | Current user |
| [undefined](workDays.md) | list of working days for a contractId and a given time range |
| [undefined](workDiaryContract.md) | WorkDiary information with screenshot urls for a particular contract and a particular date |
| [undefined](accountAuditRecord.md) | Audit information of the account management action |
| [undefined](staffsByPersonId.md) | Returns staff memberships for a given person identifier |
| [undefined](teamActivities.md) | Get a flat list (with no company/user description) of all activities under the specified team. |
| [undefined](userDetails.md) | Retrieves the user details based on their unique identifier. |
| [undefined](userIdsByEmail.md) | Returns a list of user identifiers matching the provided email address |
| [undefined](workDiaryCompany.md) | WorkDiary information with screenshot urls for a particular company and a particular date |
| [undefined](workflowView.md) | Workflow encapsulates the detailed sequence of tasks or business activities needed to complete a business proc… |
| [undefined](accountingEntity.md) | Get the Accounting Entity of the current user from their organization uid |
| [undefined](bidsForJob.md) | Retrieves top 4 bids for the specific job post. |
| [undefined](clientsWorkHistory.md) | Fetch client's work history |
| [undefined](connectsSummary.md) | Fetch connects summary |
| [undefined](connectUsageHistory.md) | Returns the connects usage hostory for the current user |
| [undefined](contractProposalsByAgency.md) | Get contract proposal by contractorId and teamId |
| [undefined](contractProposalsByClientOrg.md) | Get contract proposals by client organization id |
| [undefined](contractProposalsByFreelancer.md) | Get contract proposals by freelancer id |
| [undefined](jobPostSkillSearch.md) | Search skills for job post flows by prefLabel, optionally boosting matches that are required by the given occu… |
| [undefined](jobPubDetails.md) | Fetch public job details including client info, opening details, and qualifications |
