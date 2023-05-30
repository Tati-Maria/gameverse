import { useQuery } from "@tanstack/react-query";
import { getPlatforms } from "../api";


export const useGetPlatforms = (page) => {
    const {data, isLoading, isError, error, isPreviousData} = useQuery({
        queryKey: ['platforms', page],
        queryFn: ({pageParam=page}) => getPlatforms(pageParam),
        keepPreviousData: true,
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
        isPreviousData
    };
};