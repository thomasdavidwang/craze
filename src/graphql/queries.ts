/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getVote = /* GraphQL */ `query GetVote($id: ID!) {
  getVote(id: $id) {
    id
    voters {
      items {
        id
        voteId
        userId
        vote {
          id
          voters {
            items {
              id
              voteId
              userId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          dareID
          votee
          createdAt
          updatedAt
          __typename
        }
        user {
          id
          firstName
          lastName
          profilePicKey
          phoneNumber
          email
          groupID
          votesReceived {
            items {
              id
              dareID
              votee
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          votesGiven {
            items {
              id
              voteId
              userId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          hasSignedUp
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    dareID
    votee
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetVoteQueryVariables, APITypes.GetVoteQuery>;
export const listVotes = /* GraphQL */ `query ListVotes(
  $filter: ModelVoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      voters {
        items {
          id
          voteId
          userId
          vote {
            id
            voters {
              nextToken
              __typename
            }
            dareID
            votee
            createdAt
            updatedAt
            __typename
          }
          user {
            id
            firstName
            lastName
            profilePicKey
            phoneNumber
            email
            groupID
            votesReceived {
              nextToken
              __typename
            }
            votesGiven {
              nextToken
              __typename
            }
            hasSignedUp
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      dareID
      votee
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListVotesQueryVariables, APITypes.ListVotesQuery>;
export const votesByDareID = /* GraphQL */ `query VotesByDareID(
  $dareID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelVoteFilterInput
  $limit: Int
  $nextToken: String
) {
  votesByDareID(
    dareID: $dareID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      voters {
        items {
          id
          voteId
          userId
          vote {
            id
            voters {
              nextToken
              __typename
            }
            dareID
            votee
            createdAt
            updatedAt
            __typename
          }
          user {
            id
            firstName
            lastName
            profilePicKey
            phoneNumber
            email
            groupID
            votesReceived {
              nextToken
              __typename
            }
            votesGiven {
              nextToken
              __typename
            }
            hasSignedUp
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      dareID
      votee
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VotesByDareIDQueryVariables,
  APITypes.VotesByDareIDQuery
>;
export const votesByVotee = /* GraphQL */ `query VotesByVotee(
  $votee: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelVoteFilterInput
  $limit: Int
  $nextToken: String
) {
  votesByVotee(
    votee: $votee
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      voters {
        items {
          id
          voteId
          userId
          vote {
            id
            voters {
              nextToken
              __typename
            }
            dareID
            votee
            createdAt
            updatedAt
            __typename
          }
          user {
            id
            firstName
            lastName
            profilePicKey
            phoneNumber
            email
            groupID
            votesReceived {
              nextToken
              __typename
            }
            votesGiven {
              nextToken
              __typename
            }
            hasSignedUp
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      dareID
      votee
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VotesByVoteeQueryVariables,
  APITypes.VotesByVoteeQuery
>;
export const getDare = /* GraphQL */ `query GetDare($id: ID!) {
  getDare(id: $id) {
    id
    description
    emoji
    Votes {
      items {
        id
        voters {
          items {
            id
            voteId
            userId
            vote {
              id
              dareID
              votee
              createdAt
              updatedAt
              __typename
            }
            user {
              id
              firstName
              lastName
              profilePicKey
              phoneNumber
              email
              groupID
              hasSignedUp
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        dareID
        votee
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetDareQueryVariables, APITypes.GetDareQuery>;
export const listDares = /* GraphQL */ `query ListDares(
  $filter: ModelDareFilterInput
  $limit: Int
  $nextToken: String
) {
  listDares(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
      emoji
      Votes {
        items {
          id
          voters {
            items {
              id
              voteId
              userId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          dareID
          votee
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListDaresQueryVariables, APITypes.ListDaresQuery>;
export const searchDares = /* GraphQL */ `query SearchDares(
  $filter: SearchableDareFilterInput
  $sort: [SearchableDareSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableDareAggregationInput]
) {
  searchDares(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      description
      emoji
      Votes {
        items {
          id
          voters {
            items {
              id
              voteId
              userId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          dareID
          votee
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchDaresQueryVariables,
  APITypes.SearchDaresQuery
>;
export const getGroup = /* GraphQL */ `query GetGroup($id: ID!) {
  getGroup(id: $id) {
    id
    description
    Users {
      items {
        id
        firstName
        lastName
        profilePicKey
        phoneNumber
        email
        groupID
        votesReceived {
          items {
            id
            voters {
              nextToken
              __typename
            }
            dareID
            votee
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        votesGiven {
          items {
            id
            voteId
            userId
            vote {
              id
              dareID
              votee
              createdAt
              updatedAt
              __typename
            }
            user {
              id
              firstName
              lastName
              profilePicKey
              phoneNumber
              email
              groupID
              hasSignedUp
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        hasSignedUp
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetGroupQueryVariables, APITypes.GetGroupQuery>;
export const listGroups = /* GraphQL */ `query ListGroups(
  $filter: ModelGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
      Users {
        items {
          id
          firstName
          lastName
          profilePicKey
          phoneNumber
          email
          groupID
          votesReceived {
            items {
              id
              dareID
              votee
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          votesGiven {
            items {
              id
              voteId
              userId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          hasSignedUp
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGroupsQueryVariables,
  APITypes.ListGroupsQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    firstName
    lastName
    profilePicKey
    phoneNumber
    email
    groupID
    votesReceived {
      items {
        id
        voters {
          items {
            id
            voteId
            userId
            vote {
              id
              dareID
              votee
              createdAt
              updatedAt
              __typename
            }
            user {
              id
              firstName
              lastName
              profilePicKey
              phoneNumber
              email
              groupID
              hasSignedUp
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        dareID
        votee
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    votesGiven {
      items {
        id
        voteId
        userId
        vote {
          id
          voters {
            items {
              id
              voteId
              userId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          dareID
          votee
          createdAt
          updatedAt
          __typename
        }
        user {
          id
          firstName
          lastName
          profilePicKey
          phoneNumber
          email
          groupID
          votesReceived {
            items {
              id
              dareID
              votee
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          votesGiven {
            items {
              id
              voteId
              userId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          hasSignedUp
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    hasSignedUp
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      lastName
      profilePicKey
      phoneNumber
      email
      groupID
      votesReceived {
        items {
          id
          voters {
            items {
              id
              voteId
              userId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          dareID
          votee
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      votesGiven {
        items {
          id
          voteId
          userId
          vote {
            id
            voters {
              nextToken
              __typename
            }
            dareID
            votee
            createdAt
            updatedAt
            __typename
          }
          user {
            id
            firstName
            lastName
            profilePicKey
            phoneNumber
            email
            groupID
            votesReceived {
              nextToken
              __typename
            }
            votesGiven {
              nextToken
              __typename
            }
            hasSignedUp
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      hasSignedUp
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const usersByEmail = /* GraphQL */ `query UsersByEmail(
  $email: AWSEmail!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  usersByEmail(
    email: $email
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      firstName
      lastName
      profilePicKey
      phoneNumber
      email
      groupID
      votesReceived {
        items {
          id
          voters {
            items {
              id
              voteId
              userId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          dareID
          votee
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      votesGiven {
        items {
          id
          voteId
          userId
          vote {
            id
            voters {
              nextToken
              __typename
            }
            dareID
            votee
            createdAt
            updatedAt
            __typename
          }
          user {
            id
            firstName
            lastName
            profilePicKey
            phoneNumber
            email
            groupID
            votesReceived {
              nextToken
              __typename
            }
            votesGiven {
              nextToken
              __typename
            }
            hasSignedUp
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      hasSignedUp
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UsersByEmailQueryVariables,
  APITypes.UsersByEmailQuery
>;
export const usersByGroupID = /* GraphQL */ `query UsersByGroupID(
  $groupID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  usersByGroupID(
    groupID: $groupID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      firstName
      lastName
      profilePicKey
      phoneNumber
      email
      groupID
      votesReceived {
        items {
          id
          voters {
            items {
              id
              voteId
              userId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          dareID
          votee
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      votesGiven {
        items {
          id
          voteId
          userId
          vote {
            id
            voters {
              nextToken
              __typename
            }
            dareID
            votee
            createdAt
            updatedAt
            __typename
          }
          user {
            id
            firstName
            lastName
            profilePicKey
            phoneNumber
            email
            groupID
            votesReceived {
              nextToken
              __typename
            }
            votesGiven {
              nextToken
              __typename
            }
            hasSignedUp
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      hasSignedUp
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UsersByGroupIDQueryVariables,
  APITypes.UsersByGroupIDQuery
>;
export const searchUsers = /* GraphQL */ `query SearchUsers(
  $filter: SearchableUserFilterInput
  $sort: [SearchableUserSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableUserAggregationInput]
) {
  searchUsers(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      firstName
      lastName
      profilePicKey
      phoneNumber
      email
      groupID
      votesReceived {
        items {
          id
          voters {
            items {
              id
              voteId
              userId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          dareID
          votee
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      votesGiven {
        items {
          id
          voteId
          userId
          vote {
            id
            voters {
              nextToken
              __typename
            }
            dareID
            votee
            createdAt
            updatedAt
            __typename
          }
          user {
            id
            firstName
            lastName
            profilePicKey
            phoneNumber
            email
            groupID
            votesReceived {
              nextToken
              __typename
            }
            votesGiven {
              nextToken
              __typename
            }
            hasSignedUp
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      hasSignedUp
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchUsersQueryVariables,
  APITypes.SearchUsersQuery
>;
export const getUserVote = /* GraphQL */ `query GetUserVote($id: ID!) {
  getUserVote(id: $id) {
    id
    voteId
    userId
    vote {
      id
      voters {
        items {
          id
          voteId
          userId
          vote {
            id
            voters {
              nextToken
              __typename
            }
            dareID
            votee
            createdAt
            updatedAt
            __typename
          }
          user {
            id
            firstName
            lastName
            profilePicKey
            phoneNumber
            email
            groupID
            votesReceived {
              nextToken
              __typename
            }
            votesGiven {
              nextToken
              __typename
            }
            hasSignedUp
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      dareID
      votee
      createdAt
      updatedAt
      __typename
    }
    user {
      id
      firstName
      lastName
      profilePicKey
      phoneNumber
      email
      groupID
      votesReceived {
        items {
          id
          voters {
            items {
              id
              voteId
              userId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          dareID
          votee
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      votesGiven {
        items {
          id
          voteId
          userId
          vote {
            id
            voters {
              nextToken
              __typename
            }
            dareID
            votee
            createdAt
            updatedAt
            __typename
          }
          user {
            id
            firstName
            lastName
            profilePicKey
            phoneNumber
            email
            groupID
            votesReceived {
              nextToken
              __typename
            }
            votesGiven {
              nextToken
              __typename
            }
            hasSignedUp
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      hasSignedUp
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserVoteQueryVariables,
  APITypes.GetUserVoteQuery
>;
export const listUserVotes = /* GraphQL */ `query ListUserVotes(
  $filter: ModelUserVoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      voteId
      userId
      vote {
        id
        voters {
          items {
            id
            voteId
            userId
            vote {
              id
              dareID
              votee
              createdAt
              updatedAt
              __typename
            }
            user {
              id
              firstName
              lastName
              profilePicKey
              phoneNumber
              email
              groupID
              hasSignedUp
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        dareID
        votee
        createdAt
        updatedAt
        __typename
      }
      user {
        id
        firstName
        lastName
        profilePicKey
        phoneNumber
        email
        groupID
        votesReceived {
          items {
            id
            voters {
              nextToken
              __typename
            }
            dareID
            votee
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        votesGiven {
          items {
            id
            voteId
            userId
            vote {
              id
              dareID
              votee
              createdAt
              updatedAt
              __typename
            }
            user {
              id
              firstName
              lastName
              profilePicKey
              phoneNumber
              email
              groupID
              hasSignedUp
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        hasSignedUp
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserVotesQueryVariables,
  APITypes.ListUserVotesQuery
>;
export const userVotesByVoteId = /* GraphQL */ `query UserVotesByVoteId(
  $voteId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserVoteFilterInput
  $limit: Int
  $nextToken: String
) {
  userVotesByVoteId(
    voteId: $voteId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      voteId
      userId
      vote {
        id
        voters {
          items {
            id
            voteId
            userId
            vote {
              id
              dareID
              votee
              createdAt
              updatedAt
              __typename
            }
            user {
              id
              firstName
              lastName
              profilePicKey
              phoneNumber
              email
              groupID
              hasSignedUp
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        dareID
        votee
        createdAt
        updatedAt
        __typename
      }
      user {
        id
        firstName
        lastName
        profilePicKey
        phoneNumber
        email
        groupID
        votesReceived {
          items {
            id
            voters {
              nextToken
              __typename
            }
            dareID
            votee
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        votesGiven {
          items {
            id
            voteId
            userId
            vote {
              id
              dareID
              votee
              createdAt
              updatedAt
              __typename
            }
            user {
              id
              firstName
              lastName
              profilePicKey
              phoneNumber
              email
              groupID
              hasSignedUp
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        hasSignedUp
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserVotesByVoteIdQueryVariables,
  APITypes.UserVotesByVoteIdQuery
>;
export const userVotesByUserId = /* GraphQL */ `query UserVotesByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserVoteFilterInput
  $limit: Int
  $nextToken: String
) {
  userVotesByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      voteId
      userId
      vote {
        id
        voters {
          items {
            id
            voteId
            userId
            vote {
              id
              dareID
              votee
              createdAt
              updatedAt
              __typename
            }
            user {
              id
              firstName
              lastName
              profilePicKey
              phoneNumber
              email
              groupID
              hasSignedUp
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        dareID
        votee
        createdAt
        updatedAt
        __typename
      }
      user {
        id
        firstName
        lastName
        profilePicKey
        phoneNumber
        email
        groupID
        votesReceived {
          items {
            id
            voters {
              nextToken
              __typename
            }
            dareID
            votee
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        votesGiven {
          items {
            id
            voteId
            userId
            vote {
              id
              dareID
              votee
              createdAt
              updatedAt
              __typename
            }
            user {
              id
              firstName
              lastName
              profilePicKey
              phoneNumber
              email
              groupID
              hasSignedUp
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        hasSignedUp
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserVotesByUserIdQueryVariables,
  APITypes.UserVotesByUserIdQuery
>;
