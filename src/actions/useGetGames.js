import { useQuery } from "@tanstack/react-query";
import axios from "axios";


export const useGetGames = () => {
    const {data, isLoading, error,} = useQuery({
        queryKey: ["games"],
        queryFn: () => axios.get(import.meta.env.VITE_API_URL).then((res) => res.data),
    });

    return {data, isLoading, error,};
}