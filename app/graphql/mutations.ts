/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createVote = /* GraphQL */ `mutation CreateVote(
  $input: CreateVoteInput!
  $condition: ModelVoteConditionInput
) {
  createVote(input: $input, condition: $condition) {
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
          groupID
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
` as GeneratedMutation<
  APITypes.CreateVoteMutationVariables,
  APITypes.CreateVoteMutation
>;
export const updateVote = /* GraphQL */ `mutation UpdateVote(
  $input: UpdateVoteInput!
  $condition: ModelVoteConditionInput
) {
  updateVote(input: $input, condition: $condition) {
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
          groupID
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
` as GeneratedMutation<
  APITypes.UpdateVoteMutationVariables,
  APITypes.UpdateVoteMutation
>;
export const deleteVote = /* GraphQL */ `mutation DeleteVote(
  $input: DeleteVoteInput!
  $condition: ModelVoteConditionInput
) {
  deleteVote(input: $input, condition: $condition) {
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
          groupID
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
` as GeneratedMutation<
  APITypes.DeleteVoteMutationVariables,
  APITypes.DeleteVoteMutation
>;
export const createDare = /* GraphQL */ `mutation CreateDare(
  $input: CreateDareInput!
  $condition: ModelDareConditionInput
) {
  createDare(input: $input, condition: $condition) {
    id
    description
    emoji
    Votes {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateDareMutationVariables,
  APITypes.CreateDareMutation
>;
export const updateDare = /* GraphQL */ `mutation UpdateDare(
  $input: UpdateDareInput!
  $condition: ModelDareConditionInput
) {
  updateDare(input: $input, condition: $condition) {
    id
    description
    emoji
    Votes {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateDareMutationVariables,
  APITypes.UpdateDareMutation
>;
export const deleteDare = /* GraphQL */ `mutation DeleteDare(
  $input: DeleteDareInput!
  $condition: ModelDareConditionInput
) {
  deleteDare(input: $input, condition: $condition) {
    id
    description
    emoji
    Votes {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDareMutationVariables,
  APITypes.DeleteDareMutation
>;
export const createGroup = /* GraphQL */ `mutation CreateGroup(
  $input: CreateGroupInput!
  $condition: ModelGroupConditionInput
) {
  createGroup(input: $input, condition: $condition) {
    id
    Users {
      items {
        id
        firstName
        lastName
        profilePicKey
        phoneNumber
        groupID
        votesGiven {
          nextToken
          __typename
        }
        votesReceived {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGroupMutationVariables,
  APITypes.CreateGroupMutation
>;
export const updateGroup = /* GraphQL */ `mutation UpdateGroup(
  $input: UpdateGroupInput!
  $condition: ModelGroupConditionInput
) {
  updateGroup(input: $input, condition: $condition) {
    id
    Users {
      items {
        id
        firstName
        lastName
        profilePicKey
        phoneNumber
        groupID
        votesGiven {
          nextToken
          __typename
        }
        votesReceived {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGroupMutationVariables,
  APITypes.UpdateGroupMutation
>;
export const deleteGroup = /* GraphQL */ `mutation DeleteGroup(
  $input: DeleteGroupInput!
  $condition: ModelGroupConditionInput
) {
  deleteGroup(input: $input, condition: $condition) {
    id
    Users {
      items {
        id
        firstName
        lastName
        profilePicKey
        phoneNumber
        groupID
        votesGiven {
          nextToken
          __typename
        }
        votesReceived {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGroupMutationVariables,
  APITypes.DeleteGroupMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    firstName
    lastName
    profilePicKey
    phoneNumber
    groupID
    votesGiven {
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
    votesReceived {
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
          groupID
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    firstName
    lastName
    profilePicKey
    phoneNumber
    groupID
    votesGiven {
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
    votesReceived {
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
          groupID
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    firstName
    lastName
    profilePicKey
    phoneNumber
    groupID
    votesGiven {
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
    votesReceived {
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
          groupID
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createUserVote = /* GraphQL */ `mutation CreateUserVote(
  $input: CreateUserVoteInput!
  $condition: ModelUserVoteConditionInput
) {
  createUserVote(input: $input, condition: $condition) {
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
      groupID
      votesGiven {
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
      votesReceived {
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
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserVoteMutationVariables,
  APITypes.CreateUserVoteMutation
>;
export const updateUserVote = /* GraphQL */ `mutation UpdateUserVote(
  $input: UpdateUserVoteInput!
  $condition: ModelUserVoteConditionInput
) {
  updateUserVote(input: $input, condition: $condition) {
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
      groupID
      votesGiven {
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
      votesReceived {
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
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserVoteMutationVariables,
  APITypes.UpdateUserVoteMutation
>;
export const deleteUserVote = /* GraphQL */ `mutation DeleteUserVote(
  $input: DeleteUserVoteInput!
  $condition: ModelUserVoteConditionInput
) {
  deleteUserVote(input: $input, condition: $condition) {
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
      groupID
      votesGiven {
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
      votesReceived {
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
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserVoteMutationVariables,
  APITypes.DeleteUserVoteMutation
>;
