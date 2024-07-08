import React, { useState } from "react";
import { Box } from "@mui/material";
import { HeroBanner, SearchExercises, Exercises } from "../components";

const Home = () => {
	const [bodyPart, setBodyPart] = useState("all");
	const [setExercises] = useState([]);

	return (
		<Box>
			<HeroBanner />
			<SearchExercises
				setExercises={setExercises}
				bodyPart={bodyPart}
				setBodyPart={setBodyPart}
			/>
			<Exercises
				setExercises={setExercises}
				setBodyPart={setBodyPart}
				bodyPart={bodyPart}
			/>
		</Box>
	);
};

export default Home;
