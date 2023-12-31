/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateVoteInput = {
  id?: string | null,
  dareID: string,
  votee: string,
};

export type ModelVoteConditionInput = {
  dareID?: ModelIDInput | null,
  votee?: ModelIDInput | null,
  and?: Array< ModelVoteConditionInput | null > | null,
  or?: Array< ModelVoteConditionInput | null > | null,
  not?: ModelVoteConditionInput | null,
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

export type Vote = {
  __typename: "Vote",
  id: string,
  voters?: ModelUserVoteConnection | null,
  dareID: string,
  votee: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelUserVoteConnection = {
  __typename: "ModelUserVoteConnection",
  items:  Array<UserVote | null >,
  nextToken?: string | null,
};

export type UserVote = {
  __typename: "UserVote",
  id: string,
  voteId: string,
  userId: string,
  vote: Vote,
  user: User,
  createdAt: string,
  updatedAt: string,
};

export type User = {
  __typename: "User",
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  profilePicKey?: string | null,
  phoneNumber?: string | null,
  email: string,
  groupID?: string | null,
  votesReceived?: ModelVoteConnection | null,
  votesGiven?: ModelUserVoteConnection | null,
  hasSignedUp?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelVoteConnection = {
  __typename: "ModelVoteConnection",
  items:  Array<Vote | null >,
  nextToken?: string | null,
};

export type UpdateVoteInput = {
  id: string,
  dareID?: string | null,
  votee?: string | null,
};

export type DeleteVoteInput = {
  id: string,
};

export type CreateDareInput = {
  id?: string | null,
  description?: string | null,
  emoji?: string | null,
};

export type ModelDareConditionInput = {
  description?: ModelStringInput | null,
  emoji?: ModelStringInput | null,
  and?: Array< ModelDareConditionInput | null > | null,
  or?: Array< ModelDareConditionInput | null > | null,
  not?: ModelDareConditionInput | null,
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

export type Dare = {
  __typename: "Dare",
  id: string,
  description?: string | null,
  emoji?: string | null,
  Votes?: ModelVoteConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateDareInput = {
  id: string,
  description?: string | null,
  emoji?: string | null,
};

export type DeleteDareInput = {
  id: string,
};

export type CreateGroupInput = {
  id?: string | null,
  description?: string | null,
};

export type ModelGroupConditionInput = {
  description?: ModelStringInput | null,
  and?: Array< ModelGroupConditionInput | null > | null,
  or?: Array< ModelGroupConditionInput | null > | null,
  not?: ModelGroupConditionInput | null,
};

export type Group = {
  __typename: "Group",
  id: string,
  description?: string | null,
  Users?: ModelUserConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type UpdateGroupInput = {
  id: string,
  description?: string | null,
};

export type DeleteGroupInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  profilePicKey?: string | null,
  phoneNumber?: string | null,
  email: string,
  groupID?: string | null,
  hasSignedUp?: boolean | null,
};

export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  profilePicKey?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  email?: ModelStringInput | null,
  groupID?: ModelIDInput | null,
  hasSignedUp?: ModelBooleanInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateUserInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  profilePicKey?: string | null,
  phoneNumber?: string | null,
  email?: string | null,
  groupID?: string | null,
  hasSignedUp?: boolean | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateUserVoteInput = {
  id?: string | null,
  voteId: string,
  userId: string,
};

export type ModelUserVoteConditionInput = {
  voteId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelUserVoteConditionInput | null > | null,
  or?: Array< ModelUserVoteConditionInput | null > | null,
  not?: ModelUserVoteConditionInput | null,
};

export type UpdateUserVoteInput = {
  id: string,
  voteId?: string | null,
  userId?: string | null,
};

export type DeleteUserVoteInput = {
  id: string,
};

export type ModelVoteFilterInput = {
  id?: ModelIDInput | null,
  dareID?: ModelIDInput | null,
  votee?: ModelIDInput | null,
  and?: Array< ModelVoteFilterInput | null > | null,
  or?: Array< ModelVoteFilterInput | null > | null,
  not?: ModelVoteFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelDareFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  emoji?: ModelStringInput | null,
  and?: Array< ModelDareFilterInput | null > | null,
  or?: Array< ModelDareFilterInput | null > | null,
  not?: ModelDareFilterInput | null,
};

export type ModelDareConnection = {
  __typename: "ModelDareConnection",
  items:  Array<Dare | null >,
  nextToken?: string | null,
};

export type SearchableDareFilterInput = {
  id?: SearchableIDFilterInput | null,
  description?: SearchableStringFilterInput | null,
  emoji?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableDareFilterInput | null > | null,
  or?: Array< SearchableDareFilterInput | null > | null,
  not?: SearchableDareFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableDareSortInput = {
  field?: SearchableDareSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableDareSortableFields {
  id = "id",
  description = "description",
  emoji = "emoji",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableDareAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableDareAggregateField,
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
}


export enum SearchableDareAggregateField {
  id = "id",
  description = "description",
  emoji = "emoji",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableDareConnection = {
  __typename: "SearchableDareConnection",
  items:  Array<Dare | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult",
  name: string,
  result?: SearchableAggregateGenericResult | null,
};

export type SearchableAggregateGenericResult = SearchableAggregateScalarResult | SearchableAggregateBucketResult


export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult",
  value: number,
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult",
  buckets?:  Array<SearchableAggregateBucketResultItem | null > | null,
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem",
  key: string,
  doc_count: number,
};

export type ModelGroupFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelGroupFilterInput | null > | null,
  or?: Array< ModelGroupFilterInput | null > | null,
  not?: ModelGroupFilterInput | null,
};

export type ModelGroupConnection = {
  __typename: "ModelGroupConnection",
  items:  Array<Group | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  profilePicKey?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  email?: ModelStringInput | null,
  groupID?: ModelIDInput | null,
  hasSignedUp?: ModelBooleanInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type SearchableUserFilterInput = {
  id?: SearchableIDFilterInput | null,
  firstName?: SearchableStringFilterInput | null,
  lastName?: SearchableStringFilterInput | null,
  profilePicKey?: SearchableStringFilterInput | null,
  phoneNumber?: SearchableStringFilterInput | null,
  email?: SearchableStringFilterInput | null,
  groupID?: SearchableIDFilterInput | null,
  hasSignedUp?: SearchableBooleanFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableUserFilterInput | null > | null,
  or?: Array< SearchableUserFilterInput | null > | null,
  not?: SearchableUserFilterInput | null,
};

export type SearchableBooleanFilterInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type SearchableUserSortInput = {
  field?: SearchableUserSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableUserSortableFields {
  id = "id",
  firstName = "firstName",
  lastName = "lastName",
  profilePicKey = "profilePicKey",
  phoneNumber = "phoneNumber",
  email = "email",
  groupID = "groupID",
  hasSignedUp = "hasSignedUp",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableUserAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableUserAggregateField,
};

export enum SearchableUserAggregateField {
  id = "id",
  firstName = "firstName",
  lastName = "lastName",
  profilePicKey = "profilePicKey",
  phoneNumber = "phoneNumber",
  email = "email",
  groupID = "groupID",
  hasSignedUp = "hasSignedUp",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableUserConnection = {
  __typename: "SearchableUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type ModelUserVoteFilterInput = {
  id?: ModelIDInput | null,
  voteId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelUserVoteFilterInput | null > | null,
  or?: Array< ModelUserVoteFilterInput | null > | null,
  not?: ModelUserVoteFilterInput | null,
};

export type ModelSubscriptionVoteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  dareID?: ModelSubscriptionIDInput | null,
  votee?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionVoteFilterInput | null > | null,
  or?: Array< ModelSubscriptionVoteFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionDareFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  emoji?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDareFilterInput | null > | null,
  or?: Array< ModelSubscriptionDareFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionGroupFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGroupFilterInput | null > | null,
  or?: Array< ModelSubscriptionGroupFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  profilePicKey?: ModelSubscriptionStringInput | null,
  phoneNumber?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  groupID?: ModelSubscriptionIDInput | null,
  hasSignedUp?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionUserVoteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  voteId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserVoteFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserVoteFilterInput | null > | null,
};

export type CreateVoteMutationVariables = {
  input: CreateVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type CreateVoteMutation = {
  createVote?:  {
    __typename: "Vote",
    id: string,
    voters?:  {
      __typename: "ModelUserVoteConnection",
      items:  Array< {
        __typename: "UserVote",
        id: string,
        voteId: string,
        userId: string,
        vote:  {
          __typename: "Vote",
          id: string,
          voters?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          dareID: string,
          votee: string,
          createdAt: string,
          updatedAt: string,
        },
        user:  {
          __typename: "User",
          id: string,
          firstName?: string | null,
          lastName?: string | null,
          profilePicKey?: string | null,
          phoneNumber?: string | null,
          email: string,
          groupID?: string | null,
          votesReceived?:  {
            __typename: "ModelVoteConnection",
            items:  Array< {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          votesGiven?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          hasSignedUp?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    dareID: string,
    votee: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateVoteMutationVariables = {
  input: UpdateVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type UpdateVoteMutation = {
  updateVote?:  {
    __typename: "Vote",
    id: string,
    voters?:  {
      __typename: "ModelUserVoteConnection",
      items:  Array< {
        __typename: "UserVote",
        id: string,
        voteId: string,
        userId: string,
        vote:  {
          __typename: "Vote",
          id: string,
          voters?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          dareID: string,
          votee: string,
          createdAt: string,
          updatedAt: string,
        },
        user:  {
          __typename: "User",
          id: string,
          firstName?: string | null,
          lastName?: string | null,
          profilePicKey?: string | null,
          phoneNumber?: string | null,
          email: string,
          groupID?: string | null,
          votesReceived?:  {
            __typename: "ModelVoteConnection",
            items:  Array< {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          votesGiven?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          hasSignedUp?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    dareID: string,
    votee: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteVoteMutationVariables = {
  input: DeleteVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type DeleteVoteMutation = {
  deleteVote?:  {
    __typename: "Vote",
    id: string,
    voters?:  {
      __typename: "ModelUserVoteConnection",
      items:  Array< {
        __typename: "UserVote",
        id: string,
        voteId: string,
        userId: string,
        vote:  {
          __typename: "Vote",
          id: string,
          voters?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          dareID: string,
          votee: string,
          createdAt: string,
          updatedAt: string,
        },
        user:  {
          __typename: "User",
          id: string,
          firstName?: string | null,
          lastName?: string | null,
          profilePicKey?: string | null,
          phoneNumber?: string | null,
          email: string,
          groupID?: string | null,
          votesReceived?:  {
            __typename: "ModelVoteConnection",
            items:  Array< {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          votesGiven?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          hasSignedUp?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    dareID: string,
    votee: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDareMutationVariables = {
  input: CreateDareInput,
  condition?: ModelDareConditionInput | null,
};

export type CreateDareMutation = {
  createDare?:  {
    __typename: "Dare",
    id: string,
    description?: string | null,
    emoji?: string | null,
    Votes?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        voters?:  {
          __typename: "ModelUserVoteConnection",
          items:  Array< {
            __typename: "UserVote",
            id: string,
            voteId: string,
            userId: string,
            vote:  {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            },
            user:  {
              __typename: "User",
              id: string,
              firstName?: string | null,
              lastName?: string | null,
              profilePicKey?: string | null,
              phoneNumber?: string | null,
              email: string,
              groupID?: string | null,
              hasSignedUp?: boolean | null,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        dareID: string,
        votee: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDareMutationVariables = {
  input: UpdateDareInput,
  condition?: ModelDareConditionInput | null,
};

export type UpdateDareMutation = {
  updateDare?:  {
    __typename: "Dare",
    id: string,
    description?: string | null,
    emoji?: string | null,
    Votes?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        voters?:  {
          __typename: "ModelUserVoteConnection",
          items:  Array< {
            __typename: "UserVote",
            id: string,
            voteId: string,
            userId: string,
            vote:  {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            },
            user:  {
              __typename: "User",
              id: string,
              firstName?: string | null,
              lastName?: string | null,
              profilePicKey?: string | null,
              phoneNumber?: string | null,
              email: string,
              groupID?: string | null,
              hasSignedUp?: boolean | null,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        dareID: string,
        votee: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDareMutationVariables = {
  input: DeleteDareInput,
  condition?: ModelDareConditionInput | null,
};

export type DeleteDareMutation = {
  deleteDare?:  {
    __typename: "Dare",
    id: string,
    description?: string | null,
    emoji?: string | null,
    Votes?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        voters?:  {
          __typename: "ModelUserVoteConnection",
          items:  Array< {
            __typename: "UserVote",
            id: string,
            voteId: string,
            userId: string,
            vote:  {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            },
            user:  {
              __typename: "User",
              id: string,
              firstName?: string | null,
              lastName?: string | null,
              profilePicKey?: string | null,
              phoneNumber?: string | null,
              email: string,
              groupID?: string | null,
              hasSignedUp?: boolean | null,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        dareID: string,
        votee: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGroupMutationVariables = {
  input: CreateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type CreateGroupMutation = {
  createGroup?:  {
    __typename: "Group",
    id: string,
    description?: string | null,
    Users?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        profilePicKey?: string | null,
        phoneNumber?: string | null,
        email: string,
        groupID?: string | null,
        votesReceived?:  {
          __typename: "ModelVoteConnection",
          items:  Array< {
            __typename: "Vote",
            id: string,
            voters?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            dareID: string,
            votee: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        votesGiven?:  {
          __typename: "ModelUserVoteConnection",
          items:  Array< {
            __typename: "UserVote",
            id: string,
            voteId: string,
            userId: string,
            vote:  {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            },
            user:  {
              __typename: "User",
              id: string,
              firstName?: string | null,
              lastName?: string | null,
              profilePicKey?: string | null,
              phoneNumber?: string | null,
              email: string,
              groupID?: string | null,
              hasSignedUp?: boolean | null,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        hasSignedUp?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGroupMutationVariables = {
  input: UpdateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type UpdateGroupMutation = {
  updateGroup?:  {
    __typename: "Group",
    id: string,
    description?: string | null,
    Users?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        profilePicKey?: string | null,
        phoneNumber?: string | null,
        email: string,
        groupID?: string | null,
        votesReceived?:  {
          __typename: "ModelVoteConnection",
          items:  Array< {
            __typename: "Vote",
            id: string,
            voters?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            dareID: string,
            votee: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        votesGiven?:  {
          __typename: "ModelUserVoteConnection",
          items:  Array< {
            __typename: "UserVote",
            id: string,
            voteId: string,
            userId: string,
            vote:  {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            },
            user:  {
              __typename: "User",
              id: string,
              firstName?: string | null,
              lastName?: string | null,
              profilePicKey?: string | null,
              phoneNumber?: string | null,
              email: string,
              groupID?: string | null,
              hasSignedUp?: boolean | null,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        hasSignedUp?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGroupMutationVariables = {
  input: DeleteGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type DeleteGroupMutation = {
  deleteGroup?:  {
    __typename: "Group",
    id: string,
    description?: string | null,
    Users?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        profilePicKey?: string | null,
        phoneNumber?: string | null,
        email: string,
        groupID?: string | null,
        votesReceived?:  {
          __typename: "ModelVoteConnection",
          items:  Array< {
            __typename: "Vote",
            id: string,
            voters?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            dareID: string,
            votee: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        votesGiven?:  {
          __typename: "ModelUserVoteConnection",
          items:  Array< {
            __typename: "UserVote",
            id: string,
            voteId: string,
            userId: string,
            vote:  {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            },
            user:  {
              __typename: "User",
              id: string,
              firstName?: string | null,
              lastName?: string | null,
              profilePicKey?: string | null,
              phoneNumber?: string | null,
              email: string,
              groupID?: string | null,
              hasSignedUp?: boolean | null,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        hasSignedUp?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    profilePicKey?: string | null,
    phoneNumber?: string | null,
    email: string,
    groupID?: string | null,
    votesReceived?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        voters?:  {
          __typename: "ModelUserVoteConnection",
          items:  Array< {
            __typename: "UserVote",
            id: string,
            voteId: string,
            userId: string,
            vote:  {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            },
            user:  {
              __typename: "User",
              id: string,
              firstName?: string | null,
              lastName?: string | null,
              profilePicKey?: string | null,
              phoneNumber?: string | null,
              email: string,
              groupID?: string | null,
              hasSignedUp?: boolean | null,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        dareID: string,
        votee: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    votesGiven?:  {
      __typename: "ModelUserVoteConnection",
      items:  Array< {
        __typename: "UserVote",
        id: string,
        voteId: string,
        userId: string,
        vote:  {
          __typename: "Vote",
          id: string,
          voters?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          dareID: string,
          votee: string,
          createdAt: string,
          updatedAt: string,
        },
        user:  {
          __typename: "User",
          id: string,
          firstName?: string | null,
          lastName?: string | null,
          profilePicKey?: string | null,
          phoneNumber?: string | null,
          email: string,
          groupID?: string | null,
          votesReceived?:  {
            __typename: "ModelVoteConnection",
            items:  Array< {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          votesGiven?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          hasSignedUp?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    hasSignedUp?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    profilePicKey?: string | null,
    phoneNumber?: string | null,
    email: string,
    groupID?: string | null,
    votesReceived?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        voters?:  {
          __typename: "ModelUserVoteConnection",
          items:  Array< {
            __typename: "UserVote",
            id: string,
            voteId: string,
            userId: string,
            vote:  {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            },
            user:  {
              __typename: "User",
              id: string,
              firstName?: string | null,
              lastName?: string | null,
              profilePicKey?: string | null,
              phoneNumber?: string | null,
              email: string,
              groupID?: string | null,
              hasSignedUp?: boolean | null,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        dareID: string,
        votee: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    votesGiven?:  {
      __typename: "ModelUserVoteConnection",
      items:  Array< {
        __typename: "UserVote",
        id: string,
        voteId: string,
        userId: string,
        vote:  {
          __typename: "Vote",
          id: string,
          voters?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          dareID: string,
          votee: string,
          createdAt: string,
          updatedAt: string,
        },
        user:  {
          __typename: "User",
          id: string,
          firstName?: string | null,
          lastName?: string | null,
          profilePicKey?: string | null,
          phoneNumber?: string | null,
          email: string,
          groupID?: string | null,
          votesReceived?:  {
            __typename: "ModelVoteConnection",
            items:  Array< {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          votesGiven?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          hasSignedUp?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    hasSignedUp?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    profilePicKey?: string | null,
    phoneNumber?: string | null,
    email: string,
    groupID?: string | null,
    votesReceived?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        voters?:  {
          __typename: "ModelUserVoteConnection",
          items:  Array< {
            __typename: "UserVote",
            id: string,
            voteId: string,
            userId: string,
            vote:  {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            },
            user:  {
              __typename: "User",
              id: string,
              firstName?: string | null,
              lastName?: string | null,
              profilePicKey?: string | null,
              phoneNumber?: string | null,
              email: string,
              groupID?: string | null,
              hasSignedUp?: boolean | null,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        dareID: string,
        votee: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    votesGiven?:  {
      __typename: "ModelUserVoteConnection",
      items:  Array< {
        __typename: "UserVote",
        id: string,
        voteId: string,
        userId: string,
        vote:  {
          __typename: "Vote",
          id: string,
          voters?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          dareID: string,
          votee: string,
          createdAt: string,
          updatedAt: string,
        },
        user:  {
          __typename: "User",
          id: string,
          firstName?: string | null,
          lastName?: string | null,
          profilePicKey?: string | null,
          phoneNumber?: string | null,
          email: string,
          groupID?: string | null,
          votesReceived?:  {
            __typename: "ModelVoteConnection",
            items:  Array< {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          votesGiven?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          hasSignedUp?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    hasSignedUp?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserVoteMutationVariables = {
  input: CreateUserVoteInput,
  condition?: ModelUserVoteConditionInput | null,
};

export type CreateUserVoteMutation = {
  createUserVote?:  {
    __typename: "UserVote",
    id: string,
    voteId: string,
    userId: string,
    vote:  {
      __typename: "Vote",
      id: string,
      voters?:  {
        __typename: "ModelUserVoteConnection",
        items:  Array< {
          __typename: "UserVote",
          id: string,
          voteId: string,
          userId: string,
          vote:  {
            __typename: "Vote",
            id: string,
            voters?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            dareID: string,
            votee: string,
            createdAt: string,
            updatedAt: string,
          },
          user:  {
            __typename: "User",
            id: string,
            firstName?: string | null,
            lastName?: string | null,
            profilePicKey?: string | null,
            phoneNumber?: string | null,
            email: string,
            groupID?: string | null,
            votesReceived?:  {
              __typename: "ModelVoteConnection",
              nextToken?: string | null,
            } | null,
            votesGiven?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            hasSignedUp?: boolean | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      dareID: string,
      votee: string,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      profilePicKey?: string | null,
      phoneNumber?: string | null,
      email: string,
      groupID?: string | null,
      votesReceived?:  {
        __typename: "ModelVoteConnection",
        items:  Array< {
          __typename: "Vote",
          id: string,
          voters?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          dareID: string,
          votee: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      votesGiven?:  {
        __typename: "ModelUserVoteConnection",
        items:  Array< {
          __typename: "UserVote",
          id: string,
          voteId: string,
          userId: string,
          vote:  {
            __typename: "Vote",
            id: string,
            voters?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            dareID: string,
            votee: string,
            createdAt: string,
            updatedAt: string,
          },
          user:  {
            __typename: "User",
            id: string,
            firstName?: string | null,
            lastName?: string | null,
            profilePicKey?: string | null,
            phoneNumber?: string | null,
            email: string,
            groupID?: string | null,
            votesReceived?:  {
              __typename: "ModelVoteConnection",
              nextToken?: string | null,
            } | null,
            votesGiven?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            hasSignedUp?: boolean | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      hasSignedUp?: boolean | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserVoteMutationVariables = {
  input: UpdateUserVoteInput,
  condition?: ModelUserVoteConditionInput | null,
};

export type UpdateUserVoteMutation = {
  updateUserVote?:  {
    __typename: "UserVote",
    id: string,
    voteId: string,
    userId: string,
    vote:  {
      __typename: "Vote",
      id: string,
      voters?:  {
        __typename: "ModelUserVoteConnection",
        items:  Array< {
          __typename: "UserVote",
          id: string,
          voteId: string,
          userId: string,
          vote:  {
            __typename: "Vote",
            id: string,
            voters?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            dareID: string,
            votee: string,
            createdAt: string,
            updatedAt: string,
          },
          user:  {
            __typename: "User",
            id: string,
            firstName?: string | null,
            lastName?: string | null,
            profilePicKey?: string | null,
            phoneNumber?: string | null,
            email: string,
            groupID?: string | null,
            votesReceived?:  {
              __typename: "ModelVoteConnection",
              nextToken?: string | null,
            } | null,
            votesGiven?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            hasSignedUp?: boolean | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      dareID: string,
      votee: string,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      profilePicKey?: string | null,
      phoneNumber?: string | null,
      email: string,
      groupID?: string | null,
      votesReceived?:  {
        __typename: "ModelVoteConnection",
        items:  Array< {
          __typename: "Vote",
          id: string,
          voters?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          dareID: string,
          votee: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      votesGiven?:  {
        __typename: "ModelUserVoteConnection",
        items:  Array< {
          __typename: "UserVote",
          id: string,
          voteId: string,
          userId: string,
          vote:  {
            __typename: "Vote",
            id: string,
            voters?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            dareID: string,
            votee: string,
            createdAt: string,
            updatedAt: string,
          },
          user:  {
            __typename: "User",
            id: string,
            firstName?: string | null,
            lastName?: string | null,
            profilePicKey?: string | null,
            phoneNumber?: string | null,
            email: string,
            groupID?: string | null,
            votesReceived?:  {
              __typename: "ModelVoteConnection",
              nextToken?: string | null,
            } | null,
            votesGiven?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            hasSignedUp?: boolean | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      hasSignedUp?: boolean | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserVoteMutationVariables = {
  input: DeleteUserVoteInput,
  condition?: ModelUserVoteConditionInput | null,
};

export type DeleteUserVoteMutation = {
  deleteUserVote?:  {
    __typename: "UserVote",
    id: string,
    voteId: string,
    userId: string,
    vote:  {
      __typename: "Vote",
      id: string,
      voters?:  {
        __typename: "ModelUserVoteConnection",
        items:  Array< {
          __typename: "UserVote",
          id: string,
          voteId: string,
          userId: string,
          vote:  {
            __typename: "Vote",
            id: string,
            voters?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            dareID: string,
            votee: string,
            createdAt: string,
            updatedAt: string,
          },
          user:  {
            __typename: "User",
            id: string,
            firstName?: string | null,
            lastName?: string | null,
            profilePicKey?: string | null,
            phoneNumber?: string | null,
            email: string,
            groupID?: string | null,
            votesReceived?:  {
              __typename: "ModelVoteConnection",
              nextToken?: string | null,
            } | null,
            votesGiven?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            hasSignedUp?: boolean | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      dareID: string,
      votee: string,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      profilePicKey?: string | null,
      phoneNumber?: string | null,
      email: string,
      groupID?: string | null,
      votesReceived?:  {
        __typename: "ModelVoteConnection",
        items:  Array< {
          __typename: "Vote",
          id: string,
          voters?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          dareID: string,
          votee: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      votesGiven?:  {
        __typename: "ModelUserVoteConnection",
        items:  Array< {
          __typename: "UserVote",
          id: string,
          voteId: string,
          userId: string,
          vote:  {
            __typename: "Vote",
            id: string,
            voters?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            dareID: string,
            votee: string,
            createdAt: string,
            updatedAt: string,
          },
          user:  {
            __typename: "User",
            id: string,
            firstName?: string | null,
            lastName?: string | null,
            profilePicKey?: string | null,
            phoneNumber?: string | null,
            email: string,
            groupID?: string | null,
            votesReceived?:  {
              __typename: "ModelVoteConnection",
              nextToken?: string | null,
            } | null,
            votesGiven?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            hasSignedUp?: boolean | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      hasSignedUp?: boolean | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetVoteQueryVariables = {
  id: string,
};

export type GetVoteQuery = {
  getVote?:  {
    __typename: "Vote",
    id: string,
    voters?:  {
      __typename: "ModelUserVoteConnection",
      items:  Array< {
        __typename: "UserVote",
        id: string,
        voteId: string,
        userId: string,
        vote:  {
          __typename: "Vote",
          id: string,
          voters?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          dareID: string,
          votee: string,
          createdAt: string,
          updatedAt: string,
        },
        user:  {
          __typename: "User",
          id: string,
          firstName?: string | null,
          lastName?: string | null,
          profilePicKey?: string | null,
          phoneNumber?: string | null,
          email: string,
          groupID?: string | null,
          votesReceived?:  {
            __typename: "ModelVoteConnection",
            items:  Array< {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          votesGiven?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          hasSignedUp?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    dareID: string,
    votee: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListVotesQueryVariables = {
  filter?: ModelVoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVotesQuery = {
  listVotes?:  {
    __typename: "ModelVoteConnection",
    items:  Array< {
      __typename: "Vote",
      id: string,
      voters?:  {
        __typename: "ModelUserVoteConnection",
        items:  Array< {
          __typename: "UserVote",
          id: string,
          voteId: string,
          userId: string,
          vote:  {
            __typename: "Vote",
            id: string,
            voters?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            dareID: string,
            votee: string,
            createdAt: string,
            updatedAt: string,
          },
          user:  {
            __typename: "User",
            id: string,
            firstName?: string | null,
            lastName?: string | null,
            profilePicKey?: string | null,
            phoneNumber?: string | null,
            email: string,
            groupID?: string | null,
            votesReceived?:  {
              __typename: "ModelVoteConnection",
              nextToken?: string | null,
            } | null,
            votesGiven?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            hasSignedUp?: boolean | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      dareID: string,
      votee: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VotesByDareIDQueryVariables = {
  dareID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VotesByDareIDQuery = {
  votesByDareID?:  {
    __typename: "ModelVoteConnection",
    items:  Array< {
      __typename: "Vote",
      id: string,
      voters?:  {
        __typename: "ModelUserVoteConnection",
        items:  Array< {
          __typename: "UserVote",
          id: string,
          voteId: string,
          userId: string,
          vote:  {
            __typename: "Vote",
            id: string,
            voters?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            dareID: string,
            votee: string,
            createdAt: string,
            updatedAt: string,
          },
          user:  {
            __typename: "User",
            id: string,
            firstName?: string | null,
            lastName?: string | null,
            profilePicKey?: string | null,
            phoneNumber?: string | null,
            email: string,
            groupID?: string | null,
            votesReceived?:  {
              __typename: "ModelVoteConnection",
              nextToken?: string | null,
            } | null,
            votesGiven?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            hasSignedUp?: boolean | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      dareID: string,
      votee: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VotesByVoteeQueryVariables = {
  votee: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VotesByVoteeQuery = {
  votesByVotee?:  {
    __typename: "ModelVoteConnection",
    items:  Array< {
      __typename: "Vote",
      id: string,
      voters?:  {
        __typename: "ModelUserVoteConnection",
        items:  Array< {
          __typename: "UserVote",
          id: string,
          voteId: string,
          userId: string,
          vote:  {
            __typename: "Vote",
            id: string,
            voters?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            dareID: string,
            votee: string,
            createdAt: string,
            updatedAt: string,
          },
          user:  {
            __typename: "User",
            id: string,
            firstName?: string | null,
            lastName?: string | null,
            profilePicKey?: string | null,
            phoneNumber?: string | null,
            email: string,
            groupID?: string | null,
            votesReceived?:  {
              __typename: "ModelVoteConnection",
              nextToken?: string | null,
            } | null,
            votesGiven?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            hasSignedUp?: boolean | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      dareID: string,
      votee: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDareQueryVariables = {
  id: string,
};

export type GetDareQuery = {
  getDare?:  {
    __typename: "Dare",
    id: string,
    description?: string | null,
    emoji?: string | null,
    Votes?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        voters?:  {
          __typename: "ModelUserVoteConnection",
          items:  Array< {
            __typename: "UserVote",
            id: string,
            voteId: string,
            userId: string,
            vote:  {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            },
            user:  {
              __typename: "User",
              id: string,
              firstName?: string | null,
              lastName?: string | null,
              profilePicKey?: string | null,
              phoneNumber?: string | null,
              email: string,
              groupID?: string | null,
              hasSignedUp?: boolean | null,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        dareID: string,
        votee: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDaresQueryVariables = {
  filter?: ModelDareFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDaresQuery = {
  listDares?:  {
    __typename: "ModelDareConnection",
    items:  Array< {
      __typename: "Dare",
      id: string,
      description?: string | null,
      emoji?: string | null,
      Votes?:  {
        __typename: "ModelVoteConnection",
        items:  Array< {
          __typename: "Vote",
          id: string,
          voters?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          dareID: string,
          votee: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SearchDaresQueryVariables = {
  filter?: SearchableDareFilterInput | null,
  sort?: Array< SearchableDareSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableDareAggregationInput | null > | null,
};

export type SearchDaresQuery = {
  searchDares?:  {
    __typename: "SearchableDareConnection",
    items:  Array< {
      __typename: "Dare",
      id: string,
      description?: string | null,
      emoji?: string | null,
      Votes?:  {
        __typename: "ModelVoteConnection",
        items:  Array< {
          __typename: "Vote",
          id: string,
          voters?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          dareID: string,
          votee: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetGroupQueryVariables = {
  id: string,
};

export type GetGroupQuery = {
  getGroup?:  {
    __typename: "Group",
    id: string,
    description?: string | null,
    Users?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        profilePicKey?: string | null,
        phoneNumber?: string | null,
        email: string,
        groupID?: string | null,
        votesReceived?:  {
          __typename: "ModelVoteConnection",
          items:  Array< {
            __typename: "Vote",
            id: string,
            voters?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            dareID: string,
            votee: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        votesGiven?:  {
          __typename: "ModelUserVoteConnection",
          items:  Array< {
            __typename: "UserVote",
            id: string,
            voteId: string,
            userId: string,
            vote:  {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            },
            user:  {
              __typename: "User",
              id: string,
              firstName?: string | null,
              lastName?: string | null,
              profilePicKey?: string | null,
              phoneNumber?: string | null,
              email: string,
              groupID?: string | null,
              hasSignedUp?: boolean | null,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        hasSignedUp?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGroupsQueryVariables = {
  filter?: ModelGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupsQuery = {
  listGroups?:  {
    __typename: "ModelGroupConnection",
    items:  Array< {
      __typename: "Group",
      id: string,
      description?: string | null,
      Users?:  {
        __typename: "ModelUserConnection",
        items:  Array< {
          __typename: "User",
          id: string,
          firstName?: string | null,
          lastName?: string | null,
          profilePicKey?: string | null,
          phoneNumber?: string | null,
          email: string,
          groupID?: string | null,
          votesReceived?:  {
            __typename: "ModelVoteConnection",
            items:  Array< {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          votesGiven?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          hasSignedUp?: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    profilePicKey?: string | null,
    phoneNumber?: string | null,
    email: string,
    groupID?: string | null,
    votesReceived?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        voters?:  {
          __typename: "ModelUserVoteConnection",
          items:  Array< {
            __typename: "UserVote",
            id: string,
            voteId: string,
            userId: string,
            vote:  {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            },
            user:  {
              __typename: "User",
              id: string,
              firstName?: string | null,
              lastName?: string | null,
              profilePicKey?: string | null,
              phoneNumber?: string | null,
              email: string,
              groupID?: string | null,
              hasSignedUp?: boolean | null,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        dareID: string,
        votee: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    votesGiven?:  {
      __typename: "ModelUserVoteConnection",
      items:  Array< {
        __typename: "UserVote",
        id: string,
        voteId: string,
        userId: string,
        vote:  {
          __typename: "Vote",
          id: string,
          voters?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          dareID: string,
          votee: string,
          createdAt: string,
          updatedAt: string,
        },
        user:  {
          __typename: "User",
          id: string,
          firstName?: string | null,
          lastName?: string | null,
          profilePicKey?: string | null,
          phoneNumber?: string | null,
          email: string,
          groupID?: string | null,
          votesReceived?:  {
            __typename: "ModelVoteConnection",
            items:  Array< {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          votesGiven?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          hasSignedUp?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    hasSignedUp?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      profilePicKey?: string | null,
      phoneNumber?: string | null,
      email: string,
      groupID?: string | null,
      votesReceived?:  {
        __typename: "ModelVoteConnection",
        items:  Array< {
          __typename: "Vote",
          id: string,
          voters?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          dareID: string,
          votee: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      votesGiven?:  {
        __typename: "ModelUserVoteConnection",
        items:  Array< {
          __typename: "UserVote",
          id: string,
          voteId: string,
          userId: string,
          vote:  {
            __typename: "Vote",
            id: string,
            voters?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            dareID: string,
            votee: string,
            createdAt: string,
            updatedAt: string,
          },
          user:  {
            __typename: "User",
            id: string,
            firstName?: string | null,
            lastName?: string | null,
            profilePicKey?: string | null,
            phoneNumber?: string | null,
            email: string,
            groupID?: string | null,
            votesReceived?:  {
              __typename: "ModelVoteConnection",
              nextToken?: string | null,
            } | null,
            votesGiven?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            hasSignedUp?: boolean | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      hasSignedUp?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UsersByEmailQueryVariables = {
  email: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersByEmailQuery = {
  usersByEmail?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      profilePicKey?: string | null,
      phoneNumber?: string | null,
      email: string,
      groupID?: string | null,
      votesReceived?:  {
        __typename: "ModelVoteConnection",
        items:  Array< {
          __typename: "Vote",
          id: string,
          voters?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          dareID: string,
          votee: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      votesGiven?:  {
        __typename: "ModelUserVoteConnection",
        items:  Array< {
          __typename: "UserVote",
          id: string,
          voteId: string,
          userId: string,
          vote:  {
            __typename: "Vote",
            id: string,
            voters?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            dareID: string,
            votee: string,
            createdAt: string,
            updatedAt: string,
          },
          user:  {
            __typename: "User",
            id: string,
            firstName?: string | null,
            lastName?: string | null,
            profilePicKey?: string | null,
            phoneNumber?: string | null,
            email: string,
            groupID?: string | null,
            votesReceived?:  {
              __typename: "ModelVoteConnection",
              nextToken?: string | null,
            } | null,
            votesGiven?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            hasSignedUp?: boolean | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      hasSignedUp?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UsersByGroupIDQueryVariables = {
  groupID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersByGroupIDQuery = {
  usersByGroupID?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      profilePicKey?: string | null,
      phoneNumber?: string | null,
      email: string,
      groupID?: string | null,
      votesReceived?:  {
        __typename: "ModelVoteConnection",
        items:  Array< {
          __typename: "Vote",
          id: string,
          voters?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          dareID: string,
          votee: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      votesGiven?:  {
        __typename: "ModelUserVoteConnection",
        items:  Array< {
          __typename: "UserVote",
          id: string,
          voteId: string,
          userId: string,
          vote:  {
            __typename: "Vote",
            id: string,
            voters?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            dareID: string,
            votee: string,
            createdAt: string,
            updatedAt: string,
          },
          user:  {
            __typename: "User",
            id: string,
            firstName?: string | null,
            lastName?: string | null,
            profilePicKey?: string | null,
            phoneNumber?: string | null,
            email: string,
            groupID?: string | null,
            votesReceived?:  {
              __typename: "ModelVoteConnection",
              nextToken?: string | null,
            } | null,
            votesGiven?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            hasSignedUp?: boolean | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      hasSignedUp?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SearchUsersQueryVariables = {
  filter?: SearchableUserFilterInput | null,
  sort?: Array< SearchableUserSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableUserAggregationInput | null > | null,
};

export type SearchUsersQuery = {
  searchUsers?:  {
    __typename: "SearchableUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      profilePicKey?: string | null,
      phoneNumber?: string | null,
      email: string,
      groupID?: string | null,
      votesReceived?:  {
        __typename: "ModelVoteConnection",
        items:  Array< {
          __typename: "Vote",
          id: string,
          voters?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          dareID: string,
          votee: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      votesGiven?:  {
        __typename: "ModelUserVoteConnection",
        items:  Array< {
          __typename: "UserVote",
          id: string,
          voteId: string,
          userId: string,
          vote:  {
            __typename: "Vote",
            id: string,
            voters?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            dareID: string,
            votee: string,
            createdAt: string,
            updatedAt: string,
          },
          user:  {
            __typename: "User",
            id: string,
            firstName?: string | null,
            lastName?: string | null,
            profilePicKey?: string | null,
            phoneNumber?: string | null,
            email: string,
            groupID?: string | null,
            votesReceived?:  {
              __typename: "ModelVoteConnection",
              nextToken?: string | null,
            } | null,
            votesGiven?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            hasSignedUp?: boolean | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      hasSignedUp?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetUserVoteQueryVariables = {
  id: string,
};

export type GetUserVoteQuery = {
  getUserVote?:  {
    __typename: "UserVote",
    id: string,
    voteId: string,
    userId: string,
    vote:  {
      __typename: "Vote",
      id: string,
      voters?:  {
        __typename: "ModelUserVoteConnection",
        items:  Array< {
          __typename: "UserVote",
          id: string,
          voteId: string,
          userId: string,
          vote:  {
            __typename: "Vote",
            id: string,
            voters?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            dareID: string,
            votee: string,
            createdAt: string,
            updatedAt: string,
          },
          user:  {
            __typename: "User",
            id: string,
            firstName?: string | null,
            lastName?: string | null,
            profilePicKey?: string | null,
            phoneNumber?: string | null,
            email: string,
            groupID?: string | null,
            votesReceived?:  {
              __typename: "ModelVoteConnection",
              nextToken?: string | null,
            } | null,
            votesGiven?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            hasSignedUp?: boolean | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      dareID: string,
      votee: string,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      profilePicKey?: string | null,
      phoneNumber?: string | null,
      email: string,
      groupID?: string | null,
      votesReceived?:  {
        __typename: "ModelVoteConnection",
        items:  Array< {
          __typename: "Vote",
          id: string,
          voters?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          dareID: string,
          votee: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      votesGiven?:  {
        __typename: "ModelUserVoteConnection",
        items:  Array< {
          __typename: "UserVote",
          id: string,
          voteId: string,
          userId: string,
          vote:  {
            __typename: "Vote",
            id: string,
            voters?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            dareID: string,
            votee: string,
            createdAt: string,
            updatedAt: string,
          },
          user:  {
            __typename: "User",
            id: string,
            firstName?: string | null,
            lastName?: string | null,
            profilePicKey?: string | null,
            phoneNumber?: string | null,
            email: string,
            groupID?: string | null,
            votesReceived?:  {
              __typename: "ModelVoteConnection",
              nextToken?: string | null,
            } | null,
            votesGiven?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            hasSignedUp?: boolean | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      hasSignedUp?: boolean | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserVotesQueryVariables = {
  filter?: ModelUserVoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserVotesQuery = {
  listUserVotes?:  {
    __typename: "ModelUserVoteConnection",
    items:  Array< {
      __typename: "UserVote",
      id: string,
      voteId: string,
      userId: string,
      vote:  {
        __typename: "Vote",
        id: string,
        voters?:  {
          __typename: "ModelUserVoteConnection",
          items:  Array< {
            __typename: "UserVote",
            id: string,
            voteId: string,
            userId: string,
            vote:  {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            },
            user:  {
              __typename: "User",
              id: string,
              firstName?: string | null,
              lastName?: string | null,
              profilePicKey?: string | null,
              phoneNumber?: string | null,
              email: string,
              groupID?: string | null,
              hasSignedUp?: boolean | null,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        dareID: string,
        votee: string,
        createdAt: string,
        updatedAt: string,
      },
      user:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        profilePicKey?: string | null,
        phoneNumber?: string | null,
        email: string,
        groupID?: string | null,
        votesReceived?:  {
          __typename: "ModelVoteConnection",
          items:  Array< {
            __typename: "Vote",
            id: string,
            voters?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            dareID: string,
            votee: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        votesGiven?:  {
          __typename: "ModelUserVoteConnection",
          items:  Array< {
            __typename: "UserVote",
            id: string,
            voteId: string,
            userId: string,
            vote:  {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            },
            user:  {
              __typename: "User",
              id: string,
              firstName?: string | null,
              lastName?: string | null,
              profilePicKey?: string | null,
              phoneNumber?: string | null,
              email: string,
              groupID?: string | null,
              hasSignedUp?: boolean | null,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        hasSignedUp?: boolean | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserVotesByVoteIdQueryVariables = {
  voteId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserVoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserVotesByVoteIdQuery = {
  userVotesByVoteId?:  {
    __typename: "ModelUserVoteConnection",
    items:  Array< {
      __typename: "UserVote",
      id: string,
      voteId: string,
      userId: string,
      vote:  {
        __typename: "Vote",
        id: string,
        voters?:  {
          __typename: "ModelUserVoteConnection",
          items:  Array< {
            __typename: "UserVote",
            id: string,
            voteId: string,
            userId: string,
            vote:  {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            },
            user:  {
              __typename: "User",
              id: string,
              firstName?: string | null,
              lastName?: string | null,
              profilePicKey?: string | null,
              phoneNumber?: string | null,
              email: string,
              groupID?: string | null,
              hasSignedUp?: boolean | null,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        dareID: string,
        votee: string,
        createdAt: string,
        updatedAt: string,
      },
      user:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        profilePicKey?: string | null,
        phoneNumber?: string | null,
        email: string,
        groupID?: string | null,
        votesReceived?:  {
          __typename: "ModelVoteConnection",
          items:  Array< {
            __typename: "Vote",
            id: string,
            voters?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            dareID: string,
            votee: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        votesGiven?:  {
          __typename: "ModelUserVoteConnection",
          items:  Array< {
            __typename: "UserVote",
            id: string,
            voteId: string,
            userId: string,
            vote:  {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            },
            user:  {
              __typename: "User",
              id: string,
              firstName?: string | null,
              lastName?: string | null,
              profilePicKey?: string | null,
              phoneNumber?: string | null,
              email: string,
              groupID?: string | null,
              hasSignedUp?: boolean | null,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        hasSignedUp?: boolean | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserVotesByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserVoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserVotesByUserIdQuery = {
  userVotesByUserId?:  {
    __typename: "ModelUserVoteConnection",
    items:  Array< {
      __typename: "UserVote",
      id: string,
      voteId: string,
      userId: string,
      vote:  {
        __typename: "Vote",
        id: string,
        voters?:  {
          __typename: "ModelUserVoteConnection",
          items:  Array< {
            __typename: "UserVote",
            id: string,
            voteId: string,
            userId: string,
            vote:  {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            },
            user:  {
              __typename: "User",
              id: string,
              firstName?: string | null,
              lastName?: string | null,
              profilePicKey?: string | null,
              phoneNumber?: string | null,
              email: string,
              groupID?: string | null,
              hasSignedUp?: boolean | null,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        dareID: string,
        votee: string,
        createdAt: string,
        updatedAt: string,
      },
      user:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        profilePicKey?: string | null,
        phoneNumber?: string | null,
        email: string,
        groupID?: string | null,
        votesReceived?:  {
          __typename: "ModelVoteConnection",
          items:  Array< {
            __typename: "Vote",
            id: string,
            voters?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            dareID: string,
            votee: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        votesGiven?:  {
          __typename: "ModelUserVoteConnection",
          items:  Array< {
            __typename: "UserVote",
            id: string,
            voteId: string,
            userId: string,
            vote:  {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            },
            user:  {
              __typename: "User",
              id: string,
              firstName?: string | null,
              lastName?: string | null,
              profilePicKey?: string | null,
              phoneNumber?: string | null,
              email: string,
              groupID?: string | null,
              hasSignedUp?: boolean | null,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        hasSignedUp?: boolean | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateVoteSubscriptionVariables = {
  filter?: ModelSubscriptionVoteFilterInput | null,
};

export type OnCreateVoteSubscription = {
  onCreateVote?:  {
    __typename: "Vote",
    id: string,
    voters?:  {
      __typename: "ModelUserVoteConnection",
      items:  Array< {
        __typename: "UserVote",
        id: string,
        voteId: string,
        userId: string,
        vote:  {
          __typename: "Vote",
          id: string,
          voters?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          dareID: string,
          votee: string,
          createdAt: string,
          updatedAt: string,
        },
        user:  {
          __typename: "User",
          id: string,
          firstName?: string | null,
          lastName?: string | null,
          profilePicKey?: string | null,
          phoneNumber?: string | null,
          email: string,
          groupID?: string | null,
          votesReceived?:  {
            __typename: "ModelVoteConnection",
            items:  Array< {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          votesGiven?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          hasSignedUp?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    dareID: string,
    votee: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateVoteSubscriptionVariables = {
  filter?: ModelSubscriptionVoteFilterInput | null,
};

export type OnUpdateVoteSubscription = {
  onUpdateVote?:  {
    __typename: "Vote",
    id: string,
    voters?:  {
      __typename: "ModelUserVoteConnection",
      items:  Array< {
        __typename: "UserVote",
        id: string,
        voteId: string,
        userId: string,
        vote:  {
          __typename: "Vote",
          id: string,
          voters?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          dareID: string,
          votee: string,
          createdAt: string,
          updatedAt: string,
        },
        user:  {
          __typename: "User",
          id: string,
          firstName?: string | null,
          lastName?: string | null,
          profilePicKey?: string | null,
          phoneNumber?: string | null,
          email: string,
          groupID?: string | null,
          votesReceived?:  {
            __typename: "ModelVoteConnection",
            items:  Array< {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          votesGiven?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          hasSignedUp?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    dareID: string,
    votee: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteVoteSubscriptionVariables = {
  filter?: ModelSubscriptionVoteFilterInput | null,
};

export type OnDeleteVoteSubscription = {
  onDeleteVote?:  {
    __typename: "Vote",
    id: string,
    voters?:  {
      __typename: "ModelUserVoteConnection",
      items:  Array< {
        __typename: "UserVote",
        id: string,
        voteId: string,
        userId: string,
        vote:  {
          __typename: "Vote",
          id: string,
          voters?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          dareID: string,
          votee: string,
          createdAt: string,
          updatedAt: string,
        },
        user:  {
          __typename: "User",
          id: string,
          firstName?: string | null,
          lastName?: string | null,
          profilePicKey?: string | null,
          phoneNumber?: string | null,
          email: string,
          groupID?: string | null,
          votesReceived?:  {
            __typename: "ModelVoteConnection",
            items:  Array< {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          votesGiven?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          hasSignedUp?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    dareID: string,
    votee: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDareSubscriptionVariables = {
  filter?: ModelSubscriptionDareFilterInput | null,
};

export type OnCreateDareSubscription = {
  onCreateDare?:  {
    __typename: "Dare",
    id: string,
    description?: string | null,
    emoji?: string | null,
    Votes?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        voters?:  {
          __typename: "ModelUserVoteConnection",
          items:  Array< {
            __typename: "UserVote",
            id: string,
            voteId: string,
            userId: string,
            vote:  {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            },
            user:  {
              __typename: "User",
              id: string,
              firstName?: string | null,
              lastName?: string | null,
              profilePicKey?: string | null,
              phoneNumber?: string | null,
              email: string,
              groupID?: string | null,
              hasSignedUp?: boolean | null,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        dareID: string,
        votee: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDareSubscriptionVariables = {
  filter?: ModelSubscriptionDareFilterInput | null,
};

export type OnUpdateDareSubscription = {
  onUpdateDare?:  {
    __typename: "Dare",
    id: string,
    description?: string | null,
    emoji?: string | null,
    Votes?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        voters?:  {
          __typename: "ModelUserVoteConnection",
          items:  Array< {
            __typename: "UserVote",
            id: string,
            voteId: string,
            userId: string,
            vote:  {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            },
            user:  {
              __typename: "User",
              id: string,
              firstName?: string | null,
              lastName?: string | null,
              profilePicKey?: string | null,
              phoneNumber?: string | null,
              email: string,
              groupID?: string | null,
              hasSignedUp?: boolean | null,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        dareID: string,
        votee: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDareSubscriptionVariables = {
  filter?: ModelSubscriptionDareFilterInput | null,
};

export type OnDeleteDareSubscription = {
  onDeleteDare?:  {
    __typename: "Dare",
    id: string,
    description?: string | null,
    emoji?: string | null,
    Votes?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        voters?:  {
          __typename: "ModelUserVoteConnection",
          items:  Array< {
            __typename: "UserVote",
            id: string,
            voteId: string,
            userId: string,
            vote:  {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            },
            user:  {
              __typename: "User",
              id: string,
              firstName?: string | null,
              lastName?: string | null,
              profilePicKey?: string | null,
              phoneNumber?: string | null,
              email: string,
              groupID?: string | null,
              hasSignedUp?: boolean | null,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        dareID: string,
        votee: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGroupSubscriptionVariables = {
  filter?: ModelSubscriptionGroupFilterInput | null,
};

export type OnCreateGroupSubscription = {
  onCreateGroup?:  {
    __typename: "Group",
    id: string,
    description?: string | null,
    Users?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        profilePicKey?: string | null,
        phoneNumber?: string | null,
        email: string,
        groupID?: string | null,
        votesReceived?:  {
          __typename: "ModelVoteConnection",
          items:  Array< {
            __typename: "Vote",
            id: string,
            voters?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            dareID: string,
            votee: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        votesGiven?:  {
          __typename: "ModelUserVoteConnection",
          items:  Array< {
            __typename: "UserVote",
            id: string,
            voteId: string,
            userId: string,
            vote:  {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            },
            user:  {
              __typename: "User",
              id: string,
              firstName?: string | null,
              lastName?: string | null,
              profilePicKey?: string | null,
              phoneNumber?: string | null,
              email: string,
              groupID?: string | null,
              hasSignedUp?: boolean | null,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        hasSignedUp?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGroupSubscriptionVariables = {
  filter?: ModelSubscriptionGroupFilterInput | null,
};

export type OnUpdateGroupSubscription = {
  onUpdateGroup?:  {
    __typename: "Group",
    id: string,
    description?: string | null,
    Users?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        profilePicKey?: string | null,
        phoneNumber?: string | null,
        email: string,
        groupID?: string | null,
        votesReceived?:  {
          __typename: "ModelVoteConnection",
          items:  Array< {
            __typename: "Vote",
            id: string,
            voters?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            dareID: string,
            votee: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        votesGiven?:  {
          __typename: "ModelUserVoteConnection",
          items:  Array< {
            __typename: "UserVote",
            id: string,
            voteId: string,
            userId: string,
            vote:  {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            },
            user:  {
              __typename: "User",
              id: string,
              firstName?: string | null,
              lastName?: string | null,
              profilePicKey?: string | null,
              phoneNumber?: string | null,
              email: string,
              groupID?: string | null,
              hasSignedUp?: boolean | null,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        hasSignedUp?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGroupSubscriptionVariables = {
  filter?: ModelSubscriptionGroupFilterInput | null,
};

export type OnDeleteGroupSubscription = {
  onDeleteGroup?:  {
    __typename: "Group",
    id: string,
    description?: string | null,
    Users?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        profilePicKey?: string | null,
        phoneNumber?: string | null,
        email: string,
        groupID?: string | null,
        votesReceived?:  {
          __typename: "ModelVoteConnection",
          items:  Array< {
            __typename: "Vote",
            id: string,
            voters?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            dareID: string,
            votee: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        votesGiven?:  {
          __typename: "ModelUserVoteConnection",
          items:  Array< {
            __typename: "UserVote",
            id: string,
            voteId: string,
            userId: string,
            vote:  {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            },
            user:  {
              __typename: "User",
              id: string,
              firstName?: string | null,
              lastName?: string | null,
              profilePicKey?: string | null,
              phoneNumber?: string | null,
              email: string,
              groupID?: string | null,
              hasSignedUp?: boolean | null,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        hasSignedUp?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    profilePicKey?: string | null,
    phoneNumber?: string | null,
    email: string,
    groupID?: string | null,
    votesReceived?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        voters?:  {
          __typename: "ModelUserVoteConnection",
          items:  Array< {
            __typename: "UserVote",
            id: string,
            voteId: string,
            userId: string,
            vote:  {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            },
            user:  {
              __typename: "User",
              id: string,
              firstName?: string | null,
              lastName?: string | null,
              profilePicKey?: string | null,
              phoneNumber?: string | null,
              email: string,
              groupID?: string | null,
              hasSignedUp?: boolean | null,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        dareID: string,
        votee: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    votesGiven?:  {
      __typename: "ModelUserVoteConnection",
      items:  Array< {
        __typename: "UserVote",
        id: string,
        voteId: string,
        userId: string,
        vote:  {
          __typename: "Vote",
          id: string,
          voters?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          dareID: string,
          votee: string,
          createdAt: string,
          updatedAt: string,
        },
        user:  {
          __typename: "User",
          id: string,
          firstName?: string | null,
          lastName?: string | null,
          profilePicKey?: string | null,
          phoneNumber?: string | null,
          email: string,
          groupID?: string | null,
          votesReceived?:  {
            __typename: "ModelVoteConnection",
            items:  Array< {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          votesGiven?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          hasSignedUp?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    hasSignedUp?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    profilePicKey?: string | null,
    phoneNumber?: string | null,
    email: string,
    groupID?: string | null,
    votesReceived?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        voters?:  {
          __typename: "ModelUserVoteConnection",
          items:  Array< {
            __typename: "UserVote",
            id: string,
            voteId: string,
            userId: string,
            vote:  {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            },
            user:  {
              __typename: "User",
              id: string,
              firstName?: string | null,
              lastName?: string | null,
              profilePicKey?: string | null,
              phoneNumber?: string | null,
              email: string,
              groupID?: string | null,
              hasSignedUp?: boolean | null,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        dareID: string,
        votee: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    votesGiven?:  {
      __typename: "ModelUserVoteConnection",
      items:  Array< {
        __typename: "UserVote",
        id: string,
        voteId: string,
        userId: string,
        vote:  {
          __typename: "Vote",
          id: string,
          voters?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          dareID: string,
          votee: string,
          createdAt: string,
          updatedAt: string,
        },
        user:  {
          __typename: "User",
          id: string,
          firstName?: string | null,
          lastName?: string | null,
          profilePicKey?: string | null,
          phoneNumber?: string | null,
          email: string,
          groupID?: string | null,
          votesReceived?:  {
            __typename: "ModelVoteConnection",
            items:  Array< {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          votesGiven?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          hasSignedUp?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    hasSignedUp?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    profilePicKey?: string | null,
    phoneNumber?: string | null,
    email: string,
    groupID?: string | null,
    votesReceived?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        voters?:  {
          __typename: "ModelUserVoteConnection",
          items:  Array< {
            __typename: "UserVote",
            id: string,
            voteId: string,
            userId: string,
            vote:  {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            },
            user:  {
              __typename: "User",
              id: string,
              firstName?: string | null,
              lastName?: string | null,
              profilePicKey?: string | null,
              phoneNumber?: string | null,
              email: string,
              groupID?: string | null,
              hasSignedUp?: boolean | null,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        dareID: string,
        votee: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    votesGiven?:  {
      __typename: "ModelUserVoteConnection",
      items:  Array< {
        __typename: "UserVote",
        id: string,
        voteId: string,
        userId: string,
        vote:  {
          __typename: "Vote",
          id: string,
          voters?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          dareID: string,
          votee: string,
          createdAt: string,
          updatedAt: string,
        },
        user:  {
          __typename: "User",
          id: string,
          firstName?: string | null,
          lastName?: string | null,
          profilePicKey?: string | null,
          phoneNumber?: string | null,
          email: string,
          groupID?: string | null,
          votesReceived?:  {
            __typename: "ModelVoteConnection",
            items:  Array< {
              __typename: "Vote",
              id: string,
              dareID: string,
              votee: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          votesGiven?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          hasSignedUp?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    hasSignedUp?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserVoteSubscriptionVariables = {
  filter?: ModelSubscriptionUserVoteFilterInput | null,
};

export type OnCreateUserVoteSubscription = {
  onCreateUserVote?:  {
    __typename: "UserVote",
    id: string,
    voteId: string,
    userId: string,
    vote:  {
      __typename: "Vote",
      id: string,
      voters?:  {
        __typename: "ModelUserVoteConnection",
        items:  Array< {
          __typename: "UserVote",
          id: string,
          voteId: string,
          userId: string,
          vote:  {
            __typename: "Vote",
            id: string,
            voters?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            dareID: string,
            votee: string,
            createdAt: string,
            updatedAt: string,
          },
          user:  {
            __typename: "User",
            id: string,
            firstName?: string | null,
            lastName?: string | null,
            profilePicKey?: string | null,
            phoneNumber?: string | null,
            email: string,
            groupID?: string | null,
            votesReceived?:  {
              __typename: "ModelVoteConnection",
              nextToken?: string | null,
            } | null,
            votesGiven?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            hasSignedUp?: boolean | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      dareID: string,
      votee: string,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      profilePicKey?: string | null,
      phoneNumber?: string | null,
      email: string,
      groupID?: string | null,
      votesReceived?:  {
        __typename: "ModelVoteConnection",
        items:  Array< {
          __typename: "Vote",
          id: string,
          voters?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          dareID: string,
          votee: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      votesGiven?:  {
        __typename: "ModelUserVoteConnection",
        items:  Array< {
          __typename: "UserVote",
          id: string,
          voteId: string,
          userId: string,
          vote:  {
            __typename: "Vote",
            id: string,
            voters?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            dareID: string,
            votee: string,
            createdAt: string,
            updatedAt: string,
          },
          user:  {
            __typename: "User",
            id: string,
            firstName?: string | null,
            lastName?: string | null,
            profilePicKey?: string | null,
            phoneNumber?: string | null,
            email: string,
            groupID?: string | null,
            votesReceived?:  {
              __typename: "ModelVoteConnection",
              nextToken?: string | null,
            } | null,
            votesGiven?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            hasSignedUp?: boolean | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      hasSignedUp?: boolean | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserVoteSubscriptionVariables = {
  filter?: ModelSubscriptionUserVoteFilterInput | null,
};

export type OnUpdateUserVoteSubscription = {
  onUpdateUserVote?:  {
    __typename: "UserVote",
    id: string,
    voteId: string,
    userId: string,
    vote:  {
      __typename: "Vote",
      id: string,
      voters?:  {
        __typename: "ModelUserVoteConnection",
        items:  Array< {
          __typename: "UserVote",
          id: string,
          voteId: string,
          userId: string,
          vote:  {
            __typename: "Vote",
            id: string,
            voters?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            dareID: string,
            votee: string,
            createdAt: string,
            updatedAt: string,
          },
          user:  {
            __typename: "User",
            id: string,
            firstName?: string | null,
            lastName?: string | null,
            profilePicKey?: string | null,
            phoneNumber?: string | null,
            email: string,
            groupID?: string | null,
            votesReceived?:  {
              __typename: "ModelVoteConnection",
              nextToken?: string | null,
            } | null,
            votesGiven?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            hasSignedUp?: boolean | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      dareID: string,
      votee: string,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      profilePicKey?: string | null,
      phoneNumber?: string | null,
      email: string,
      groupID?: string | null,
      votesReceived?:  {
        __typename: "ModelVoteConnection",
        items:  Array< {
          __typename: "Vote",
          id: string,
          voters?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          dareID: string,
          votee: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      votesGiven?:  {
        __typename: "ModelUserVoteConnection",
        items:  Array< {
          __typename: "UserVote",
          id: string,
          voteId: string,
          userId: string,
          vote:  {
            __typename: "Vote",
            id: string,
            voters?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            dareID: string,
            votee: string,
            createdAt: string,
            updatedAt: string,
          },
          user:  {
            __typename: "User",
            id: string,
            firstName?: string | null,
            lastName?: string | null,
            profilePicKey?: string | null,
            phoneNumber?: string | null,
            email: string,
            groupID?: string | null,
            votesReceived?:  {
              __typename: "ModelVoteConnection",
              nextToken?: string | null,
            } | null,
            votesGiven?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            hasSignedUp?: boolean | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      hasSignedUp?: boolean | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserVoteSubscriptionVariables = {
  filter?: ModelSubscriptionUserVoteFilterInput | null,
};

export type OnDeleteUserVoteSubscription = {
  onDeleteUserVote?:  {
    __typename: "UserVote",
    id: string,
    voteId: string,
    userId: string,
    vote:  {
      __typename: "Vote",
      id: string,
      voters?:  {
        __typename: "ModelUserVoteConnection",
        items:  Array< {
          __typename: "UserVote",
          id: string,
          voteId: string,
          userId: string,
          vote:  {
            __typename: "Vote",
            id: string,
            voters?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            dareID: string,
            votee: string,
            createdAt: string,
            updatedAt: string,
          },
          user:  {
            __typename: "User",
            id: string,
            firstName?: string | null,
            lastName?: string | null,
            profilePicKey?: string | null,
            phoneNumber?: string | null,
            email: string,
            groupID?: string | null,
            votesReceived?:  {
              __typename: "ModelVoteConnection",
              nextToken?: string | null,
            } | null,
            votesGiven?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            hasSignedUp?: boolean | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      dareID: string,
      votee: string,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      profilePicKey?: string | null,
      phoneNumber?: string | null,
      email: string,
      groupID?: string | null,
      votesReceived?:  {
        __typename: "ModelVoteConnection",
        items:  Array< {
          __typename: "Vote",
          id: string,
          voters?:  {
            __typename: "ModelUserVoteConnection",
            items:  Array< {
              __typename: "UserVote",
              id: string,
              voteId: string,
              userId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          dareID: string,
          votee: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      votesGiven?:  {
        __typename: "ModelUserVoteConnection",
        items:  Array< {
          __typename: "UserVote",
          id: string,
          voteId: string,
          userId: string,
          vote:  {
            __typename: "Vote",
            id: string,
            voters?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            dareID: string,
            votee: string,
            createdAt: string,
            updatedAt: string,
          },
          user:  {
            __typename: "User",
            id: string,
            firstName?: string | null,
            lastName?: string | null,
            profilePicKey?: string | null,
            phoneNumber?: string | null,
            email: string,
            groupID?: string | null,
            votesReceived?:  {
              __typename: "ModelVoteConnection",
              nextToken?: string | null,
            } | null,
            votesGiven?:  {
              __typename: "ModelUserVoteConnection",
              nextToken?: string | null,
            } | null,
            hasSignedUp?: boolean | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      hasSignedUp?: boolean | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
