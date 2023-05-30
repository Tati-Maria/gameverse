import { useQuery } from "@tanstack/react-query";
import axios from "axios";


export const useGetSingleGame = (id) => {
    const {data, isLoading, error,} = useQuery({
        queryKey: ["gamesId", id],
        queryFn: () => axios.get(`https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_API_KEY}`).then((res) => res.data),
    });

    return {data, isLoading, error,};
};