import axios from 'axios';
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