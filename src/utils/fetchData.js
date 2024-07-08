// import axios from 'axios';

import axios from "axios";

export const exerciseOptions = {
	method: "GET",
	headers: {
		"Content-Type": "application/json",
		"X-RapidAPI-Key": process.env.RAPID_API_KEY,
		"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
	},
};

export const youtubeOptions = {
	method: "GET",
	hearders: {
		"Content-Type": "application/json",
		"X-RapidAPI-Key": process.env.RAPID_API_KEY,
		"X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
	},
};

export const fetchData = async (base_url, options) => {
	const response = await axios.request(base_url, options);
	const data = await response.json();

	// eslint-disable-next-line no-console
	console.log(data);

	// .then((response) => response.json())
	// .then((response) => console.log(response))
	// .catch((err) => console.error(err));

	return data;
};

