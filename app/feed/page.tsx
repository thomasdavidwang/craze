"use client";

import { useContext, useEffect, useState } from "react";
import {
  Dare,
  ListDaresQuery,
  ListDaresQueryVariables,
  SearchUsersQuery,
  SearchableUserFilterInput,
  UsersByEmailQuery,
} from "@/src/API";
import { API, Auth } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import DareCard from "./components/dareCard";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import * as queries from "@/src/graphql/queries";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { context } from "../components/ContextProvider";
import { useRouter } from "next/navigation";
import SignUpModal from "./components/signUpModal";
import { groupIDs } from "../utils/group-enum";

type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export default function Feed() {
  const [dares, setDares] = useState<Dare[]>([]);
  const { contextData, setContextData } = useContext(context);
  const [touch, setTouch] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [textLabel, setTextLabel] = useState("");
  const [options, setOptions] = useState([]);
  const router = useRouter();

  async function fetchDares() {
    console.log("Fetching...");
    const res = await API.graphql<GraphQLQuery<ListDaresQuery>>({
      query: queries.listDares,
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

  async function searchUsers() {
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
        limit: 5,
      },
    });

    setOptions(users.data.searchUsers.items);
    /**Promise.all(
      users.data.searchUsers.items.map(
        async (u) => await Storage.get(u.email.slice(0, -9) + ".png")
      )
    ).then((picLinks) => setPics(picLinks));*/
  }

  useEffect(() => {
    searchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textLabel]);

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
      {/**<Grid container justifyContent="center">
        <TextField
          value={textLabel}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setTextLabel(event.target.value);
          }}
          placeholder="search for your friend's dares"
          sx={{ bgcolor: "action.hover" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        </Grid>**/}
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
          m: 1,
          width: 1,
          maxWidth: 500,
          fontSize: 18,
        }}
      >
        Dare a friend 😈
      </Button>
    </Grid>
  );
}
