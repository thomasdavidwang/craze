"use client";

import { useContext, useEffect, useState } from "react";
import * as queries from "../graphql/queries";
import { Dare, ListDaresQuery, ListDaresQueryVariables } from "../API";
import { API } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import DareCard from "./components/dareCard";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Link from "next/link";
import { Container, Grid, Typography } from "@mui/material";
import { context } from "../components/ContextProvider";
import { useRouter } from "next/navigation";

export default function Feed() {
  const [dares, setDares] = useState<Dare[]>([]);
  const { contextData, setContextData } = useContext(context);
  const [touch, setTouch] = useState(0);
  const [voteCounts, setVoteCounts] = useState<number[]>([]);
  const router = useRouter();

  async function fetchDares() {
    console.log("Fetching...");
    const res = await API.graphql<GraphQLQuery<ListDaresQuery>>({
      query: queries.listDares,
    });

    const { items: items } = res.data?.listDares;

    items.sort(
      (item1, item2) =>
        item2.Votes.items[0].voters.items.length -
        item1.Votes.items[0].voters.items.length
    );

    // @ts-ignore: lol i still hate setState
    setDares(items);

    setVoteCounts(items.map((dare) => dare.Votes.items[0].voters.items.length));
  }

  useEffect(() => {
    fetchDares();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [touch]);

  return (
    <Grid container justifyContent="center">
      <Stack
        alignItems="center"
        justifyContent="center"
        spacing={2}
        padding={2}
        className="max-w-[800px]"
        sx={{ h: 1 }}
      >
        {dares.map((dare, idx) => {
          return (
            <DareCard
              dare={dare}
              index={idx}
              key={idx}
              setTouch={setTouch}
              voteCount={voteCounts[idx]}
            />
          );
        })}
      </Stack>
      <Box
        position="fixed"
        sx={{
          zIndex: "modal",
          bottom: 10,
          py: 1,
          px: 10,
          width: 1,
          maxWidth: 500,
        }}
        onClick={() => {
          if (contextData && contextData.userID) {
            router.push("/create");
          } else {
            router.push("/signup");
          }
        }}
      >
        <Typography
          fontWeight="bold"
          align="center"
          sx={{ bgcolor: "secondary.main", borderRadius: "9999px", p: 2 }}
        >
          Dare a friend 😈
        </Typography>
      </Box>
    </Grid>
  );
}
