"use client";

import { Button } from "@mui/material";
import { redirect } from "next/navigation";
import yalies from "yalies";
import { GraphQLQuery } from "@aws-amplify/api";
import {
  CreateGroupMutation,
  CreateUserMutation,
  DeleteUserMutation,
  DeleteUserVoteMutation,
  UpdateUserMutation,
  UsersByEmailQuery,
} from "@/src/API";
import * as queries from "@/src/graphql/queries";
import * as mutations from "@/src/graphql/mutations";
import { API } from "aws-amplify";
import { groupIDs } from "./utils/group-enum";
import { out } from "./utils/temp-data";

const api = new yalies.API(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTkyODU2NjgsInN1YiI6InJ4NDUifQ.DWfBvTXm_sN2ynhRsB-JKoycpoH8H1WRbbzvBstqz00"
);

export default function Home() {
  redirect("/feed");

  function run() {
    api
      .people({
        query: "",
        filters: {
          school_code: ["YC"],
        },
      })
      .then((people) => {
        console.log("Done fetching.");
        for (let person of people) {
          API.graphql<GraphQLQuery<UsersByEmailQuery>>({
            query: queries.usersByEmail,
            variables: { email: person.email },
          }).then((data) => {
            const items = data.data.usersByEmail.items;
            let year = "";
            switch (person.year) {
              case 2024:
                year = groupIDs["Yale-2024"];
                break;
              case 2025:
                year = groupIDs["Yale-2025"];
                break;
              case 2026:
                year = groupIDs["Yale-2026"];
                break;
              case 2027:
                year = groupIDs["Yale-2027"];
                break;
            }
            if (items.length == 0) {
              console.log("creating...");
              try {
                API.graphql<GraphQLQuery<CreateUserMutation>>({
                  query: mutations.createUser,
                  variables: {
                    input: {
                      firstName: person.first_name,
                      lastName: person.last_name,
                      email: person.email,
                      phoneNumber: person.phone,
                      profilePicKey: person.image,
                      groupID: year,
                    },
                  },
                });
              } catch (error) {
                console.log(error);
              }
            } else {
              if (items.length > 1) {
                for (let i = 1; i < items.length; i++) {
                  console.log("Deleting...");
                  API.graphql<GraphQLQuery<DeleteUserMutation>>({
                    query: mutations.deleteUser,
                    variables: { id: items[i].id },
                  });
                }
              }
            }
          });
        }
      });
  }

  function clean() {
    console.log("Running...");
    for (let i = 0; i < out.length; i++) {
      for (let j = i + 1; j < out.length; j++) {
        if (
          out[i].userId === out[j].userId &&
          out[i].voteId === out[j].voteId
        ) {
          j === out.length;
          API.graphql<GraphQLQuery<DeleteUserVoteMutation>>({
            query: mutations.deleteUserVote,
            variables: { input: { id: out[i].id } },
          })
            .then(() => {
              console.log("Deleted.");
            })
            .catch((e) => console.log(e));
        }
      }
    }
  }

  return (
    <div>
      <Button onClick={clean}>Click me</Button>
    </div>
  );
}
