import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Button from "@mui/material/Button";

interface Props {
  vehicle: {
    image: string;
    title: string;
    description: string;
    color: string;
  };
}

const Card = ({ vehicle }: Props) => {
  const { image, title, description, color } = vehicle;
  console.log(vehicle);
  return (
    <Box
      className="container"
      sx={{
        backgroundColor: color,
        borderRadius: ".25rem",
        color: "#FFFFFF",
        padding: "2rem",
      }}
    >
      <Image src={image} alt="car" height={30} width={50} />
      <Typography variant="h4" sx={{ margin: "1.25rem" }}>
        {title}
      </Typography>
      <Typography
        sx={{
          fontWeight: "light",
          fontSize: "1rem",
          lineHeight: "1.5rem",
        }}
      >
        {description}
      </Typography>
      <Button
        variant="contained"
        sx={{
          marginTop: "4rem",
          borderRadius: "10rem",
          padding: "1.5rem, 3rem",
          color: color,
          backgroundColor: "#FFFFFF",
          fontSize: ".5rem",
        }}
      >
        Learn More
      </Button>
    </Box>
  );
};

export default Card;
