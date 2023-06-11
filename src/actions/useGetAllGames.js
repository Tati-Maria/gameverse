import { useQuery } from "@tanstack/react-query";
import {getAllGames} from "../api"


export const useGetAllGames = (ordering, page) => {
    const {data, isLoading, isError, error, isFetching, isPreviousData} = useQuery({
        queryKey: ["games", page, ordering],
        queryFn: ({pageParam = page}) => getAllGames(ordering, pageParam),
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