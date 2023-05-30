import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

const getAllGenres = async () => {
    const { data } = await axios.get(`https://api.rawg.io/api/genres?key=${apiKey}`);
    return data;
}

export function useGetAllGenres() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["getAllGenres"],
        queryFn: () => getAllGenres(),
    });

    return { data, isLoading, isError, error };
}