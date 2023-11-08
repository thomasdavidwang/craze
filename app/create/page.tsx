"use client";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { API, Storage } from "aws-amplify";
import { useContext, useEffect, useState } from "react";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import { useRouter } from "next/navigation";
import {
  CreateDareInput,
  CreateDareMutation,
  CreateUserVoteInput,
  CreateVoteInput,
  SearchUsersQuery,
  SearchableUserFilterInput,
  User,
} from "../API";
import { ContextData, context } from "../components/ContextProvider";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  InputAdornment,
  Stack,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";

export default function Create() {
  const [description, setDescription] = useState("");
  const [recipient, setRecipient] = useState<User>();
  const { contextData, setContextData } = useContext(context);
  const [options, setOptions] = useState([]);
  const [pics, setPics] = useState([]);
  const [textLabel, setTextLabel] = useState("");
  const router = useRouter();

  async function searchUsers() {
    const filters: SearchableUserFilterInput[] = [];

    textLabel.split(" ").map((word) => {
      const firstNameFilter: SearchableUserFilterInput = {
        firstName: { wildcard: "*" + word + "*" },
      };

      const lastNameFilter: SearchableUserFilterInput = {
        lastName: { wildcard: "*" + word + "*" },
      };

      filters.push(firstNameFilter, lastNameFilter);
    });

    const users = await API.graphql<GraphQLQuery<SearchUsersQuery>>({
      query: queries.searchUsers,
      variables: { filter: { or: filters }, limit: 5 },
    });

    setOptions(users.data.searchUsers.items);
    Promise.all(
      users.data.searchUsers.items.map(
        async (u) => await Storage.get(u.email.slice(0, -9) + ".png")
      )
    ).then((picLinks) => setPics(picLinks));
  }

  useEffect(() => {
    searchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textLabel]);

  async function createDare() {
    try {
      const dareDetails: CreateDareInput = {
        description: description,
      };

      const newDare = await API.graphql<GraphQLQuery<CreateDareMutation>>({
        query: mutations.createDare,
        variables: { input: dareDetails },
      });

      const voteDetails: CreateVoteInput = {
        dareID: newDare.data?.createDare?.id,
        votee: recipient.id,
      };

      const newVote = await API.graphql<GraphQLQuery<CreateVoteInput>>({
        query: mutations.createVote,
        variables: { input: voteDetails },
      });

      const voterDetails: CreateUserVoteInput = {
        // @ts-ignore Property 'createVote' does not exist on type 'GraphQLQuery<CreateVoteInput>'
        voteId: newVote.data.createVote.id,
        userId: contextData.userID,
      };

      const newVoter = await API.graphql<GraphQLQuery<CreateUserVoteInput>>({
        query: mutations.createUserVote,
        variables: { input: voterDetails },
      });

      console.log(newVoter);

      router.push("/feed");
    } catch (error) {
      console.log("error creating dare:", error);
    }
  }

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          width: 1,
          justifyContent: "space-between",
          py: 2,
          mb: 1,
          px: 2,
          borderBottom: 1,
          borderColor: "grey.500",
        }}
      >
        <Link href="/feed">Cancel</Link>
        <Typography variant="h1" align="center">
          {recipient ? "I dare " + recipient.firstName + " to..." : "I dare..."}
        </Typography>
        <Link href="/create" className="opacity-0">
          Cancel
        </Link>
      </Stack>
      {!recipient && (
        <div>
          <Stack sx={{ px: 2 }} spacing={2}>
            <TextField
              value={textLabel}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setTextLabel(event.target.value);
              }}
              placeholder="search"
              sx={{ bgcolor: "action.hover" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            {options.map((option, index) => (
              <Card>
                <CardActionArea>
                  <CardContent
                    onClick={() => {
                      setRecipient(option);
                    }}
                  >
                    <Stack
                      direction="row"
                      key={index}
                      alignItems="center"
                      spacing={2}
                    >
                      <Image
                        src={pics[index]}
                        alt="profile pic"
                        width={48}
                        height={48}
                        className="rounded-full object-cover max-h-12 max-w-12"
                      />
                      <Typography variant="h1" sx={{ fontWeight: 500 }}>
                        {option.firstName + " " + option.lastName}
                      </Typography>
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Stack>
        </div>
      )}
      {recipient && (
        <>
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={description}
            placeholder="Ex. Ask out their crush"
            multiline
            minRows={3}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setDescription(event.target.value);
            }}
            sx={{ width: 1, px: 2 }}
            InputProps={{
              endAdornment: (
                <Button
                  onClick={() => {
                    createDare();
                  }}
                >
                  {"Create new dare ->"}
                </Button>
              ),
            }}
          />
        </>
      )}
    </>
  );
}
