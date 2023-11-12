"use client";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import ProfileImage from "./profileImage";
import * as queries from "@/src/graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import {
  GetUserQuery,
  GetVoteQuery,
  ListUsersQuery,
  ModelUserFilterInput,
} from "@/src/API";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { API } from "aws-amplify";

export default function VoterList({ dare }) {
  const [voters, setVoters] = useState([]);

  async function getVoters(Vote) {
    try {
      const voterList = await API.graphql<GraphQLQuery<GetVoteQuery>>({
        query: queries.getVote,
        variables: { id: Vote.id },
      });

      const temp = voterList.data.getVote.voters.items.toSorted(
        (uservote1, uservote2) => {
          let date1 = new Date(uservote1.createdAt).getTime();
          let date2 = new Date(uservote2.createdAt).getTime();

          return date1 - date2;
        }
      );

      // @ts-ignore is not assignable to parameter of type 'SetStateAction<any[]>'
      setVoters(temp);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getVoters(dare.Votes.items[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dare]);

  return (
    <Stack sx={{ borderTop: 1, borderColor: "grey.800", py: 2 }} spacing={1}>
      {voters[0] && (
        <Typography variant="h4" fontWeight="bold">
          {"Dared by: " +
            voters[0].user.firstName +
            " " +
            voters[0].user.lastName}
        </Typography>
      )}
      <Typography variant="h4" fontWeight="bold">
        {voters.length + " Likes"}
      </Typography>
      <Grid container mt={1} spacing={1}>
        {voters.map(
          (voter, idx) =>
            voter && (
              <Grid item key={voter.user.id} xs={4}>
                <Stack
                  direction="row"
                  alignItems="center"
                  key={idx}
                  spacing={1}
                >
                  <ProfileImage
                    src={voter.user}
                    width={36}
                    height={36}
                    className="rounded-full object-cover max-h-8 max-w-8"
                  />
                  <Typography variant="h4">
                    {voter.user.firstName + " " + voter.user.lastName}
                  </Typography>
                </Stack>
              </Grid>
            )
        )}
      </Grid>
    </Stack>
  );
}
