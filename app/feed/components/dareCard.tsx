"use client";

import { CreateUserVoteInput, CreateUserVoteMutation, Dare } from "@/src/API";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import * as mutations from "@/src/graphql/mutations";
import * as queries from "@/src/graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import { GetUserQuery } from "@/src/API";
import { API } from "aws-amplify";
import { useContext, useEffect, useState } from "react";
import { context } from "@/app/components/ContextProvider";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";
import ProfileImage from "./profileImage";
import SignUpModal from "./signUpModal";
import VoterList from "./voterList";

type Votee = {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
  profilePicKey: string;
};

export default function DareCard({ dare, index, setTouch }) {
  const [votee, setVotee] = useState<Votee>();
  const { contextData, setContextData } = useContext(context);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

  async function getVotee() {
    try {
      const user = await API.graphql<GraphQLQuery<GetUserQuery>>({
        query: queries.getUser,
        variables: { id: dare.Votes.items[0].votee },
      });

      /**const picLink = await Storage.get(
        user.data.getUser.email.slice(0, -9) + ".png"
      );*/

      setVotee({
        firstName: user.data.getUser.firstName,
        lastName: user.data.getUser.lastName,
        email: user.data.getUser.email,
        id: user.data.getUser.id,
        profilePicKey: user.data.getUser.profilePicKey,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function checkIfVoted() {
    if (contextData && contextData.userID !== null) {
      let temp = false;
      for (let vote of dare.Votes.items[0].voters.items) {
        if (vote.userId === contextData.userID) {
          temp = true;
        }
      }
      setHasVoted(temp);
    }
  }

  async function vote() {
    if (contextData && contextData.userID) {
      if (!hasVoted) {
        try {
          const userVoteDetails: CreateUserVoteInput = {
            voteId: dare.Votes.items[0].id,
            userId: contextData.userID,
          };

          const vote = await API.graphql<GraphQLQuery<CreateUserVoteMutation>>({
            query: mutations.createUserVote,
            variables: { input: userVoteDetails },
          });

          setTouch((prevState) => prevState + 1);
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      console.log("Dare card open modal");
      setOpenModal(true);
    }
  }

  useEffect(() => {
    getVotee();
    checkIfVoted();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dare]);

  return (
    <Card
      variant="outlined"
      sx={{
        width: 1,
        padding: 1,
        borderRadius: 0,
        border: 0,
        borderBottom: 1,
        borderColor: "grey.700",
      }}
    >
      <SignUpModal open={openModal} setOpen={setOpenModal} />
      <Stack direction="row" spacing={1} alignItems="center">
        <CardActionArea>
          <CardContent onClick={() => setOpen((value) => !value)}>
            <Stack direction="row" spacing={1}>
              <Typography sx={{ pt: 1, pr: 1 }} fontWeight="700">
                {"#" + (index + 1)}
              </Typography>
              {votee && (
                <>
                  <ProfileImage
                    src={votee}
                    width={48}
                    height={48}
                    className="rounded-full object-cover max-h-12 max-w-12"
                  />
                  <Stack spacing={0.5} sx={{ flexGrow: 1 }}>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <Typography variant="h2" fontWeight={800}>
                        {votee.firstName + " " + votee.lastName}
                      </Typography>
                      <Typography variant="h2" fontWeight="medium">
                        should
                      </Typography>
                    </Stack>
                    <Typography variant="h2" fontWeight="medium">
                      {dare.description}
                    </Typography>
                  </Stack>
                </>
              )}
            </Stack>
          </CardContent>
        </CardActionArea>
        <Stack
          alignItems="center"
          sx={{ mx: 1, my: 2 }}
          color={hasVoted ? "secondary.main" : "white"}
        >
          <IconButton
            onClick={vote}
            sx={{ color: hasVoted ? "secondary.main" : "white" }}
          >
            <FavoriteIcon />
          </IconButton>
          <Typography variant="h3" fontWeight="medium">
            {dare.Votes.items[0].voters.items.length}
          </Typography>
        </Stack>
      </Stack>
      <motion.div>{open ? <VoterList dare={dare} /> : null}</motion.div>
    </Card>
  );
}
