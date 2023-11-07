"use client";

import { useEffect, useState } from "react";
import * as queries from "../graphql/queries";
import { Dare, ListDaresQuery, ListDaresQueryVariables } from "../API";
import { API } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import DareCard from "./components/dareCard";

export default function Feed() {
  const [dares, setDares] = useState<Dare[]>([]);

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

    variables.nextToken = nextToken;

    setDares((prevstate: Dare[]) => {
      return [...prevstate, ...items];
    });
  }

  useEffect(() => {
    fetchDares();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {dares.map((dare, idx) => {
        return (
          <div key={idx}>
            <DareCard dare={dare} />
          </div>
        );
      })}
    </div>
  );
}
