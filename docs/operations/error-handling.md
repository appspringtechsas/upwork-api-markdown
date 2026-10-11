---
title: "Error handling in GraphQL"
kind: "section"
html_id: "operations-error-handling"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#operations-error-handling"
generated_by: "scripts/convert.mjs"
---


# Error handling in GraphQL

If the Upwork server fails while processing a GraphQL request, the system sends an error array response to the client. It is important to note that errors in GraphQL are handled differently from how we might be used to in ReST. While ReST endpoints return HTTP status codes in the error response, for example, **400 - Bad Request** in case of malformed syntax, GraphQL always returns a **200 - OK** status code, regardless of whether the operation succeeded or failed. Consequently, understanding how to decode error responses in GraphQL is crucial to troubleshooting potential operation failures.

## Decoding error responses

GraphQL error arrays list all the errors that occurred while processing the API request. Additionally, they provide important information that helps you fix the problem or guide you on what to do next. Let’s take a closer look at what’s returned.

- **Message**

  : The error message that helps you understand if the operation succeeded or failed. For example, Validation error of type MissingFieldArgument.
- **Locations**

  : The exact location in the API request query that results in the error. For example, the line and column parameters in the response.
- **Extensions**

  : The type of error. For example, ValidationError.

Here is a sample code snippet of a GraphQL error response in Upwork:

```json
{
  "errors": [
    {
      "message": "Validation error of type MissingFieldArgument: Missing field argument stepUpVerificationId @ 'user/stepUpVerification'",
      "locations": [
        {
          "line": 3,
          "column": 5
        }
      ],
      "extensions": {
        "classification": "ValidationError"
      }
    },
    {
      "message": "Validation error of type SubSelectionRequired: Sub selection required for type UserVerification of field stepUpVerification @ 'user/stepUpVerification'",
      "locations": [
        {
          "line": 3,
          "column": 5
        }
      ],
      "extensions": {
        "classification": "ValidationError"
      }
    }
  ]
}
```

As the generic status code in GraphQL is not intuitive, you must access the body of the error response to further understand the correct status of the operation.

For example, the following API query returned the status code: **200 - OK**. Let's see how the **message**, **locations**, and **extensions** parameters in the body help you understand the status of the API call.

## Exceptions in GraphQL error types

Typically, GraphQL returns the HTTP status code **200** when the API operation fails at the upstream or data provider service layer. For example, if you do not have Oauth2 permissions or scopes to access an endpoint, the system displays the following error response

However, if the API operation fails at the GraphQL layer itself, the system returns the typical 5XX HTTP status codes, such as **500 - Internal Server Error** if the server encounters an unexpected condition that prevents it from fulfilling the request. In these cases, you can rely on the status code to understand if the operation failed or succeeded.

## Sample GraphQL API failure scenarios

When you do not have Oauth2 permissions or scopes to access the endpoint

Query request

:

```json
{
  user {
    id
    nid
    rid
    name
    email
  }
  organization {
    id
    rid
  }
}
```

Error response

:

```json
{
  "errors": [
    {
      "message": "The client or authentication token doesn't have enough oauth2 permissions/scopes to access: [CurrentOrganization.id, CurrentOrganization.rid, CurrentUser.email, CurrentUser.id, CurrentUser.name, CurrentUser.nid, CurrentUser.rid, Query.organization, Query.user]."
    }
  ]
}
```

When you do not specify any value for a required field

Query request

:

```json
{
  user {
    companyFees(organizationId: null, input: { amount: "15" }) {
      amount
      fullAmount
      fees {
        type
        description
        calculationDescription
        rate
        amount
      }
    }
  }
}
```

Error response

:

```json
{
  "errors": [
    {
      "message": "Validation error of type NullValueForNonNullArgument: null value for non-null field argument organizationId @ 'user/companyFees'",
      "locations": [
        {
          "line": 3,
          "column": 5
        }
      ],
      "extensions": {
        "classification": "ValidationError"
      }
    },
    {
      "message": "Validation error of type WrongType: argument 'organizationId' with value 'NullValue{}' must not be null @ 'user/companyFees'",
      "locations": [
        {
          "line": 3,
          "column": 17
        }
      ],
      "extensions": {
        "classification": "ValidationError"
      }
    }
  ]
}
```

When you do not define a parameter

Query request

:

```json
{
  user {
    stepUpVerification
  }
}
```

Error response

:

```json
{
  "errors": [
    {
      "message": "Validation error of type MissingFieldArgument: Missing field argument stepUpVerificationId @ 'user/stepUpVerification'",
      "locations": [
        {
          "line": 3,
          "column": 5
        }
      ],
      "extensions": {
        "classification": "ValidationError"
      }
    },
    {
      "message": "Validation error of type SubSelectionRequired: Sub selection required for type UserVerification of field stepUpVerification @ 'user/stepUpVerification'",
      "locations": [
        {
          "line": 3,
          "column": 5
        }
      ],
      "extensions": {
        "classification": "ValidationError"
      }
    }
  ]
}
```

## Using GraphQL through Upwork SDK

Currently, Upwork supports GraphQL SDKs in the following languages:

- Java
- PHP
- Python 3
- Node JS
- Ruby
- Go

SDKs return the GraphQL error responses similar to APIs and do not handle them any differently.
