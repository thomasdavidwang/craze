"use client";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { API } from "aws-amplify";
import * as queries from "../../graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import { SearchUsersQuery, SearchableUserFilterInput } from "@/app/API";

export default function PeopleSearch({ value, setValue }) {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [userIDs, setUserIDs] = useState([]);

  async function searchUsers() {
    const filters: SearchableUserFilterInput[] = [];

    inputValue.split(" ").map((word) => {
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
      variables: { filter: { or: filters } },
    });

    setOptions(
      users.data.searchUsers.items.map((u) => u.firstName + " " + u.lastName)
    );
    setUserIDs(users.data.searchUsers.items.map((u) => u.id));
  }

  useEffect(() => {
    searchUsers();
  }, [inputValue]);

  return (
    <Autocomplete
      options={options}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      value={value}
      onChange={(event: any, newValue: string | null) => {
        setValue(newValue);
      }}
      selectOnFocus
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}
