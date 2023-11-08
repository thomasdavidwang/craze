"use client";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { API, Storage } from "aws-amplify";
import * as queries from "../../graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import { SearchUsersQuery, SearchableUserFilterInput } from "@/app/API";
import useAutocomplete from "@mui/material/useAutocomplete";

export default function PeopleSearch({ selection, setSelection }) {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [pics, setPics] = useState([]);

  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: options,
    value: selection,
    onChange: (event: any, newValue: string | null) => {
      setSelection(newValue);
    },
    getOptionLabel: (option) => option.firstName + " " + option.lastName,
  });

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
    console.log(inputValue);
    searchUsers();
  }, [inputValue]);

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
      </div>
      {groupedOptions.length > 0 ? (
        <ul {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <div key={index}>
              <li {...getOptionProps({ option, index })}>
                <p>{option.firstName + " " + option.lastName}</p>
                <img
                  src={pics[index]}
                  alt="profile pic"
                  width={100}
                  height={100}
                />
              </li>
            </div>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
