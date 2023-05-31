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

export const getGameScreenshots = async (id) => {
    const { data } = await axios.get(`${apiUrl}/games/${id}/screenshots?key=${apiKEY}`);
    return data;
};

export const getPopularGames = async() => {
    const {data} = await axios.get(`${apiUrl}/games?ordering=-rating&key=${apiKEY}&page_size=10`);
    return data;
}

//games with the highest rating
export const getTrendingGames = async() => {
    const {data} = await axios.get(`${apiUrl}/games?ordering=-trending&key=${apiKEY}&page_size=10`);
    return data;
}

export const getNewGames = async() => {
    const {data} = await axios.get(`${apiUrl}/games?ordering=-released&key=${apiKEY}&page_size=10`);
    return data;
}

export const getUpcomingGames = async() => {
    const {data} = await axios.get(`${apiUrl}/games?ordering=-added&key=${apiKEY}&page_size=10`);
    return data;
}


