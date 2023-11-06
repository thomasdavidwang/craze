"use client";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import { API, Auth } from "aws-amplify";
import * as queries from "../graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import { context } from "../components/ContextProvider";
import { UsersByPhoneNumberQuery } from "../API";

type SignInParameters = {
  phoneNumber: string;
  password: string;
};

export default function LogIn() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const { userID, setUserID } = useContext(context);

  async function signIn({ phoneNumber, password }: SignInParameters) {
    try {
      await Auth.signIn(phoneNumber, password);

      const user = await API.graphql<GraphQLQuery<UsersByPhoneNumberQuery>>({
        query: queries.usersByPhoneNumber,
        variables: { phoneNumber: phoneNumber },
      });

      setUserID(user.data.usersByPhoneNumber.items[0].id);
    } catch (error) {
      console.log("error signing in", error);
    }
  }

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Phone Number"
        variant="outlined"
        value={phoneNumber}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPhoneNumber(event.target.value);
        }}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        value={password}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPassword(event.target.value);
        }}
      />
      <Button
        variant="outlined"
        onClick={() => signIn({ phoneNumber, password })}
      >
        Sign In
      </Button>
    </div>
  );
}
