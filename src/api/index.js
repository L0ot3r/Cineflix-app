import axios from 'axios';
import API from './testAPI'

// api image
// https://api.themoviedb.org/3/movie/${movie.id}/images?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=fr-FR

const baseURL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=fr-FR&page=1`;

// const URL = `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_API_KEY_TMDB}`

export const getMoviesData = async () => {
	try {
		const {data: {results}} = await axios.get(API)
    return results;
	} catch (error) {
		console.log(error);
	}
};
