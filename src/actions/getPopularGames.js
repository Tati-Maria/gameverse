import { useQuery } from "@tanstack/react-query";
import { getPopularGames } from "../api";

export const usePopularGames = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["popularGames"],
        queryFn: () => getPopularGames()
    });

    return { data, isLoading, isError, error };
};