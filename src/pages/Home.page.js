import React, { useState } from "react";
import { HeroBanner, SearchExercises, Exercises } from "../components";
import { Box } from "@mui/material";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} setBodyPart={setBodyPart} bodyPart={bodyPart} />
    </Box>
  );
};

export default Home;
