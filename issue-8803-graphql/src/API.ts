/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBusinessInput = {
  id?: string | null,
  name: string,
  owner: string,
  status: BusinessStatusType,
  fulfillmentDelay?: number | null,
  productionMode?: boolean | null,
  designWorkflowId?: string | null,
  proof?: ProofConfigInput | null,
};

export enum BusinessStatusType {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}


export type ProofConfigInput = {
  url: string,
  email: string,
  verified: boolean,
  name: string,
  delay: number,
};

export type ModelBusinessConditionInput = {
  name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  status?: ModelBusinessStatusTypeInput | null,
  fulfillmentDelay?: ModelIntInput | null,
  productionMode?: ModelBooleanInput | null,
  designWorkflowId?: ModelIDInput | null,
  and?: Array< ModelBusinessConditionInput | null > | null,
  or?: Array< ModelBusinessConditionInput | null > | null,
  not?: ModelBusinessConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBusinessStatusTypeInput = {
  eq?: BusinessStatusType | null,
  ne?: BusinessStatusType | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Business = {
  __typename: "Business",
  id: string,
  name: string,
  owner: string,
  status: BusinessStatusType,
  fulfillmentDelay?: number | null,
  productionMode?: boolean | null,
  designWorkflowId?: string | null,
  proof?: ProofConfig | null,
  createdAt: string,
  updatedAt: string,
};

export type ProofConfig = {
  __typename: "ProofConfig",
  url: string,
  email: string,
  verified: boolean,
  name: string,
  delay: number,
};

export type UpdateBusinessInput = {
  id: string,
  name?: string | null,
  owner?: string | null,
  status?: BusinessStatusType | null,
  fulfillmentDelay?: number | null,
  productionMode?: boolean | null,
  designWorkflowId?: string | null,
  proof?: ProofConfigInput | null,
};

export type DeleteBusinessInput = {
  id: string,
};

export type ModelBusinessFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  status?: ModelBusinessStatusTypeInput | null,
  fulfillmentDelay?: ModelIntInput | null,
  productionMode?: ModelBooleanInput | null,
  designWorkflowId?: ModelIDInput | null,
  and?: Array< ModelBusinessFilterInput | null > | null,
  or?: Array< ModelBusinessFilterInput | null > | null,
  not?: ModelBusinessFilterInput | null,
};

export type ModelBusinessConnection = {
  __typename: "ModelBusinessConnection",
  items?:  Array<Business | null > | null,
  nextToken?: string | null,
};

export type CreateBusinessMutationVariables = {
  input: CreateBusinessInput,
  condition?: ModelBusinessConditionInput | null,
};

export type CreateBusinessMutation = {
  createBusiness?:  {
    __typename: "Business",
    id: string,
    name: string,
    owner: string,
    status: BusinessStatusType,
    fulfillmentDelay?: number | null,
    productionMode?: boolean | null,
    designWorkflowId?: string | null,
    proof?:  {
      __typename: "ProofConfig",
      url: string,
      email: string,
      verified: boolean,
      name: string,
      delay: number,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBusinessMutationVariables = {
  input: UpdateBusinessInput,
  condition?: ModelBusinessConditionInput | null,
};

export type UpdateBusinessMutation = {
  updateBusiness?:  {
    __typename: "Business",
    id: string,
    name: string,
    owner: string,
    status: BusinessStatusType,
    fulfillmentDelay?: number | null,
    productionMode?: boolean | null,
    designWorkflowId?: string | null,
    proof?:  {
      __typename: "ProofConfig",
      url: string,
      email: string,
      verified: boolean,
      name: string,
      delay: number,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBusinessMutationVariables = {
  input: DeleteBusinessInput,
  condition?: ModelBusinessConditionInput | null,
};

export type DeleteBusinessMutation = {
  deleteBusiness?:  {
    __typename: "Business",
    id: string,
    name: string,
    owner: string,
    status: BusinessStatusType,
    fulfillmentDelay?: number | null,
    productionMode?: boolean | null,
    designWorkflowId?: string | null,
    proof?:  {
      __typename: "ProofConfig",
      url: string,
      email: string,
      verified: boolean,
      name: string,
      delay: number,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBusinessQueryVariables = {
  id: string,
};

export type GetBusinessQuery = {
  getBusiness?:  {
    __typename: "Business",
    id: string,
    name: string,
    owner: string,
    status: BusinessStatusType,
    fulfillmentDelay?: number | null,
    productionMode?: boolean | null,
    designWorkflowId?: string | null,
    proof?:  {
      __typename: "ProofConfig",
      url: string,
      email: string,
      verified: boolean,
      name: string,
      delay: number,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBusinessesQueryVariables = {
  filter?: ModelBusinessFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBusinessesQuery = {
  listBusinesses?:  {
    __typename: "ModelBusinessConnection",
    items?:  Array< {
      __typename: "Business",
      id: string,
      name: string,
      owner: string,
      status: BusinessStatusType,
      fulfillmentDelay?: number | null,
      productionMode?: boolean | null,
      designWorkflowId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBusinessSubscription = {
  onCreateBusiness?:  {
    __typename: "Business",
    id: string,
    name: string,
    owner: string,
    status: BusinessStatusType,
    fulfillmentDelay?: number | null,
    productionMode?: boolean | null,
    designWorkflowId?: string | null,
    proof?:  {
      __typename: "ProofConfig",
      url: string,
      email: string,
      verified: boolean,
      name: string,
      delay: number,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBusinessByIDSubscriptionVariables = {
  id: string,
};

export type OnUpdateBusinessByIDSubscription = {
  onUpdateBusinessByID?:  {
    __typename: "Business",
    id: string,
    name: string,
    owner: string,
    status: BusinessStatusType,
    fulfillmentDelay?: number | null,
    productionMode?: boolean | null,
    designWorkflowId?: string | null,
    proof?:  {
      __typename: "ProofConfig",
      url: string,
      email: string,
      verified: boolean,
      name: string,
      delay: number,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
