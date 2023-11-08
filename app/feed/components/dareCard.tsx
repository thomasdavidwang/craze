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
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";

type Votee = {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
};

type Voter = {
  firstName: string;
  lastName: string;
  pic: string;
};

export default function DareCard({ dare, index, setTouch, voteCount }) {
  const [votee, setVotee] = useState<Votee>();
  const [voters, setVoters] = useState([]);
  const [pic, setPic] = useState("");
  const { contextData, setContextData } = useContext(context);
  const [open, setOpen] = useState(false);
  const router = useRouter();

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

  async function vote() {
    if (contextData && contextData.userID) {
      try {
        const userVoteDetails: CreateUserVoteInput = {
          voteId: dare.Votes.items[0].id,
          userId: contextData.userID,
        };

        const vote = await API.graphql<GraphQLQuery<CreateUserVoteMutation>>({
          query: mutations.createUserVote,
          variables: { input: userVoteDetails },
        });

        setTouch((prevState) => prevState + 1);
      } catch (error) {
        console.log(error);
      }
    } else {
      router.push("/signup");
    }
  }

  async function getVoters() {
    const voterList = dare.Votes.items[0].voters.items.map(
      (userVotes) => userVotes.userId
    );

    Promise.all(
      voterList.map(async (voterID) => {
        try {
          const user = await API.graphql<GraphQLQuery<GetUserQuery>>({
            query: queries.getUser,
            variables: { id: voterID },
          });

          const picLink = await Storage.get(
            user.data.getUser.email.slice(0, -9) + ".png"
          );

          return {
            firstName: user.data.getUser.firstName,
            lastName: user.data.getUser.lastName,
            pic: picLink,
          };
        } catch (error) {
          console.log(error);
        }
      })
    ).then((votersData) => setVoters(votersData));
  }

  useEffect(() => {
    getVotee();
    getVoters();
  }, []);

  return (
    <Card variant="outlined" sx={{ width: 1, padding: 1 }}>
      <Stack direction="row" spacing={1} alignItems="start">
        <Typography sx={{ pt: 1, pr: 1 }} fontWeight="700">
          {"#" + (index + 1)}
        </Typography>
        <Stack spacing={2} alignItems="left" sx={{ flexGrow: 1 }}>
          <div>
            {votee && (
              <Stack
                direction="row"
                spacing={1}
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack spacing={2}>
                  <CardActionArea>
                    <CardContent onClick={() => setOpen((value) => !value)}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Image
                          src={pic}
                          alt="profile pic"
                          width={48}
                          height={48}
                          className="rounded-full object-cover max-h-12 max-w-12"
                        />
                        <Typography variant="h2">
                          {votee.firstName + " " + votee.lastName}
                        </Typography>
                        <Typography variant="h4">should</Typography>
                      </Stack>
                      <Typography variant="h2">{dare.description}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Stack>
                <Stack alignItems="center" sx={{ mx: 1, my: 2 }}>
                  <Typography variant="h3">{voteCount}</Typography>
                  <IconButton onClick={vote}>
                    <ArrowUpwardIcon />
                  </IconButton>
                </Stack>
              </Stack>
            )}
          </div>
          <motion.div>
            {open
              ? voters && (
                  <Grid
                    container
                    mt={1}
                    spacing={1}
                    sx={{ borderTop: 1, borderColor: "grey.800" }}
                  >
                    {voters.map(
                      (voter, idx) =>
                        voter && (
                          <Grid item key={idx}>
                            <Stack
                              direction="row"
                              alignItems="center"
                              key={idx}
                              spacing={1}
                            >
                              <Image
                                src={voter.pic}
                                alt="profile pic"
                                width={36}
                                height={36}
                                className="rounded-full object-cover max-h-8 max-w-8"
                              />
                              <Typography variant="h4">
                                {voter.firstName + " " + voter.lastName}
                              </Typography>
                            </Stack>
                          </Grid>
                        )
                    )}
                  </Grid>
                )
              : null}
          </motion.div>
        </Stack>
      </Stack>
    </Card>
  );
}
