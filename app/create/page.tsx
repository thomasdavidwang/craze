"use client";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { API, Auth } from "aws-amplify";
import { useState } from "react";
import * as mutations from "../graphql/mutations";
import { GraphQLQuery } from "@aws-amplify/api";
import { CreateDareInput, CreateDareMutation, CreateVoteInput } from "../API";

type dareParameters = {
  recipient: string;
  description: string;
};

async function createDare({ recipient, description }: dareParameters) {
  try {
    const user = await Auth.currentAuthenticatedUser();
    console.log(user);

    const dareDetails: CreateDareInput = {
      description: description,
    };

    const newDare = await API.graphql<GraphQLQuery<CreateDareMutation>>({
      query: mutations.createDare,
      variables: { input: dareDetails },
    });

    const voteDetails: CreateVoteInput = {
      dareID: newDare.data?.createDare?.id,
      voters: lastName,
    };
  } catch (error) {
    console.log("error creating dare:", error);
  }
}

export default function Create() {
  const [description, setDescription] = useState("");
  const [recipient, setRecipient] = useState("");

  return (
    <div>
      <Typography>I dare</Typography>
      <TextField
        id="outlined-basic"
        label="person"
        variant="outlined"
        value={recipient}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setRecipient(event.target.value);
        }}
      />
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
        onClick={() => createDare({ recipient, description })}
      >
        Create
      </Button>
    </div>
  );
}
