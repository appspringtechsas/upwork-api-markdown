---
title: "Introduction"
kind: "section"
html_id: "introduction"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#introduction"
generated_by: "scripts/convert.mjs"
---


# Introduction

Integrate Upwork functionalities to your web-based or mobile apps

**Upwork Developers Site** offers you access to our web services to **build** your own applications and to **integrate** our features and workflow to your dashboards, websites and management systems.

Please read [Terms of use](https://www.upwork.com/legal#api) prior to using the Upwork Public API.

Getting started is easy. Check out our [Getting Started](getting-started/preparation.md) page to learn about the core concepts of our GraphQL API, such as supported authentication methods, languages and tools.

This page contains complete API reference of available Queries and Mutations, just use the navigation panel on the left.

Have a question? Visit us at:

- [![logo-helpdesk.png](assets/images/logo-helpdesk.png)](https://support.upwork.com)

  Help Center
- [![logo-stackoverflow.png](assets/images/logo-stackoverflow.png)](https://stackoverflow.com/questions/tagged/upwork-api)

  StackOverflow
- [![logo-github.png](assets/images/logo-github.png)](https://github.com/upwork)

  Github

##### Contact

API Support

##### Terms of Service

[https://www.upwork.com/legal#api](https://www.upwork.com/legal#api)

##### API Endpoints

```
# Endpoint:
https://api.upwork.com/graphql
```

## Terminology

#### Users, clients, freelancers

###### User:

An Upwork account holder. A user can have multiple roles simultaneously: client, freelancer, agency staffing manager, and so on. A user must be a single person and account sharing is not allowed. Others can be added to your company or agency.

###### Freelancer:

A person who can apply to jobs, work, and get paid by clients via Upwork. In API parameters and arguments, sometimes the terms provider and contractor are used to mean freelancer. Those are legacy names for the term.

###### Client:

A person who, as part of a company, can hire Upwork freelancers. In API parameters and arguments, sometimes the term buyer is used to mean client- it’s a synonym.

###### Agency contractor:

There are two types of agency contractors. Exclusive agency contractors can only work on behalf of the agency. The agency controls all their earnings. They cannot control their rates. Non-exclusive agency contractors can work for multiple agencies and/or independently. An agency can only control their agency jobs. Agency contractors can access reports on their worked hours, but not their earnings reports.

#### Companies, teams, agencies

###### Company:

A primary financial entity and organizational unit. Larger companies can request to be divided into multiple teams.

###### Team:

A basic unit of organization. Members of the team can see each other and work on common tasks. Most user permissions are also relative to the team. At the beginning, each company has one dedicated team room, but others can be added later.

###### Agency:

Acts as intermediary between the client and the freelancer. The client still hires a specific person, but the contract is paid to the agency. Agency size and staffing manager involvement varies widely.

#### Job postings, offers and contracts

###### Job Posting:

Description of the work to be done and the application guidelines for freelancers.

###### Offer:

Proposal of contract terms as part of the hiring process. It can be initiated by the client or the freelancer, but it must be agreed upon by both parties.

###### Contract:

The terms and conditions that rule a particular job between a client and a freelancer. Legacy terms: engagement.

###### Fixed-price contract:

Flat-rate contract or payment for milestones. It is not covered by the Upwork Guarantee.

###### Hourly contract:

Contract billed per hour based on the Work diary registry. It is covered by the Upwork Guarantee.

###### Charge amount:

The amount of money that is deducted from the company’s financial account (Upwork fee included).

###### Amount:

The amount of money that a freelancer or an agency receives as payment (Upwork fee not included).

###### Work diary:

The Work diary acts as a visual time card. It is the basis for Upwork’s automated weekly billing system. It shows clients hours worked and work-in-progress screenshots.

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#introduction" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [Docs index](README.md)   ·   **Next:** [getting-started index](getting-started/README.md) ➡️
