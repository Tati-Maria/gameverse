import { useQuery } from "@tanstack/react-query";
import { getTrendingGames, getUpcomingGames, getNewGames } from "../api";

export const useGetTrendingGame = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["trendingGames"],
        queryFn: () => getTrendingGames()
    });

    return { data, isLoading, isError, error };
};


export const useGetUpcomingGame = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["upcomingGames"],
        queryFn: () => getUpcomingGames()
    });

    return { data, isLoading, isError, error };
};

export const useGetNewGame = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["newGames"],
        queryFn: () => getNewGames(),
        cacheTime: 1000 * 60 * 60 * 60 // 1 hour
    });

    return { data, isLoading, isError, error };
};