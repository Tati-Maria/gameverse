import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const apiUrl = import.meta.env.VITE_API_URI;
const apiKey = import.meta.env.VITE_API_KEY;

// get all games by genre + pagination
const getGameByGenre = async (genreId, page = 1) => {
    const { data } = await axios.get(`${apiUrl}?key=${apiKey}&genres=${genreId}&page=${page}&page_size=16`);
    return data;
} 

export function useGetGameByGenre(genreId, page = 1) {
    const { data, isLoading, isError, error, isFetching, isPreviousData } = useQuery({
        queryKey: ["getGameByGenre", genreId, page],
        queryFn: ({pageParam = page}) => getGameByGenre(genreId, pageParam),
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
        enabled: !!genreId,
    });

    return { data, isLoading, isError, error, isFetching, isPreviousData };
}