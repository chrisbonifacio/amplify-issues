/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBusiness = /* GraphQL */ `
  mutation CreateBusiness(
    $input: CreateBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    createBusiness(input: $input, condition: $condition) {
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
export const updateBusiness = /* GraphQL */ `
  mutation UpdateBusiness(
    $input: UpdateBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    updateBusiness(input: $input, condition: $condition) {
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
export const deleteBusiness = /* GraphQL */ `
  mutation DeleteBusiness(
    $input: DeleteBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    deleteBusiness(input: $input, condition: $condition) {
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
