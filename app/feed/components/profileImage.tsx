import { Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function ProfileImage({ src, ...props }) {
  return src.profilePicKey === null ? (
    <Grid
      {...props}
      bgcolor="grey.500"
      container
      alignItems="center"
      justifyContent="space-around"
    >
      <Typography fontWeight="bold">
        {src.firstName.charAt(0) + src.lastName.charAt(0)}
      </Typography>
    </Grid>
  ) : (
    <Image {...props} src={src.profilePicKey} alt="profile pic" />
  );
}
