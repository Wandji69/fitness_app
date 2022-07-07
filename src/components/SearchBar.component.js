import React, { useEffect, useState } from "react";

import { Box, TextField, Stack, Typography, Button } from "@mui/material";
import { Fetch, exerciseOptions } from "../utils/fetch";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleChange = async () => {};

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
          onClick={handleChange}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchBar;
