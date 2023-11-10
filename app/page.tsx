"use client";

import { Button } from "@mui/material";
import { redirect } from "next/navigation";
import yalies from "yalies";

const api = new yalies.API(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTkyODU2NjgsInN1YiI6InJ4NDUifQ.DWfBvTXm_sN2ynhRsB-JKoycpoH8H1WRbbzvBstqz00"
);

export default function Home() {
  //redirect("/feed");

  function run() {
    api
      .people({
        query: "",
        filters: {
          school_code: ["YC"],
        },
        page: 1,
        page_size: 10,
      })
      .then((people) => {
        for (let person of people) {
          console.log(person.year);
        }
      });
  }

  return (
    <div>
      <Button onClick={run}>Click me</Button>
    </div>
  );
}
