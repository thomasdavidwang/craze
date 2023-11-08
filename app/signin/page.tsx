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
    <Container sx={{ width: 1, margin: 5 }}>
      <Stack spacing={2} alignItems="center">
        <Typography variant="h1">Sign In</Typography>
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
              sx={{ bgcolor: "action.hover", width: 300 }}
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
              sx={{ bgcolor: "action.hover", width: 300 }}
            />
          </Box>
        </motion.div>
        <Button onClick={() => signIn()}>
          <ArrowForwardIcon />
        </Button>
      </Stack>
    </Container>
  );
}
