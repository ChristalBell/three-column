"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import data from "../data.json";
import Card from "@/components/Card";
import Button from "@mui/material/Button";

const Home = () => {
  const [vehicle, setVehicle] = useState(data);
  return (
    <Box
      className="container"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "10rem 10rem",
      }}
    >
      {vehicle.map((chosen) => {
        return <Card vehicle={chosen} key={chosen.title} />;
      })}
    </Box>
  );
};

export default Home;
