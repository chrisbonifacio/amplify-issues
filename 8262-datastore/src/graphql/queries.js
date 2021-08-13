/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProjects = /* GraphQL */ `
  query GetProjects($id: ID!) {
    getProjects(id: $id) {
      id
      name
      tenantId
      freelancers
      childFreelancers
      parentProjectId
      parentClientId
      activeFlag
      createdOn
      updatedOn
    }
  }
`;
export const listProjectss = /* GraphQL */ `
  query ListProjectss(
    $filter: ModelProjectsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        tenantId
        freelancers
        childFreelancers
        parentProjectId
        parentClientId
        activeFlag
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      createdOn
      updatedOn
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
