"use client";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Auth } from "aws-amplify";

type SignInParameters = {
  phoneNumber: string;
  password: string;
};

export async function signIn({ phoneNumber, password }: SignInParameters) {
  try {
    const user = await Auth.signIn(phoneNumber, password);
    console.log(user);
  } catch (error) {
    console.log("error signing in", error);
  }
}

export default function LogIn() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

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
