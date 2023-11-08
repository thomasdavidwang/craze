"use client";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import { API, Auth, Storage } from "aws-amplify";
import * as queries from "../graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import { context } from "../components/ContextProvider";
import { UsersByEmailQuery } from "../API";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { contextData, setContextData } = useContext(context);
  const router = useRouter();

  async function signIn() {
    try {
      await Auth.signIn(email, password);

      const user = await API.graphql<GraphQLQuery<UsersByEmailQuery>>({
        query: queries.usersByEmail,
        variables: { email: email },
      });

      const pic = await Storage.get(
        user.data.usersByEmail.items[0].email.slice(0,-9) + ".png"
      );

      setContextData({
        userID: user.data.usersByEmail.items[0].id,
        email: email,
        firstName: user.data.usersByEmail.items[0].firstName,
        lastName: user.data.usersByEmail.items[0].lastName,
        pic: pic,
      });

      router.push("/feed");
    } catch (error) {
      console.log("error signing in", error);
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
        onClick={() => signIn()}
      >
        Sign In
      </Button>
    </div>
  );
}
