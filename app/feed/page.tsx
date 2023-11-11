"use client";

import { useContext, useEffect, useState } from "react";
import {
  Dare,
  ListDaresQuery,
  ListDaresQueryVariables,
  UsersByEmailQuery,
} from "@/src/API";
import { API, Auth } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import DareCard from "./components/dareCard";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import * as queries from "@/src/graphql/queries";
import { Button, Container, Grid, Modal, Typography } from "@mui/material";
import { context } from "../components/ContextProvider";
import { useRouter } from "next/navigation";
import SignUpModal from "./components/signUpModal";

type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

const listDares = /* GraphQL */ `query ListDares(
  $filter: ModelDareFilterInput
  $limit: Int
  $nextToken: String
) {
  listDares(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
      emoji
      Votes {
        items {
          id
          voters {
            items {
              id
              voteId
              userId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          dareID
          votee
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<ListDaresQueryVariables, ListDaresQuery>;

export default function Feed() {
  const [dares, setDares] = useState<Dare[]>([]);
  const { contextData, setContextData } = useContext(context);
  const [touch, setTouch] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  async function fetchDares() {
    console.log("Fetching...");
    const res = await API.graphql<GraphQLQuery<ListDaresQuery>>({
      query: listDares,
    });

    const { items: items } = res.data?.listDares;

    console.log(items);

    items.sort(
      (item1, item2) =>
        item2.Votes.items[0].voters.items.length -
        item1.Votes.items[0].voters.items.length
    );

    // @ts-ignore: lol i still hate setState
    setDares(items);
  }

  useEffect(() => {
    fetchDares();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [touch]);

  useEffect(() => {
    Auth.currentAuthenticatedUser({
      bypassCache: false, // Optional and is false by default. If set to true, this call
      // will send a request to Cognito to get the latest user data.
    })
      .then(async (user) => {
        const userDetails = await API.graphql<GraphQLQuery<UsersByEmailQuery>>({
          query: queries.usersByEmail,
          variables: { email: user.attributes.email },
        });

        setContextData({
          userID: userDetails.data.usersByEmail.items[0].id,
          email: user.attributes.email,
          firstName: userDetails.data.usersByEmail.items[0].firstName,
          lastName: userDetails.data.usersByEmail.items[0].lastName,
          profilePicKey: userDetails.data.usersByEmail.items[0].profilePicKey,
        });
      })
      .catch(() => console.log("Not signed in."));
  }, []);

  return (
    <Grid container justifyContent="center">
      <SignUpModal open={openModal} setOpen={setOpenModal} />
      <Stack
        alignItems="center"
        justifyContent="center"
        spacing={2}
        padding={2}
        sx={{ width: 1, maxWidth: 600 }}
      >
        {dares.map((dare, idx) => {
          return (
            <DareCard
              dare={dare}
              index={idx}
              key={dare.id}
              setTouch={setTouch}
            />
          );
        })}
      </Stack>
      <Button
        variant="contained"
        className="bg-fuchsia-500 hover:bg-fuchsia-400"
        onClick={() => {
          if (contextData && contextData.userID) {
            router.push("/create");
          } else {
            setOpenModal(true);
          }
        }}
        sx={{
          position: "fixed",
          color: "white",
          borderRadius: "9999px",
          p: 2,
          fontWeight: "bold",
          zIndex: "modal",
          bottom: 10,
          py: 1,
          px: 10,
          my: 1,
          width: 1,
          maxWidth: 500,
        }}
      >
        Dare a friend 😈
      </Button>
    </Grid>
  );
}
