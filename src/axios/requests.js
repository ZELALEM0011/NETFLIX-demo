const API_KEYS = "384415bbd6d1feaac98a5dca4a77ede6";

const requests = {
  fetchMovies: `/movie/popular?api_key=${API_KEYS}&language=en-US`,
  // fetchUpcommingMovies: `/movie/upcoming?api_key=${API_KEYS}&language=en-US`,
  // fetchTopratedMovie: `/movie/top-rated?api_key=${API_KEYS}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEYS}&with_genres=28`,
  fetchAdventureMovies: `/discover/movie?api_key=${API_KEYS}&with_genres=12`,
  fetchAnimationMovies: `/discover/movie?api_key=${API_KEYS}&with_genres=16`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEYS}&with_genres=35`,
  fetchCrimeMovies: `/discover/movie?api_key=${API_KEYS}&with_genres=80`,
  fetchDocumentaryMovies: `/discover/movie?api_key=${API_KEYS}&with_genres=99`,
  fetchDramaMovies: `/discover/movie?api_key=${API_KEYS}&with_genres=18`,
  fetchfantasyMovies: `/discover/movie?api_key=${API_KEYS}&with_genres=14`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEYS}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEYS}&with_genres=10749`,
  fetchMystirousMovies: `/discover/movie?api_key=${API_KEYS}&with_genres=9648`,
};
//
//https://api.themoviedb.org/3/discover/movie/upcoming?api_key=384415bbd6d1feaac98a5dca4a77ede6&language=en-US
export default requests;