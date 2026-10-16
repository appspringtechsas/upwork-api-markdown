---
title: "Queries"
kind: "index"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#group-Operations-Queries"
generated_by: "scripts/convert.mjs"
---


# Queries

GraphQL query operations of the Upwork API, grouped by domain. ⚠️ marks deprecated operations.

## Other

| Query | Description |
|---|---|
| [jobPosting](jobPosting.md) | Get job posting by its ID |
| [marketplaceJobPosting](marketplaceJobPosting.md) | Get marketplace job posting by its ID |
| [marketplaceJobPostings](marketplaceJobPostings.md) ⚠️ |  |
| [marketplaceJobPostingsContents](marketplaceJobPostingsContents.md) | Get marketplace job postings content by ID |
| [countries](countries.md) | List of countries. Currently no filtering is available |
| [languages](languages.md) | Get the list of languages |
| [reasons](reasons.md) | Reasons for some actions. Examples - declining invitation, ending contract, withdrawing offer |
| [regions](regions.md) | Get the list of regions |
| [requestMetadata](requestMetadata.md) | Information about request - whether it is an internal requests, in specific mode, etc |
| [timeZones](timeZones.md) | List of all availabe time zones |
| [visitor](visitor.md) | Visitor details |
| [contract](contract.md) ⚠️ | Fetch contract information by ID. Note: The provided 'id' corresponds to the id of the contract term in the Co… |
| [contractByTerm](contractByTerm.md) | Get contract data by term id |
| [contractDetails](contractDetails.md) | Get contract data by contract id. |
| [contractList](contractList.md) | Get contract details list by contract ids |
| [contractProposal](contractProposal.md) | Fetch contract proposal information by contract proposal ID. |
| [contractTerm](contractTerm.md) | Get contract and single term data |
| [customFields](customFields.md) | Custom fields information |
| [offer](offer.md) | Returns offer for the given id |
| [offersByAttribute](offersByAttribute.md) | Get offers by search attribute and id. |
| [offersByAttributes](offersByAttributes.md) | Get modernized offers by search for multiple attributes ids. |
| [vendorContracts](vendorContracts.md) | Get list of contracts associated with a specific vendor |
| [ontologyCategories](ontologyCategories.md) | Fetch all enabled categories/subcategories/services |
| [ontologyElementsSearchByPrefLabel](ontologyElementsSearchByPrefLabel.md) | Allows search of elements by prefLabel and return the elements that have provided string in prefLabel, at star… |
| [ontologyEntities](ontologyEntities.md) | Lookup entities by IDs |
| [ontologyEntitiesFiltered](ontologyEntitiesFiltered.md) | Lookup entities by pref label and status, currently this field supports only taxonomyLevel=SERVICE E.g support… |
| [ontologyEntity](ontologyEntity.md) | Fetch entity by ID |
| [ontologyEntitySearchRecords](ontologyEntitySearchRecords.md) | Search ontology entities by ontoloyIds ontologyId is consistent accross all environments as opposed to UID whi… |
| [ontologyOccupationsCategoriesServices](ontologyOccupationsCategoriesServices.md) | Searches occupations categories services by list of category Uids and return the list of categories and a map … |
| [ontologySkills](ontologySkills.md) | Get the list of skills paginated with limit and offset |
| [clientInvitation](clientInvitation.md) | Returns client invitation for a given invitation Id |
| [clientInvitationsActive](clientInvitationsActive.md) | Returns client active invitations for a given job posting |
| [proposalMetadata](proposalMetadata.md) | Metadata for proposals |
| [vendorProposal](vendorProposal.md) | Vendor proposal by ID |
| [vendorProposals](vendorProposals.md) | List of vendor proposals based on filters like job posting ids, vendor id, etc. |
| [clientProposal](clientProposal.md) | Client proposal by ID |
| [clientProposals](clientProposals.md) | Search client proposal |
| [contractTimeReport](contractTimeReport.md) |  |
| [timeReport](timeReport.md) ⚠️ | Get the time report details for the given time range and a given organization |
| [transactionHistory](transactionHistory.md) | Returns some total data about the entire set of transactions. |
| [freelancerProfileSearchRecords](freelancerProfileSearchRecords.md) | Search freelancer profiles based on various filters |
| [marketplaceJobPostingsSearch](marketplaceJobPostingsSearch.md) | Search Marketplace Jobs and get their relevant details searchType determines the context and method of the job… |
| [publicMarketplaceJobPostingsSearch](publicMarketplaceJobPostingsSearch.md) | Public job postings in the marketplace |
| [search](search.md) | Universal search |
| [talentCloudTasks](talentCloudTasks.md) ⚠️ | List of task overviews for specified talent clouds |
| [talentPortfolioProjects](talentPortfolioProjects.md) | Loads profile projects by filter parameters |
| [talentProfile](talentProfile.md) | Primary or specialized profile can be retrieved. |
| [talentProfileByProfileKey](talentProfileByProfileKey.md) | Primary profile by profile key |
| [talentProfiles](talentProfiles.md) | Loads general profile by personId list and profileIds |
| [talentSpecializedProfile](talentSpecializedProfile.md) | Primary or specialized profile can be retrieved. |
| [talentSpecializedProfiles](talentSpecializedProfiles.md) | Primary or specialized profile can be retrieved. |
| [talentWorkHistory](talentWorkHistory.md) | Returns the work history for a talent including contracts and feedback |
| [company](company.md) | Get company info |
| [companySelector](companySelector.md) | Company selector provides information on companies that user can select |
| [contractRoom](contractRoom.md) | Returns the interview room associated with the given contractId |
| [freelancerProfileByProfileKey](freelancerProfileByProfileKey.md) | Retrieve freelancer profile by the freelancer profile key(ciphertext) |
| [offerRoom](offerRoom.md) | Returns room associated with the given offerId |
| [oneOnOneRoom](oneOnOneRoom.md) | Returns one-on-one room between the current user and specified user within an organization |
| [organization](organization.md) | Current organization |
| [profileActivityMetrics](profileActivityMetrics.md) | Returns profile activity metrics for the authenticated freelancer, including profile views, invitations, and p… |
| [profileActivityMetricsAvailability](profileActivityMetricsAvailability.md) | Returns the available date ranges for each profile activity metric type for the authenticated freelancer. |
| [profileActivityMetricsLastUpdated](profileActivityMetricsLastUpdated.md) | Returns the last updated timestamp for the requested profile activity metrics. |
| [proposalRoom](proposalRoom.md) | Returns room associated with a vendor proposal |
| [publicRooms](publicRooms.md) | Get public rooms inside an organization |
| [room](room.md) | Details of a room |
| [roomList](roomList.md) | List of rooms based on the given filter condition |
| [roomStories](roomStories.md) | Returns stories in the room |
| [roomStory](roomStory.md) | Returns a particular story from a room |
| [snapshotsByContractId](snapshotsByContractId.md) | List all Snapshots for given contract ID and particular timestamp. timestamp are in (Unix Epoch seconds) |
| [user](user.md) | Current user |
| [workDays](workDays.md) | list of working days for a contractId and a given time range |
| [workDiaryContract](workDiaryContract.md) | WorkDiary information with screenshot urls for a particular contract and a particular date |
| [accountAuditRecord](accountAuditRecord.md) | Audit information of the account management action |
| [staffsByPersonId](staffsByPersonId.md) | Returns staff memberships for a given person identifier |
| [teamActivities](teamActivities.md) | Get a flat list (with no company/user description) of all activities under the specified team. |
| [userDetails](userDetails.md) | Retrieves the user details based on their unique identifier. |
| [userIdsByEmail](userIdsByEmail.md) | Returns a list of user identifiers matching the provided email address |
| [workDiaryCompany](workDiaryCompany.md) | WorkDiary information with screenshot urls for a particular company and a particular date |
| [workflowView](workflowView.md) | Workflow encapsulates the detailed sequence of tasks or business activities needed to complete a business proc… |
| [accountingEntity](accountingEntity.md) | Get the Accounting Entity of the current user from their organization uid |
| [bidsForJob](bidsForJob.md) | Retrieves top 4 bids for the specific job post. |
| [clientsWorkHistory](clientsWorkHistory.md) | Fetch client's work history |
| [connectsSummary](connectsSummary.md) | Fetch connects summary |
| [connectUsageHistory](connectUsageHistory.md) | Returns the connects usage hostory for the current user |
| [contractProposalsByAgency](contractProposalsByAgency.md) | Get contract proposal by contractorId and teamId |
| [contractProposalsByClientOrg](contractProposalsByClientOrg.md) | Get contract proposals by client organization id |
| [contractProposalsByFreelancer](contractProposalsByFreelancer.md) | Get contract proposals by freelancer id |
| [jobPostSkillSearch](jobPostSkillSearch.md) | Search skills for job post flows by prefLabel, optionally boosting matches that are required by the given occu… |
| [jobPubDetails](jobPubDetails.md) | Fetch public job details including client info, opening details, and qualifications |

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#group-Operations-Queries" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [subscriptions](../operations/subscriptions.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [jobPosting](jobPosting.md) ➡️
