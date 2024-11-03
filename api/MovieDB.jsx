import axios from "axios";
import {apiKey} from '../constants'

//endpoint

const apiBaseUrl = 'https://api.themoviedb.org/3'
const trendingMoviesEndpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
const upcomingMoviesEndpoint = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
const topRatedMoviesEndPoint = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`

// endpoint dinamico

const movieDetailsEndpoint = id=>`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
const movieCreditsEndpoint = id=>`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
const movieSimilarEndpoint = id=>`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}`
const searchMovieEndpoint = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`


const personDetailsEndpoint = id=>`https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}`
const personMoviesEndpoint = id=>`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${apiKey}`


export const image500 = path=> path?`https://image.tmdb.org/t/p/w500${path}`: null;
export const image342 = path=> path?`https://image.tmdb.org/t/p/w342${path}`: null;
export const image185 = path=> path?`https://image.tmdb.org/t/p/w185${path}`: null;

const apiCall = async(endpoint, params)=>{
    const options ={
        method: 'GET',
        url: endpoint,
        params: params? params: {}
    }

    try{
        const response = await axios.request(options);
        return response.data;

    } catch(error){
        console.log('error: ',error);
        return{}
    }
}

export const fetchTrendingMovies = ()=>{
    return apiCall(trendingMoviesEndpoint);
}
export const fetchUpcomingMovies = ()=>{
    return apiCall(upcomingMoviesEndpoint);
}
export const fetchTopRatedMovies = ()=>{
    return apiCall(topRatedMoviesEndPoint);
}

export const fetchMovieDetails = id=>{
    return apiCall(movieDetailsEndpoint(id));
}
export const fetchMovieCredits = id=>{
    return apiCall(movieCreditsEndpoint(id));
}
export const fetchMovieSimilar = id=>{
    return apiCall(movieSimilarEndpoint(id));
}
export const fetchPersonDetails = id=>{
    return apiCall(personDetailsEndpoint(id));
}
export const fetchPersonMovies = id=>{
    return apiCall(personMoviesEndpoint(id));
}
export const searchMovies = params=>{
    return apiCall(searchMovieEndpoint, params);
}