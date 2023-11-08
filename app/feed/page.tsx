"use client";

import { useEffect, useState } from "react";
import * as queries from "../graphql/queries";
import { Dare, ListDaresQuery, ListDaresQueryVariables } from "../API";
import { API } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import DareCard from "./components/dareCard";
import Stack from "@mui/material/Stack";
import Footer from "./components/footer";

export default function Feed() {
  const [dares, setDares] = useState<Dare[]>([]);
  const [finished, setFinished] = useState(false);

  // Fetch first 20 records
  const variables: ListDaresQueryVariables = {
    limit: 20,
  };

  async function fetchDares() {
    console.log("Fetching...");
    const res = await API.graphql<GraphQLQuery<ListDaresQuery>>({
      query: queries.listDares,
      variables: variables,
    });

    const { items: items, nextToken } = res.data?.listDares;

    if (items.length !== 0) {
      variables.nextToken = nextToken;

      // @ts-ignore: lol i still hate setState
      setDares((prevstate: Dare[]) => {
        return [...prevstate, ...items];
      });
    } else {
      setFinished(true);
    }
  }

  useEffect(() => {
    fetchDares();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Stack alignItems="center" spacing={2}>
        {dares.map((dare, idx) => {
          console.log(dare);
          return (
            <div key={idx}>
              <DareCard dare={dare} />
            </div>
          );
        })}
      </Stack>
      <Footer />
    </>
  );
}
