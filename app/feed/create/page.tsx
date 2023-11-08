"use client";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { API } from "aws-amplify";
import { useContext, useState } from "react";
import * as mutations from "../../graphql/mutations";
import { GraphQLQuery } from "@aws-amplify/api";
import {
  CreateDareInput,
  CreateDareMutation,
  CreateUserVoteInput,
  CreateVoteInput,
  User,
} from "../../API";
import { ContextData, context } from "../../components/ContextProvider";
import { People } from "@mui/icons-material";
import PeopleSearch from "../components/peopleSearch";

export default function Create() {
  const [description, setDescription] = useState("");
  const [recipient, setRecipient] = useState<User>();
  const { contextData, setContextData } = useContext(context);

  async function createDare() {
    try {
      const dareDetails: CreateDareInput = {
        description: description,
      };

      const newDare = await API.graphql<GraphQLQuery<CreateDareMutation>>({
        query: mutations.createDare,
        variables: { input: dareDetails },
      });

      const voteDetails: CreateVoteInput = {
        dareID: newDare.data?.createDare?.id,
        votee: recipient.id,
      };

      const newVote = await API.graphql<GraphQLQuery<CreateVoteInput>>({
        query: mutations.createVote,
        variables: { input: voteDetails },
      });

      const voterDetails: CreateUserVoteInput = {
        voteId: newVote.data.createVote.id,
        userId: contextData.userID,
      };

      const newVoter = await API.graphql<GraphQLQuery<CreateUserVoteInput>>({
        query: mutations.createUserVote,
        variables: { input: voterDetails },
      });

      console.log(newVoter);
    } catch (error) {
      console.log("error creating dare:", error);
    }
  }

  return (
    <>
      <Typography>I dare</Typography>
      <PeopleSearch selection={recipient} setSelection={setRecipient} />
      <Typography>to</Typography>
      <TextField
        id="outlined-basic"
        label="Dare"
        variant="outlined"
        value={description}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setDescription(event.target.value);
        }}
      />
      <Button
        variant="outlined"
        onClick={() => {
          createDare();
        }}
      >
        Create
      </Button>
    </>
  );
}
