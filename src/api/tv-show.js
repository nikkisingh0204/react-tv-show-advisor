import axios from 'axios';
// 'https://api.themoviedb.org/3/discover/tv?include_adult=false&sort_by=popularity.desc&api_key={api_key}' 
//  b306b9d53bc7189ad69dc0ef00c813e9
import { BASE_URL,API_KEY } from '../config';


export class TVShowAPI{
    static async fetchPopulars(){
    const response = await axios.get(`${BASE_URL}tv/popular${API_KEY}`);
    console.log(response.data.results);
    return response.data.results;
    }

    static async fetchRecommendations(tvShowId){
        const response = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations${API_KEY}`);
        console.log(response.data.results);
        return response.data.results;
    }

    static async fetchByTitle(title){
        const response = await axios.get(`${BASE_URL}/search/tv${API_KEY}&query=${title}`);
        console.log(response.data.results);
        return response.data.results;
    }
}