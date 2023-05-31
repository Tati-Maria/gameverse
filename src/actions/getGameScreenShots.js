import { useQuery } from "@tanstack/react-query";
import { getGameScreenshots } from "../api";

export const useGameScreenshots = (id) => {
    const { data, isLoading, isError, error } = useQuery(
        {
            queryKey: ["gameScreenshots", id],
            queryFn: () => getGameScreenshots(id),
            cacheTime: 1000 * 60 * 60 * 24,
        }
    );

    return { data, isLoading, isError, error };
};