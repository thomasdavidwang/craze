"use client";

import { Dare } from "@/app/API";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import IconButton from "@mui/material/IconButton";
import * as queries from "../../graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import { GetUserQuery } from "../../API";
import { API } from "aws-amplify";
import { useEffect, useState } from "react";

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

  async function vote() {}

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
