import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const apiURL = import.meta.env.VITE_API_URI;
const apiKEY = import.meta.env.VITE_API_KEY;

//get all the games + pagination
const fetchGames = async (page) => {
    const { data } = await axios.get(`${apiURL}?key=${apiKEY}&page=${page}&page_size=12`);
    return data;
};


export const useGetAllGames = (page) => {
    const {data, isLoading, isError, error, isFetching, isPreviousData} = useQuery({
        queryKey: ["games", page],
        queryFn: ({pageParam = page}) => fetchGames(pageParam),
        keepPreviousData: true,
        cacheTime: 1000 * 60 * 5, // 5 minutes
        staleTime: 1000 * 60 * 5, // 5 minutes
        getNextPageParam: (lastPage) => {
            if(lastPage.next) {
                return lastPage.next;
            }
            return false;
        },
        getPreviousPageParam: (firstPage) => {
            if(firstPage.previous) {
                return firstPage.previous;
            }
            return false;
        },
        enabled: !!page,
        placeholderData: {
            results: []
        }
    });

    return {
        data, 
        isLoading, 
        isError, 
        error, 
        isFetching, 
        isPreviousData
    };
};