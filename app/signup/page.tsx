"use client";

import TextField from "@mui/material/TextField";
import { useContext, useEffect, useState } from "react";
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
import * as queries from "@/src/graphql/queries";
import * as mutations from "@/src/graphql/mutations";
import { GraphQLQuery } from "@aws-amplify/api";
import { UpdateUserMutation, UsersByEmailQuery } from "@/src/API";
import { context } from "../components/ContextProvider";
import { useRouter } from "next/navigation";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { red } from "@mui/material/colors";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { contextData, setContextData } = useContext(context);
  const [inputIsValid, setInputIsValid] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();
  const [isPassword, setIsPassword] = useState(false);

  const left = -1000;
  const center = 0;
  const right = 1000;

  useEffect(
    () => {
      if (isPassword) {
        if (password.length < 6) {
          setInputIsValid(false);
        } else {
          setInputIsValid(true);
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [password]
  );

  async function signUp() {
    if (isPassword) {
      const user = await API.graphql<GraphQLQuery<UsersByEmailQuery>>({
        query: queries.usersByEmail,
        variables: { email: email + "@yale.edu" },
      });

      if (user.data.usersByEmail.items.length == 0) {
        setError("Please enter your @yale.edu email.");
      } else {
        if (user.data.usersByEmail.items[0].hasSignedUp === true) {
          try {
            await Auth.signIn(email + "@yale.edu", password);

            //const pic = await Storage.get(user.data.usersByEmail.items[0].email);

            setContextData({
              userID: user.data.usersByEmail.items[0].id,
              email: email + "@yale.edu",
              firstName: user.data.usersByEmail.items[0].firstName,
              lastName: user.data.usersByEmail.items[0].lastName,
              pic: user.data.usersByEmail.items[0].profilePicKey,
            });

            router.push("/feed");
          } catch (error) {
            console.log(error);
            setError("Wrong email or password");
          }
        } else {
          try {
            const newUser = await Auth.signUp({
              username: email + "@yale.edu",
              password: password,
              autoSignIn: {
                enabled: true,
              },
            });
            console.log(newUser.user);

            await API.graphql<GraphQLQuery<UpdateUserMutation>>({
              query: mutations.updateUser,
              variables: {
                input: {
                  id: user.data.usersByEmail.items[0].id,
                  hasSignedUp: true,
                },
              },
            });

            //const pic = await Storage.get(email + ".png");

            setContextData({
              userID: user.data.usersByEmail.items[0].id,
              firstName: user.data.usersByEmail.items[0].firstName,
              lastName: user.data.usersByEmail.items[0].lastName,
              email: email + "@yale.edu",
              pic: user.data.usersByEmail.items[0].profilePicKey,
            });

            router.push("/feed");
          } catch (error) {
            console.log(error);
          }
        }
      }
    } else {
      setIsPassword(true);
      setInputIsValid(false);
    }
  }

  return (
    <Stack
      spacing={2}
      sx={{ width: 1, p: 2 }}
      className="h-screen"
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography variant="h1">Welcome</Typography>
      {!isPassword && (
        <motion.div animate={{ x: !isPassword ? center : left }}>
          <Typography variant="h2" sx={{ my: 2 }}>
            What&apos;s your email?
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
        </motion.div>
      )}
      {isPassword && (
        <motion.div animate={{ x: !isPassword ? right : center }}>
          <Typography variant="h2" sx={{ my: 2 }}>
            What&apos;s your password?
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
          <Typography variant="h4" sx={{ py: 1 }} color="error.main">
            {error}
          </Typography>
        </motion.div>
      )}
      <Button
        onClick={(e) => {
          e.preventDefault();
          signUp();
        }}
        type="submit"
        disabled={!inputIsValid}
        sx={{ alignSelf: "flex-end" }}
      >
        <ArrowForwardIcon />
      </Button>
    </Stack>
  );
}
