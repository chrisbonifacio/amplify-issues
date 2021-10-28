/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncAthletes = /* GraphQL */ `
  query SyncAthletes(
    $filter: ModelAthleteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAthletes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        firstName
        lastName
        email
        teamID
        phoneNumber
        playerNumber
        playerPosition
        dateOfBirth
        avatar
        active
        emoji
        firstTouchSent
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAthlete = /* GraphQL */ `
  query GetAthlete($id: ID!) {
    getAthlete(id: $id) {
      id
      firstName
      lastName
      email
      teamID
      phoneNumber
      playerNumber
      playerPosition
      dateOfBirth
      avatar
      active
      emoji
      firstTouchSent
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listAthletes = /* GraphQL */ `
  query ListAthletes(
    $filter: ModelAthleteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAthletes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        email
        teamID
        phoneNumber
        playerNumber
        playerPosition
        dateOfBirth
        avatar
        active
        emoji
        firstTouchSent
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
