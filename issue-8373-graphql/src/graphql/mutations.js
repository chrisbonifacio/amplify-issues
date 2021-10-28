/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCampaign = /* GraphQL */ `
  mutation CreateCampaign(
    $input: CreateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    createCampaign(input: $input, condition: $condition) {
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
export const updateCampaign = /* GraphQL */ `
  mutation UpdateCampaign(
    $input: UpdateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    updateCampaign(input: $input, condition: $condition) {
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
export const deleteCampaign = /* GraphQL */ `
  mutation DeleteCampaign(
    $input: DeleteCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    deleteCampaign(input: $input, condition: $condition) {
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
export const createWidget = /* GraphQL */ `
  mutation CreateWidget(
    $input: CreateWidgetInput!
    $condition: ModelWidgetConditionInput
  ) {
    createWidget(input: $input, condition: $condition) {
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
export const updateWidget = /* GraphQL */ `
  mutation UpdateWidget(
    $input: UpdateWidgetInput!
    $condition: ModelWidgetConditionInput
  ) {
    updateWidget(input: $input, condition: $condition) {
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
export const deleteWidget = /* GraphQL */ `
  mutation DeleteWidget(
    $input: DeleteWidgetInput!
    $condition: ModelWidgetConditionInput
  ) {
    deleteWidget(input: $input, condition: $condition) {
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
export const createPage = /* GraphQL */ `
  mutation CreatePage(
    $input: CreatePageInput!
    $condition: ModelPageConditionInput
  ) {
    createPage(input: $input, condition: $condition) {
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
export const updatePage = /* GraphQL */ `
  mutation UpdatePage(
    $input: UpdatePageInput!
    $condition: ModelPageConditionInput
  ) {
    updatePage(input: $input, condition: $condition) {
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
export const deletePage = /* GraphQL */ `
  mutation DeletePage(
    $input: DeletePageInput!
    $condition: ModelPageConditionInput
  ) {
    deletePage(input: $input, condition: $condition) {
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
export const createStory = /* GraphQL */ `
  mutation CreateStory(
    $input: CreateStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    createStory(input: $input, condition: $condition) {
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
export const updateStory = /* GraphQL */ `
  mutation UpdateStory(
    $input: UpdateStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    updateStory(input: $input, condition: $condition) {
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
export const deleteStory = /* GraphQL */ `
  mutation DeleteStory(
    $input: DeleteStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    deleteStory(input: $input, condition: $condition) {
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
