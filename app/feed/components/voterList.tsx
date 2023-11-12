"use client";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import ProfileImage from "./profileImage";
import * as queries from "@/src/graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import { GetUserQuery, ListUsersQuery, ModelUserFilterInput } from "@/src/API";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { API } from "aws-amplify";

export default function VoterList({ dare }) {
  const [voters, setVoters] = useState([]);

  async function getVoters() {
    const sortedList = dare.Votes.items[0].voters.items.toSorted(
      (voteA, voteB) => {
        let dateA = new Date(voteA.createdAt).getTime();
        let dateB = new Date(voteB.createdAt).getTime();
        return dateB - dateA;
      }
    );

    const userFilters: ModelUserFilterInput[] = sortedList.map((userVote) => {
      return {
        id: {
          eq: userVote.userId,
        },
      };
    });

    console.log(userFilters);

    try {
      const voterList = await API.graphql<GraphQLQuery<ListUsersQuery>>({
        query: queries.listUsers,
        variables: { or: userFilters },
      });

      setVoters(voterList.data.listUsers.items);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getVoters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dare]);

  return (
    <Stack sx={{ borderTop: 1, borderColor: "grey.800", py: 2 }} spacing={1}>
      {voters[0] && (
        <Typography variant="h4" fontWeight="bold">
          {"Dared by: " + voters[0].firstName + " " + voters[0].lastName}
        </Typography>
      )}
      <Typography variant="h4" fontWeight="bold">
        {voters.length + " Likes"}
      </Typography>
      <Grid container mt={1} spacing={1}>
        {voters.map(
          (voter, idx) =>
            voter && (
              <Grid item key={voter.profilePicKey} xs={4}>
                <Stack
                  direction="row"
                  alignItems="center"
                  key={idx}
                  spacing={1}
                >
                  <ProfileImage
                    src={voter}
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
    </Stack>
  );
}
