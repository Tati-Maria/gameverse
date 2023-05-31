import { useQuery } from "@tanstack/react-query";
import { getSingleCreator, getCreators } from "../api";


export const useGetSingleCreator = (id) => {
    const {data, isLoading, isError, error, isFetching} = useQuery({
        queryKey: ["singleCreator", id],
        queryFn: () => getSingleCreator(id),
    });

    return {data, isLoading, isError, error, isFetching};
};

export const useGetCreators = () => {
    const {data, isLoading, isError, error, isFetching} = useQuery({
        queryKey: ["creators"],
        queryFn: () => getCreators(),
    });

    return {data, isLoading, isError, error, isFetching};
}