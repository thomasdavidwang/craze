"use client";

import { CreateUserVoteInput, CreateUserVoteMutation, Dare } from "@/app/API";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import IconButton from "@mui/material/IconButton";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import { GetUserQuery } from "../../API";
import { API, Storage } from "aws-amplify";
import { useContext, useEffect, useState } from "react";
import { context } from "@/app/components/ContextProvider";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Image from "next/image";

type DareCardProps = {
  dare: Dare;
};

type Votee = {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
};

export default function DareCard({ dare: dare }: DareCardProps) {
  const [votee, setVotee] = useState<Votee>();
  const [voteCount, setVoteCount] = useState(0);
  const [pic, setPic] = useState("");
  const { contextData, setContextData } = useContext(context);

  async function getVotee() {
    try {
      const user = await API.graphql<GraphQLQuery<GetUserQuery>>({
        query: queries.getUser,
        variables: { id: dare.Votes.items[0].votee },
      });

      const picLink = await Storage.get(
        user.data.getUser.email.slice(0, -9) + ".png"
      );

      setPic(picLink);

      setVotee({
        firstName: user.data.getUser.firstName,
        lastName: user.data.getUser.lastName,
        email: user.data.getUser.email,
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
    <Card variant="outlined" sx={{ minWidth: 500, maxWidth: 500 }}>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        {votee && (
          <>
            <div>
              <Stack direction="row" spacing={1} alignItems="center">
                <Image src={pic} alt="profile pic" width={50} height={50} />
                <Stack>
                  <Typography variant="h2">{votee.firstName}</Typography>
                  <Typography variant="h2">{votee.lastName}</Typography>
                </Stack>
                <Typography variant="h4">should</Typography>
              </Stack>
            </div>
          </>
        )}
        <Link href={"/feed/" + dare.Votes.items[0].id}>
          <Typography variant="h3">{dare.description}</Typography>
        </Link>
        <Stack alignItems="center" sx={{ mx: 1, my: 2 }}>
          <Typography variant="h3">{voteCount}</Typography>
          <IconButton onClick={vote}>
            <ArrowUpwardIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Card>
  );
}
