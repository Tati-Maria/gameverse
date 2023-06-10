import { useQuery } from "@tanstack/react-query";
import { getDeveloperGames } from "../api";

export const useGameByDeveloper = (id, page) => {
    const {data, error, isLoading, isPreviousData} = useQuery({
        queryKey: ["gameByDeveloper", id, page],
        queryFn: ({pageParam = page}) => getDeveloperGames(id, pageParam),
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
        }
    });

    return {
        data,
        error,
        isLoading,
        isPreviousData
    }
}