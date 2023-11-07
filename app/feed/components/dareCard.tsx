"use client";

import { CreateUserVoteInput, CreateUserVoteMutation, Dare } from "@/app/API";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import IconButton from "@mui/material/IconButton";
import * as mutations from "../../graphql/mutations";
import { GraphQLQuery } from "@aws-amplify/api";
import { GetUserQuery } from "../../API";
import { API } from "aws-amplify";
import { useContext, useEffect, useState } from "react";
import { context } from "@/app/components/ContextProvider";

type DareCardProps = {
  dare: Dare;
};

type Votee = {
  firstName: string;
  lastName: string;
  id: string;
};

export default function DareCard({ dare: dare }: DareCardProps) {
  const [votee, setVotee] = useState<Votee>();
  const [voteCount, setVoteCount] = useState(0);
  const { contextData, setContextData } = useContext(context);

  async function getVotee() {
    try {
      const user = await API.graphql<GraphQLQuery<GetUserQuery>>({
        query: queries.getUser,
        variables: { id: dare.Votes.items[0].votee },
      });

      console.log(user);

      setVotee({
        firstName: user.data.getUser.firstName,
        lastName: user.data.getUser.lastName,
        id: user.data.getUser.id,
      });
    } catch (error) {
      console.log(error);
    }
  }

  function countVotes() {
    setVoteCount(dare.Votes.items[0].voters.items.length);
  }

  async function vote() {
    try {
      const userVoteDetails: CreateUserVoteInput = {
        voteId: dare.Votes.items[0].id,
        userId: contextData.userID,
      };

      console.log(userVoteDetails);

      const vote = await API.graphql<GraphQLQuery<CreateUserVoteMutation>>({
        query: mutations.createUserVote,
        variables: { input: userVoteDetails },
      });

      console.log(vote);
      setVoteCount((prev) => prev + 1);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getVotee();
    countVotes();
  }, []);

  console.log(dare);

  return (
    <Card variant="outlined">
      <Typography variant="h3">{dare.description}</Typography>
      {votee && (
        <Typography variant="h3">
          {votee.firstName + " " + votee.lastName}
        </Typography>
      )}
      <Typography variant="h3">{voteCount}</Typography>
      <IconButton onClick={vote}>
        <ArrowUpwardIcon />
      </IconButton>
    </Card>
  );
}
