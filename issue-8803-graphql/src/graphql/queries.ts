/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBusiness = /* GraphQL */ `
  query GetBusiness($id: ID!) {
    getBusiness(id: $id) {
      id
      name
      owner
      status
      fulfillmentDelay
      productionMode
      designWorkflowId
      proof {
        url
        email
        verified
        name
        delay
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBusinesses = /* GraphQL */ `
  query ListBusinesses(
    $filter: ModelBusinessFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        owner
        status
        fulfillmentDelay
        productionMode
        designWorkflowId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
