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
} from "../../API";
import { ContextData, context } from "../../components/ContextProvider";
import { People } from "@mui/icons-material";
import PeopleSearch from "../components/peopleSearch";

type dareParameters = {
  recipient: string;
  description: string;
  userID: string;
};

async function createDare({ recipient, description, userID }: dareParameters) {
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
      votee: recipient,
    };

    const newVote = await API.graphql<GraphQLQuery<CreateVoteInput>>({
      query: mutations.createVote,
      variables: { input: voteDetails },
    });

    const voterDetails: CreateUserVoteInput = {
      voteId: newVote.data.createVote.id,
      userId: userID,
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

export default function Create() {
  const [description, setDescription] = useState("");
  const [recipient, setRecipient] = useState("");
  const { contextData, setContextData } = useContext(context);

  return (
    <>
      <Typography>I dare</Typography>
      {/**<TextField
        id="outlined-basic"
        label="Dare"
        variant="outlined"
        value={recipient}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setRecipient(event.target.value);
        }}
      />**/}
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
          const userID: string = contextData.userID;
          createDare({ recipient, description, userID });
        }}
      >
        Create
      </Button>
    </>
  );
}
