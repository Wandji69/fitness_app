import React from "react";
import { HeroBanner, SearchBar, Exercises } from "../components";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchBar />
      <Exercises />
    </Box>
  );
};

export default Home;
