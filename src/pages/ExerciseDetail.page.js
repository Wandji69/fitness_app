import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";
import { Detail, ExerciseVideos, SimilarExercises } from "../components";
import { exerciseDbUrl, youtubeSearchUrl } from "../utils/base_url/base_url";

const ExerciseDetail = () => {
	const [exerciseDetail, setExerciseDetail] = useState({});
	const [exerciseVideos, setExerciseVideos] = useState([]);
	const [targetMuscleExcersices, setTargetMuscleExcersices] = useState([]);
	const [equipmentExcersices, setEquipmentExcersicesData] = useState([]);

	const { id } = useParams();
	useEffect(() => {
		const fetchExerciseData = async () => {
			const exerciseDetailData = await fetchData(
				`${exerciseDbUrl}/exercises/exercise/${id}`,
				exerciseOptions,
			);
			setExerciseDetail(exerciseDetailData);

			const exerciseVideosData = await fetchData(
				`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
				youtubeOptions,
			);
			setExerciseVideos(exerciseVideosData.contents);

			const targetMuscleExcersicesData = await fetchData(
				`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
				exerciseOptions,
			);
			setTargetMuscleExcersices(targetMuscleExcersicesData);

			const equipmentExcersicesData = await fetchData(
				`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
				exerciseOptions,
			);
			setEquipmentExcersicesData(equipmentExcersicesData);
		};

		fetchExerciseData();
	}, [id, setExerciseDetail, setExerciseVideos]);

	return (
		<Box>
			<Detail exerciseDetail={exerciseDetail} />
			<ExerciseVideos
				exerciseVideos={exerciseVideos}
				name={exerciseDetail.name}
			/>
			<SimilarExercises
				targetMuscleExcersices={targetMuscleExcersices}
				equipmentExcersices={equipmentExcersices}
			/>
		</Box>
	);
};

export default ExerciseDetail;
