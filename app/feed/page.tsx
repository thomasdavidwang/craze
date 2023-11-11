"use client";

import { useContext, useEffect, useState } from "react";
import {
  Dare,
  ListDaresQuery,
  SearchUsersQuery,
  SearchableDareFilterInput,
  SearchableUserFilterInput,
  UsersByEmailQuery,
} from "@/src/API";
import { API, Auth } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import DareCard from "./components/dareCard";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import * as queries from "@/src/graphql/queries";
import { context } from "../components/ContextProvider";
import { useRouter } from "next/navigation";
import SignUpModal from "./components/signUpModal";
import { groupIDs } from "../utils/group-enum";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { text } from "stream/consumers";

export default function Feed() {
  const [dares, setDares] = useState<Dare[]>([]);
  const { contextData, setContextData } = useContext(context);
  const [touch, setTouch] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [textLabel, setTextLabel] = useState("");
  const [options, setOptions] = useState([]);
  const [searchBy, setSearchBy] = useState("dare");

  const router = useRouter();

  async function fetchDares() {
    console.log("Fetching...");

    let dareFilters: SearchableDareFilterInput[] = [];

    if (textLabel !== "") {
      const filters: SearchableUserFilterInput[] = [];

      const words = textLabel.split(" ");

      const firstNameFilter: SearchableUserFilterInput = {
        firstName: { wildcard: "*" + words[0] + "*" },
      };
      filters.push(firstNameFilter);

      if (words.length > 1) {
        const lastNameFilter: SearchableUserFilterInput = {
          lastName: { wildcard: "*" + words[1] + "*" },
        };

        filters.push(lastNameFilter);
      }

      const users = await API.graphql<GraphQLQuery<SearchUsersQuery>>({
        query: queries.searchUsers,
        variables: {
          filter: { groupID: { eq: groupIDs["Yale-2027"] }, and: filters },
          limit: 20,
        },
      });

      console.log(users.data.searchUsers.items);

      for (let user of users.data.searchUsers.items) {
        let temp = user.votesReceived.items.map((vote) => {
          return { id: { eq: vote.dareID } };
        });

        dareFilters.push(...temp);
      }

      console.log(dareFilters);
    }

    const res = await API.graphql<GraphQLQuery<ListDaresQuery>>({
      query: queries.listDares,
      variables: { filters: { or: dareFilters } },
    });

    const { items: items } = res.data?.listDares;

    console.log(res);

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
  }, [touch, textLabel]);

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

  function handleSearchToggle(
    event: React.MouseEvent<HTMLElement>,
    newSearchBy: string
  ) {
    console.log(newSearchBy);
    setSearchBy(newSearchBy);
  }

  return (
    <Stack alignItems="center">
      <SignUpModal open={openModal} setOpen={setOpenModal} />
      <Stack direction="row" spacing={1}>
        <TextField
          value={textLabel}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setTextLabel(event.target.value);
          }}
          placeholder="search for dares"
          sx={{ bgcolor: "action.hover" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <ToggleButtonGroup
          color="primary"
          value={searchBy}
          exclusive
          onChange={handleSearchToggle}
          aria-label="Platform"
        >
          <ToggleButton value="dare">by Dare</ToggleButton>
          <ToggleButton value="user">by User</ToggleButton>
        </ToggleButtonGroup>
      </Stack>

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
          fontWeight: "bold",
          zIndex: "modal",
          bottom: 10,
          py: 2,
          mx: 5,
          width: 1,
          maxWidth: 450,
          fontSize: 18,
        }}
      >
        Dare a friend 😈
      </Button>
    </Stack>
  );
}
