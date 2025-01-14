import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface Props {
  vehicle: { image: string; title: string; description: string };
}
const Card = ({ vehicle }: Props) => {
  const { image, title, description } = vehicle;
  return (
    <Box>
      <Typography>{title}</Typography>
      <Typography>{description}</Typography>
    </Box>
  );
};

export default Card;
