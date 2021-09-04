/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBusiness = /* GraphQL */ `
  subscription OnCreateBusiness {
    onCreateBusiness {
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
export const onUpdateBusinessByID = /* GraphQL */ `
  subscription OnUpdateBusinessByID($id: ID!) {
    onUpdateBusinessByID(id: $id) {
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
