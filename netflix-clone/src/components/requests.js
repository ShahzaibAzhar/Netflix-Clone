const API_KEY = "339daf8b690b1d593f1987bdcb5c4a7d";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=eu-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=29`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentarMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
