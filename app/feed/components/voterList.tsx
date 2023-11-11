"use client";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import ProfileImage from "./profileImage";
import * as queries from "@/src/graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import { GetUserQuery } from "@/src/API";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { API } from "aws-amplify";

export default function VoterList({ dare }) {
  const [voters, setVoters] = useState([]);

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

          /**const picLink = await Storage.get(
            user.data.getUser.email.slice(0, -9) + ".png"
          );*/

          return {
            firstName: user.data.getUser.firstName,
            lastName: user.data.getUser.lastName,
            profilePicKey: user.data.getUser.profilePicKey,
          };
        } catch (error) {
          console.log(error);
        }
      })
    ).then((votersData) => setVoters(votersData));
  }

  useEffect(() => {
    getVoters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
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
              <Stack direction="row" alignItems="center" key={idx} spacing={1}>
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
  );
}
