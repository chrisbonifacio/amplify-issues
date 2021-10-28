/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCampaign = /* GraphQL */ `
  subscription OnCreateCampaign($owner: String) {
    onCreateCampaign(owner: $owner) {
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
export const onUpdateCampaign = /* GraphQL */ `
  subscription OnUpdateCampaign($owner: String) {
    onUpdateCampaign(owner: $owner) {
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
export const onDeleteCampaign = /* GraphQL */ `
  subscription OnDeleteCampaign($owner: String) {
    onDeleteCampaign(owner: $owner) {
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
export const onCreateWidget = /* GraphQL */ `
  subscription OnCreateWidget($owner: String) {
    onCreateWidget(owner: $owner) {
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
export const onUpdateWidget = /* GraphQL */ `
  subscription OnUpdateWidget($owner: String) {
    onUpdateWidget(owner: $owner) {
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
export const onDeleteWidget = /* GraphQL */ `
  subscription OnDeleteWidget($owner: String) {
    onDeleteWidget(owner: $owner) {
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
export const onCreatePage = /* GraphQL */ `
  subscription OnCreatePage($owner: String) {
    onCreatePage(owner: $owner) {
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
export const onUpdatePage = /* GraphQL */ `
  subscription OnUpdatePage($owner: String) {
    onUpdatePage(owner: $owner) {
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
export const onDeletePage = /* GraphQL */ `
  subscription OnDeletePage($owner: String) {
    onDeletePage(owner: $owner) {
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
export const onCreateStory = /* GraphQL */ `
  subscription OnCreateStory($owner: String) {
    onCreateStory(owner: $owner) {
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
export const onUpdateStory = /* GraphQL */ `
  subscription OnUpdateStory($owner: String) {
    onUpdateStory(owner: $owner) {
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
export const onDeleteStory = /* GraphQL */ `
  subscription OnDeleteStory($owner: String) {
    onDeleteStory(owner: $owner) {
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
