import { API_KEY } from "./Constants/Constants"

export const trending = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`
export const comedy  = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`