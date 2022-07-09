import React, { useEffect, useState } from "react";

import { Box, TextField, Stack, Typography, Button } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetch";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = (setExercise, bodyPart, setBodyPart) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts([, ...bodyPartsData]);
    };
    fetchExerciseData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercise = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipement.toLowerCase().includes(search)
      );
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercise(searchedExercise);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={7000}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
      >
        Awesome Workouts you should know
      </Typography>
      <Box position="relative">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: {
              lg: "800px",
              xs: "350px",
            },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="72px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Workouts"
          type="texts"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "150px", xs: "80px" },
            fontSize: { lg: "20px", xs: "15px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar data={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
