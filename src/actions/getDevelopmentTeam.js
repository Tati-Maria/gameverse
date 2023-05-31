import { useQuery } from "@tanstack/react-query";
import { getGameCreators } from "../api";

export const useGameCreators = (id) => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["gameCreators", id],
        queryFn: () => getGameCreators(id),
    })

    return { data, isLoading, isError, error };
}