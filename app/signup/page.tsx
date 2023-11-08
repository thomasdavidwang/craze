"use client";

import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import {
  Box,
  Button,
  Container,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import { Auth, Storage } from "aws-amplify";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import { UsersByEmailQuery } from "../API";
import { context } from "../components/ContextProvider";
import { useRouter } from "next/navigation";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { contextData, setContextData } = useContext(context);
  const router = useRouter();
  const [isPassword, setIsPassword] = useState(false);

  const left = -1000;
  const center = 0;
  const right = 1000;

  async function signUp() {
    if (isPassword) {
      try {
        const newUser = await Auth.signUp({
          username: email + "@yale.edu",
          password: password,
          autoSignIn: {
            enabled: true,
          },
        });
        console.log(newUser.user);

        const user = await API.graphql<GraphQLQuery<UsersByEmailQuery>>({
          query: queries.usersByEmail,
          variables: {
            email: email + "@yale.edu",
          },
        });

        const pic = await Storage.get(email + ".png");

        setContextData({
          userID: user.data.usersByEmail.items[0].id,
          firstName: user.data.usersByEmail.items[0].firstName,
          lastName: user.data.usersByEmail.items[0].lastName,
          email: email + "@yale.edu",
          pic: pic,
        });

        router.push("/feed");
      } catch (error) {
        console.log("error signing up:", error);
      }
    } else {
      setIsPassword(true);
    }
  }

  return (
    <Stack spacing={2} sx={{ width: 1, p: 2 }} alignItems="center">
      <Typography variant="h1">Sign Up</Typography>
      <motion.div animate={{ x: !isPassword ? center : left }}>
        <Box sx={{ display: !isPassword ? "block" : "none" }}>
          <Typography variant="h2">What's your email?</Typography>
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
        </Box>
      </motion.div>
      <motion.div animate={{ x: !isPassword ? right : center }}>
        <Box sx={{ display: !isPassword ? "none" : "block" }}>
          <Typography variant="h2">What's your password?</Typography>
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
        </Box>
      </motion.div>
      <Button onClick={() => signUp()}>
        <ArrowForwardIcon />
      </Button>
    </Stack>
  );
}
