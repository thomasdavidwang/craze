"use client";

import { GetDareQuery, GetUserQuery, GetVoteQuery } from "@/app/API";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { GraphQLQuery } from "@aws-amplify/api";
import { API } from "aws-amplify";
import * as queries from "../../graphql/queries";

type Votee = {
  firstName: string;
  lastName: string;
  id: string;
};

export default function DarePage({ params }: { params: { vote: string } }) {
  const [dare, setDare] = useState("");
  const [votee, setVotee] = useState<Votee>();
  const [voters, setVoters] = useState([]);

  async function getVote() {
    const vote = await API.graphql<GraphQLQuery<GetVoteQuery>>({
      query: queries.getVote,
      variables: { id: params.vote },
    });

    getDare(vote.data.getVote.dareID);

    getVotee(vote.data.getVote.votee);

    setVoters(vote.data.getVote.voters.items);
  }

  async function getVotee(id: string) {
    try {
      const user = await API.graphql<GraphQLQuery<GetUserQuery>>({
        query: queries.getUser,
        variables: { id: id },
      });

      setVotee({
        firstName: user.data.getUser.firstName,
        lastName: user.data.getUser.lastName,
        id: user.data.getUser.id,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getDare(id: string) {
    const dare = await API.graphql<GraphQLQuery<GetDareQuery>>({
      query: queries.getDare,
      variables: { id: id },
    });

    setDare(dare.data.getDare.description);
  }

  useEffect(() => {
    getVote();
  }, []);

  return (
    <>
      <Typography variant="h3">{dare}</Typography>
      {votee && (
        <Typography variant="h3">
          {votee.firstName + " " + votee.lastName}
        </Typography>
      )}
      {voters &&
        voters.map((voter, idx) => {
          return (
            <div key={idx}>
              <Typography>
                {voter.user.firstName + " " + voter.user.lastName}
              </Typography>
            </div>
          );
        })}
    </>
  );
}
