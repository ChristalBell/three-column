"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import data from "../data.json";
import Card from "@/components/Card";

const Home = () => {
  const [vehicle, setVehicle] = useState(data);
  return (
    <Box>
      {vehicle.map((chosen) => {
        return <Card vehicle={chosen} key={chosen.title} />;
      })}
    </Box>
  );
};

export default Home;
