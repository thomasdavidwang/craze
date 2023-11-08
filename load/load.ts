import yalies from "yalies";
import Amplify from "aws-amplify";
import awsconfig from "../app/aws-exports";
import { API } from "aws-amplify";
import * as mutations from "../app/graphql/mutations";
import { GraphQLQuery } from "@aws-amplify/api";

Amplify.Amplify.configure({ ...awsconfig });

const api = new yalies.API(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTkyODU2NjgsInN1YiI6InJ4NDUifQ.DWfBvTXm_sN2ynhRsB-JKoycpoH8H1WRbbzvBstqz00"
);

async function register(email, phone, first_name, last_name) {
  try {
    const user = await API.graphql({
      query: mutations.createUser,
      variables: {
        input: {
          email: email,
          phoneNumber: phone,
          firstName: first_name,
          lastName: last_name,
        },
      },
    });
    console.log(user);
  } catch (e) {
    console.log(e);
  }
}

api
  .people({
    query: "laufer",
    filters: {
      school_code: ["YC"],
      college: ["Pierson"],
      year: [2025],
    },
  })
  .then((people) => {
    for (let person of people) {
      console.log(person.first_name);
      console.log(person.last_name);
      console.log(person.email);
      console.log(person.image);
      console.log(person.phone);

      register(person.email, person.phone, person.first_name, person.last_name);
    }
  });
