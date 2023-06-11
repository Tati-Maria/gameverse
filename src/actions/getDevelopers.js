import { useQuery } from "@tanstack/react-query";
import { getDevelopers, getAllCreators } from "../api";

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

export const useGetAllCreators = (page) => {
    const {data, isLoading, isError, error, isFetching, isPreviousData} = useQuery({
        queryKey: ["creators", page],
        queryFn: ({pageParam=page}) => getAllCreators(pageParam),
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
        isLoading,
        isError,
        error,
        isFetching,
        isPreviousData
    }
};