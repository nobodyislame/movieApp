import axios from 'axios';

const API_KEY = 'plzBanMe';
export const FETCH_MOVIE = 'FETCH_MOVIE';

export const fetchMovie = (movie)=>{
  const url = `http://www.omdbapi.com/?t=${movie}&apikey=${API_KEY}`;
  const request = axios.get(url);
  return {
    type : FETCH_MOVIE,
    payload: request
  }
}
