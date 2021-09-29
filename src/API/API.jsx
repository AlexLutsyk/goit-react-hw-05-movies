const API_KEY = "107f2ec399e531ab0199241ff8bd59c1";
const BASE_URL = "https://api.themoviedb.org/3/";
async function fetchAPI(url = "") {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Something went wrong"));
  // return fetch(`${url}`).then((response) => {
  //   if (response.ok) {
  //     return response.json();
  //   } else {
  //     throw new Error(alert("Something went wrong!"));
  //   }
  // });
}

export function fetchTrendingMovies() {
  return fetchAPI(`${BASE_URL}trending/all/day?api_key=${API_KEY}`);
}

export function fetchByKeyWord(keyWord, page) {
  return fetchAPI(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${keyWord}`
  );
}

export function fetchMovieDetails(movieId) {
  return fetchAPI(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchMovieCredits(movieId) {
  return fetchAPI(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchMovieReviews(movieId) {
  return fetchAPI(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
}
