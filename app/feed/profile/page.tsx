"use client";

import { useContext, useEffect, useState } from "react";
import { context } from "../../components/ContextProvider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Auth, Storage } from "aws-amplify";
import { StorageImage } from "@aws-amplify/ui-react-storage";
import { useRouter } from "next/navigation";

export default function Profile() {
  const { contextData, setContextData } = useContext(context);
  const router = useRouter();

  async function signOut() {
    try {
      await Auth.signOut();

      router.push("/");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  return (
    <div>
      <img src={contextData.pic} width={100} height={100} alt="Profile Picture" />
      <Typography>{contextData.firstName}</Typography>
      <Typography>{contextData.lastName}</Typography>
      <Button variant="outlined" onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
}
