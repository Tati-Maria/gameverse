import { useQuery } from "@tanstack/react-query";
import { getDevelopers } from "../api";

export const useGetDevelopers = (page) => {
    const {data, isLoading, isError, error, isFetching, isPreviousData} = useQuery({
        queryKey: ["developers", page],
        queryFn: ({pageParam=page}) => getDevelopers(pageParam),
        keepPreviousData: true,
        cacheTime: 1000 * 60 * 5, // 5 minutes
        staleTime: 1000 * 60 * 5, // 5 minutes
        getNextPageParam: (lastPage) => {
            if(lastPage.next) {
                return lastPage.next;
            }
            return false;
        }
    });

    return {
        data,
        isLoading,
        isError,
        error,
        isFetching,
        isPreviousData
    }
};