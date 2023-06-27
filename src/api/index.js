import axios from 'axios';

// const apiURL = import.meta.env.VITE_API_URI;
const apiKEY = import.meta.env.VITE_API_KEY;
const apiUrl = "https://api.rawg.io/api"

// games that are coming out in the next 12 months
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();

const currentMonthString = currentMonth < 10 ? `0${currentMonth}` : `${currentMonth}`;
const currentDayString = currentDay < 10 ? `0${currentDay}` : `${currentDay}`;
const currentDateString = `${currentYear}-${currentMonthString}-${currentDayString}`;

//get all the games + pagination + ordering
export const getAllGames = async (ordering, page) => {
    const {data} = await axios.get(`${apiUrl}/games?key=${apiKEY}&ordering=${ordering}&page=${page}&page_size=20&exclude_additions=true&dates=2000-01-01,2025-01-01`);
    return data;
};

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


//games with the highest rating
export const getPopularGames = async() => {
    const {data} = await axios.get(`${apiUrl}/games?ordering=-rating&key=${apiKEY}&page_size=16&exclude_additions=true&dates=2022-01-01,2025-01-01`);
    return data;
}

//games with the highest rating
export const getTrendingGames = async() => {
    const {data} = await axios.get(`${apiUrl}/games?ordering=-metacritic&key=${apiKEY}&page_size=10&dates=2022-01-01,${currentDateString}&exclude_additions=true&metacritic=80,100&parent_platforms=1,2,3,4,5,6,7,8,9`);
    return data;
}

//games released till date
export const getNewGames = async() => {
    const {data} = await axios.get(`${apiUrl}/games?ordering=-released&key=${apiKEY}&page_size=10&dates=2023-01-01,${currentDateString}&exclude_additions=true`);
    return data;
}

//games that are coming out in the next 12 months
export const getUpcomingGames = async() => {
    const {data} = await axios.get(`${apiUrl}/games?ordering=-added&key=${apiKEY}&page_size=16&dates=${currentDateString},2025-01-01&exclude_additions=true`);
    return data;
}


//get game creators
export const getGameCreators = async(id) => {
    const {data} = await axios.get(`${apiUrl}/games/${id}/development-team?key=${apiKEY}`);
    return data;
}

//get all creators
export const getAllCreators = async(page) => {
    const {data} = await axios.get(`${apiUrl}/creators?key=${apiKEY}&page=${page}&page_size=16`);
    return data;
}

//get single creator
export const getSingleCreator = async(id) => {
    const {data} = await axios.get(`${apiUrl}/creators/${id}?key=${apiKEY}`);
    return data;
}

// get creators without pagination
export const getCreators = async() => {
    const {data} = await axios.get(`${apiUrl}/creators?key=${apiKEY}`);
    return data;
}

//get single developer
export const getSingleDeveloper = async(id) => {
    const {data} = await axios.get(`${apiUrl}/developers/${id}?key=${apiKEY}`);
    return data;
}

// get developer games with pagination
export const getDeveloperGames = async(id, page) => {
    const {data} = await axios.get(`${apiUrl}/games?key=${apiKEY}&developers=${id}&page=${page}&page_size=16`);
    return data;
}

//get single platform
export const getSinglePlatform = async(id) => {
    const {data} = await axios.get(`${apiUrl}/platforms/${id}?key=${apiKEY}`);
    return data;
}

// get platform games with pagination
export const getPlatformGames = async(id, page) => {
    const {data} = await axios.get(`${apiUrl}/games?key=${apiKEY}&platforms=${id}&page=${page}`);
    return data;
}