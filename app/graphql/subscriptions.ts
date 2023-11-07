/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateVote = /* GraphQL */ `subscription OnCreateVote($filter: ModelSubscriptionVoteFilterInput) {
  onCreateVote(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateVoteSubscriptionVariables,
  APITypes.OnCreateVoteSubscription
>;
export const onUpdateVote = /* GraphQL */ `subscription OnUpdateVote($filter: ModelSubscriptionVoteFilterInput) {
  onUpdateVote(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateVoteSubscriptionVariables,
  APITypes.OnUpdateVoteSubscription
>;
export const onDeleteVote = /* GraphQL */ `subscription OnDeleteVote($filter: ModelSubscriptionVoteFilterInput) {
  onDeleteVote(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteVoteSubscriptionVariables,
  APITypes.OnDeleteVoteSubscription
>;
export const onCreateDare = /* GraphQL */ `subscription OnCreateDare($filter: ModelSubscriptionDareFilterInput) {
  onCreateDare(filter: $filter) {
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
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateDareSubscriptionVariables,
  APITypes.OnCreateDareSubscription
>;
export const onUpdateDare = /* GraphQL */ `subscription OnUpdateDare($filter: ModelSubscriptionDareFilterInput) {
  onUpdateDare(filter: $filter) {
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
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateDareSubscriptionVariables,
  APITypes.OnUpdateDareSubscription
>;
export const onDeleteDare = /* GraphQL */ `subscription OnDeleteDare($filter: ModelSubscriptionDareFilterInput) {
  onDeleteDare(filter: $filter) {
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
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDareSubscriptionVariables,
  APITypes.OnDeleteDareSubscription
>;
export const onCreateGroup = /* GraphQL */ `subscription OnCreateGroup($filter: ModelSubscriptionGroupFilterInput) {
  onCreateGroup(filter: $filter) {
    id
    Users {
      items {
        id
        firstName
        lastName
        profilePicKey
        phoneNumber
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
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateGroupSubscriptionVariables,
  APITypes.OnCreateGroupSubscription
>;
export const onUpdateGroup = /* GraphQL */ `subscription OnUpdateGroup($filter: ModelSubscriptionGroupFilterInput) {
  onUpdateGroup(filter: $filter) {
    id
    Users {
      items {
        id
        firstName
        lastName
        profilePicKey
        phoneNumber
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
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateGroupSubscriptionVariables,
  APITypes.OnUpdateGroupSubscription
>;
export const onDeleteGroup = /* GraphQL */ `subscription OnDeleteGroup($filter: ModelSubscriptionGroupFilterInput) {
  onDeleteGroup(filter: $filter) {
    id
    Users {
      items {
        id
        firstName
        lastName
        profilePicKey
        phoneNumber
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
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteGroupSubscriptionVariables,
  APITypes.OnDeleteGroupSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
    id
    firstName
    lastName
    profilePicKey
    phoneNumber
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
    id
    firstName
    lastName
    profilePicKey
    phoneNumber
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
    id
    firstName
    lastName
    profilePicKey
    phoneNumber
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateUserVote = /* GraphQL */ `subscription OnCreateUserVote($filter: ModelSubscriptionUserVoteFilterInput) {
  onCreateUserVote(filter: $filter) {
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
            groupID
            votesReceived {
              nextToken
              __typename
            }
            votesGiven {
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
            groupID
            votesReceived {
              nextToken
              __typename
            }
            votesGiven {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserVoteSubscriptionVariables,
  APITypes.OnCreateUserVoteSubscription
>;
export const onUpdateUserVote = /* GraphQL */ `subscription OnUpdateUserVote($filter: ModelSubscriptionUserVoteFilterInput) {
  onUpdateUserVote(filter: $filter) {
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
            groupID
            votesReceived {
              nextToken
              __typename
            }
            votesGiven {
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
            groupID
            votesReceived {
              nextToken
              __typename
            }
            votesGiven {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserVoteSubscriptionVariables,
  APITypes.OnUpdateUserVoteSubscription
>;
export const onDeleteUserVote = /* GraphQL */ `subscription OnDeleteUserVote($filter: ModelSubscriptionUserVoteFilterInput) {
  onDeleteUserVote(filter: $filter) {
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
            groupID
            votesReceived {
              nextToken
              __typename
            }
            votesGiven {
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
            groupID
            votesReceived {
              nextToken
              __typename
            }
            votesGiven {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserVoteSubscriptionVariables,
  APITypes.OnDeleteUserVoteSubscription
>;
