/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCampaign = /* GraphQL */ `
  query GetCampaign($id: ID!) {
    getCampaign(id: $id) {
      id
      name
      description
      stories {
        items {
          id
          campaignId
          name
          width
          height
          purpose
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listCampaigns = /* GraphQL */ `
  query ListCampaigns(
    $filter: ModelCampaignFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCampaigns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        stories {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getWidget = /* GraphQL */ `
  query GetWidget($id: ID!) {
    getWidget(id: $id) {
      id
      pageId
      name
      category
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listWidgets = /* GraphQL */ `
  query ListWidgets(
    $filter: ModelWidgetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWidgets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        pageId
        name
        category
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPage = /* GraphQL */ `
  query GetPage($id: ID!) {
    getPage(id: $id) {
      id
      storyId
      backgroundType
      backgroundColor
      backgroundSource
      widgets {
        items {
          id
          pageId
          name
          category
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPages = /* GraphQL */ `
  query ListPages(
    $filter: ModelPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        storyId
        backgroundType
        backgroundColor
        backgroundSource
        widgets {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getStory = /* GraphQL */ `
  query GetStory($id: ID!) {
    getStory(id: $id) {
      id
      campaignId
      name
      width
      height
      purpose
      pages {
        items {
          id
          storyId
          backgroundType
          backgroundColor
          backgroundSource
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listStorys = /* GraphQL */ `
  query ListStorys(
    $filter: ModelStoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        campaignId
        name
        width
        height
        purpose
        pages {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
