import React, { useState, useEffect } from "react";
import { Pagination } from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import { ExerciseCard } from "../components";
import { paginate, setCurrentPage } from "../utils/paginate";
import { base_url } from "../utils/base_url/base_url";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
	console.log(exercises);

	const currentPage = useState(setCurrentPage);
	const exercisesPerPage = 12;

	const indexOflastExercises = currentPage * exercisesPerPage;
	const indexOfFirstExercises = indexOflastExercises - exercisesPerPage;

	const currentExercises = exercises.slice(
		indexOfFirstExercises,
		indexOflastExercises,
	);

	useEffect(() => {
		const fetchExercisesData = async () => {
			let exercisesData = [];

			if (bodyPart === "all") {
				exercisesData = await fetchData(`${base_url}`, exerciseOptions);
			} else {
				exercisesData = await fetchData(
					`${base_url}/bodyPart/${bodyPart}`,
					exerciseOptions,
				);
			}
			setExercises(exercisesData);
		};
		fetchExercisesData();
	}, [bodyPart, setExercises]);

	return (
		<Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
			<Typography variant="h3" mb="46px">
				Showing Results
			</Typography>
			<Stack
				direction="row"
				sx={{ gap: { lg: "110px", xs: "50px" } }}
				flexWrap="wrap"
				justifyContent="center"
			>
				{currentExercises.map((exercise, index) => (
					<ExerciseCard key={index} exercise={exercise} />
				))}
			</Stack>
			<Stack mt="100px" alignItems="center">
				{exercises.lenght > 9 && (
					<Pagination
						color="standard"
						shape="rounded"
						default={1}
						count={Math.ceil(exercises.length / exercisesPerPage)}
						page={currentPage}
						onChange={paginate}
						size="large"
					/>
				)}
			</Stack>
		</Box>
	);
};

export default Exercises;
