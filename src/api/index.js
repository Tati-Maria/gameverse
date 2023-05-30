import axios from 'axios';

// const apiURL = import.meta.env.VITE_API_URI;
const apiKEY = import.meta.env.VITE_API_KEY;
const apiUrl = "https://api.rawg.io/api"

export const getDevelopers = async (page=1) => {
    const { data } = await axios.get(`${apiUrl}/developers?key=${apiKEY}&page=${page}&page_size=16`);
    return data;
};


export const getPlatforms = async (page=1) => {
    const { data } = await axios.get(`${apiUrl}/platforms?key=${apiKEY}&page=${page}&page_size=16`);
    return data;
}

