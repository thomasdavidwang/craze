"use client";

import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button } from "@mui/material";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

type SignUpParameters = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

export async function signUp({
  firstName,
  lastName,
  phoneNumber,
}: SignUpParameters) {
  try {
    const { user } = await Auth.signUp({
      username: phoneNumber,
      password: "password",
      attributes: {
        given_name: firstName,
        family_name: lastName,
      },
      autoSignIn: {
        // optional - enables auto sign in after user is confirmed
        enabled: true,
      },
    });
    console.log(user);
  } catch (error) {
    console.log("error signing up:", error);
  }
}

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={firstName}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setFirstName(event.target.value);
        }}
      />
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={lastName}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setLastName(event.target.value);
        }}
      />
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={phoneNumber}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPhoneNumber(event.target.value);
        }}
      />
      <Button
        variant="outlined"
        onClick={() => signUp({ firstName, lastName, phoneNumber })}
      >
        Sign Up
      </Button>
    </div>
  );
}
