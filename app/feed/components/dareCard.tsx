import { Dare } from "@/app/API";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

type DareCardProps = {
  dare: Dare;
};

export default function DareCard({ dare: dare }: DareCardProps) {
  return (
    <Card variant="outlined">
      <Typography variant="h3">{dare.description}</Typography>
    </Card>
  );
}
