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
import {
  Box,
  Container,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { contextData, setContextData } = useContext(context);
  const router = useRouter();
  const [isPassword, setIsPassword] = useState(false);

  const left = -1000;
  const center = 0;
  const right = 1000;

  async function signIn() {
    if (isPassword) {
      try {
        await Auth.signIn(email + "@yale.edu", password);

        const user = await API.graphql<GraphQLQuery<UsersByEmailQuery>>({
          query: queries.usersByEmail,
          variables: { email: email + "@yale.edu" },
        });

        const pic = await Storage.get(user.data.usersByEmail.items[0].email);

        setContextData({
          userID: user.data.usersByEmail.items[0].id,
          email: email + "@yale.edu",
          firstName: user.data.usersByEmail.items[0].firstName,
          lastName: user.data.usersByEmail.items[0].lastName,
          pic: pic,
        });

        router.push("/feed");
      } catch (error) {
        console.log("error signing in", error);
      }
    } else {
      setIsPassword(true);
    }
  }

  return (
    <Stack
      spacing={2}
      sx={{ width: 1, height: "100%", p: 2 }}
      alignItems="center"
    >
      <Typography variant="h1">Welcome</Typography>
      <motion.div animate={{ x: !isPassword ? center : left }}>
        <Stack
          sx={{ display: !isPassword ? "block" : "none", height: 1 }}
          justifyContent="space-between"
        >
          <Typography variant="h2" sx={{ my: 2 }}>
            What's your email?
          </Typography>
          <TextField
            id="email"
            variant="outlined"
            value={email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(event.target.value);
            }}
            placeholder="first.last"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">@yale.edu</InputAdornment>
              ),
            }}
            sx={{ bgcolor: "action.hover", width: 1 }}
          />
          <Typography variant="h2" sx={{ my: 2 }} className="opacity-0">
            What's your email?
          </Typography>
        </Stack>
      </motion.div>
      <motion.div animate={{ x: !isPassword ? right : center }}>
        <Stack sx={{ display: !isPassword ? "none" : "block" }}>
          <Typography variant="h2" sx={{ my: 2 }}>
            What's your password?
          </Typography>
          <TextField
            id="password"
            variant="outlined"
            value={password}
            placeholder="password"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(event.target.value);
            }}
            sx={{ bgcolor: "action.hover", width: 1 }}
          />
        </Stack>
      </motion.div>
      <Button onClick={() => signIn()} sx={{ alignSelf: "flex-end" }}>
        <ArrowForwardIcon />
      </Button>
    </Stack>
  );
}
