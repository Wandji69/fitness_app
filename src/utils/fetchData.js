// export const exerciseOptions = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
//       'X-RapidAPI-Key': process.env.RAPID_API_KEY
//     }
//   };

// export const fetchData = async (url, exerciseOptions) => {
//     const res = await fetch(url, exerciseOptions);
//     const data = await res.json();

//     return data;
// };

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const fetchData = async (url, exerciseOptions) => {
  await fetch(url, exerciseOptions)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}