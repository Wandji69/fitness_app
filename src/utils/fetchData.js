import axios from "axios";

export const exerciseOptions = {
	method: "GET",
	headers: {
		"Content-Type": "application/json",
		"X-RapidAPI-Key": process.env.RAPID_API_KEY,
		"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
	},
};

export const fetchData = async (base_url, exerciseOptions) => {
	await axios
		.request(base_url, exerciseOptions)
		.then((response) => response.json())
		.then((response) => console.log(response))
		.catch((err) => console.error(err));
};
