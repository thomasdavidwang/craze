"use client";

import { useContext, useEffect, useState } from "react";
import {
  Dare,
  ListDaresQuery,
  ModelDareFilterInput,
  SearchUsersQuery,
  SearchableUserFilterInput,
  UsersByEmailQuery,
} from "@/src/API";
import { API, Auth } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import DareCard from "../feed/components/dareCard";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import SearchIcon from "@mui/icons-material/Search";
import * as queries from "@/src/graphql/queries";
import { context } from "../components/ContextProvider";
import { useRouter } from "next/navigation";
import SignUpModal from "../feed/components/signUpModal";
import { groupIDs } from "../utils/group-enum";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Container, Typography } from "@mui/material";

export default function Secret() {
  const [dares, setDares] = useState<Dare[]>([]);
  const { contextData, setContextData } = useContext(context);
  const [touch, setTouch] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [textLabel, setTextLabel] = useState("");
  const [searchBy, setSearchBy] = useState("user");

  const router = useRouter();

  async function fetchDares() {
    console.log("Fetching...");

    let dareFilters: ModelDareFilterInput[] = [];

    if (textLabel !== "") {
      if (searchBy === "user") {
        const userFilters: SearchableUserFilterInput[] = [];

        const words = textLabel.split(" ");

        const firstNameFilter: SearchableUserFilterInput = {
          firstName: { wildcard: "*" + words[0] + "*" },
        };
        userFilters.push(firstNameFilter);

        if (words.length > 1) {
          const lastNameFilter: SearchableUserFilterInput = {
            lastName: { wildcard: "*" + words[1] + "*" },
          };

          userFilters.push(lastNameFilter);
        }

        const users = await API.graphql<GraphQLQuery<SearchUsersQuery>>({
          query: queries.searchUsers,
          variables: {
            filter: {
              groupID: { eq: groupIDs["Yale-2027"] },
              and: userFilters,
            },
            limit: 20,
          },
        });

        for (let user of users.data.searchUsers.items) {
          let temp = user.votesReceived.items.map((vote) => {
            return { id: { eq: vote.dareID } };
          });

          dareFilters.push(...temp);
        }
      } else {
        const words = textLabel.split(" ");

        console.log(words);

        for (let word of words) {
          const tempFilter = {
            description: { contains: word },
          };

          dareFilters.push(tempFilter);
        }
      }
    }

    const res = await API.graphql<GraphQLQuery<ListDaresQuery>>({
      query: queries.listDares,
      variables: {
        filter: {
          or: dareFilters,
        },
      },
    });

    const { items: items } = res.data?.listDares;

    console.log(items);

    items.sort((item1, item2) => {
      let date1 = new Date(item1.createdAt).getTime();
      let date2 = new Date(item2.createdAt).getTime();
      return date2 - date1;
    });

    // @ts-ignore: lol i still hate setState
    setDares(items);
  }

  useEffect(() => {
    fetchDares();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [touch, textLabel, searchBy]);

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
    setSearchBy(newSearchBy);
  }

  return (
    <>
      <Container sx={{ width: 1, my: 2 }}>
        <Stack spacing={2} alignItems="center">
          <Typography>Internal Use Only</Typography>
        </Stack>
      </Container>
      <Stack alignItems="center">
        <SignUpModal open={openModal} setOpen={setOpenModal} />
        <TextField
          value={textLabel}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setTextLabel(event.target.value);
          }}
          placeholder={searchBy ? "search for dares..." : "search by user..."}
          sx={{ bgcolor: "action.hover", width: 1, maxWidth: 600 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ToggleButtonGroup
                  color="primary"
                  value={searchBy}
                  exclusive
                  onChange={handleSearchToggle}
                  aria-label="Platform"
                >
                  <ToggleButton
                    size="small"
                    value="dare"
                    sx={{ fontWeight: "bold", px: 2 }}
                  >
                    by Dare
                  </ToggleButton>
                  <ToggleButton
                    size="small"
                    value="user"
                    sx={{ fontWeight: "bold", px: 2 }}
                  >
                    by User
                  </ToggleButton>
                </ToggleButtonGroup>
              </InputAdornment>
            ),
          }}
        />

        <Stack
          alignItems="center"
          justifyContent="center"
          spacing={2}
          padding={2}
          sx={{ width: 1, maxWidth: 600 }}
        >
          {dares.map((dare, idx) => {
            return (
              <>
                <DareCard
                  dare={dare}
                  index={idx}
                  key={dare.id}
                  setTouch={setTouch}
                />
                <Typography>{dare.Votes.items[0].votee}</Typography>
              </>
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
    </>
  );
}
