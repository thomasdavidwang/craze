"use client";

import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button } from "@mui/material";
import { Auth } from "aws-amplify";
import { API } from "aws-amplify";
import * as mutations from "../graphql/mutations";
import { GraphQLQuery } from "@aws-amplify/api";
import { CreateUserInput, CreateUserMutation } from "../API";

type SignUpParameters = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
};

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  async function signUp({
    firstName,
    lastName,
    phoneNumber,
    password,
  }: SignUpParameters) {
    try {
      const { user } = await Auth.signUp({
        username: phoneNumber,
        password: password,
        attributes: {
          given_name: firstName,
          family_name: lastName,
        },
        autoSignIn: {
          enabled: true,
        },
      });
      console.log(user);

      const userDetails: CreateUserInput = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
      };

      const newUser = await API.graphql<GraphQLQuery<CreateUserMutation>>({
        query: mutations.createUser,
        variables: { input: userDetails },
      });
      console.log(newUser);
    } catch (error) {
      console.log("error signing up:", error);
    }
  }

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="First Name"
        variant="outlined"
        value={firstName}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setFirstName(event.target.value);
        }}
      />
      <TextField
        id="outlined-basic"
        label="Last Name"
        variant="outlined"
        value={lastName}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setLastName(event.target.value);
        }}
      />
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
        onClick={() => signUp({ firstName, lastName, phoneNumber, password })}
      >
        Sign Up
      </Button>
    </div>
  );
}
