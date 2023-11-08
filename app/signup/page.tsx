"use client";

import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import { Button } from "@mui/material";
import { Auth, Storage } from "aws-amplify";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import { UsersByEmailQuery } from "../API";
import { context } from "../components/ContextProvider";
import { useRouter } from 'next/navigation'


export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { contextData, setContextData } = useContext(context);
  const router = useRouter()

  async function signUp() {
    try {
      const newUser  = await Auth.signUp({
        username: email,
        password: password,
        autoSignIn: {
          enabled: true,
        },
      });
      console.log(newUser.user);

      const user = await API.graphql<GraphQLQuery<UsersByEmailQuery>>({
        query: queries.usersByEmail,
        variables:  {
          email: email,
        } ,
      });

      const pic = await Storage.get(
        user.data.usersByEmail.items[0].email.slice(0,-9) + ".png"
      );

      setContextData({
        userID: user.data.usersByEmail.items[0].id,
        firstName: user.data.usersByEmail.items[0].firstName,
        lastName: user.data.usersByEmail.items[0].lastName,
        email: email,
        pic: pic,
      });

      router.push('/feed')
    } catch (error) {
      console.log("error signing up:", error);
    }
  }

  return (
    <div>
      <TextField
        id="outlined-basic"
        variant="outlined"
        value={email}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setEmail(event.target.value);
        }}
      />
      <TextField
        id="outlined-basic"
        variant="outlined"
        value={password}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPassword(event.target.value);
        }}
      />
      <Button
        variant="outlined"
        onClick={() => signUp()}
      >
        Sign Up
      </Button>
    </div>
  );
}
