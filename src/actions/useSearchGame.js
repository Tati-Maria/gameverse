import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDebounce } from "../hooks/useDebounce";

const api = "https://api.rawg.io/api/games";
const apiKey = import.meta.env.VITE_API_KEY;

const fetchGames = async (key, search) => {
    const { data } = await axios.get(`${api}?key=${apiKey}&search=${search}`);
    return data;
};

export const useSearchGame = (search) => {
    const debounceSearchTerm = useDebounce(search, 500);
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["search", debounceSearchTerm],
        queryFn: () => {
            return fetchGames("search", search);
        },
        enabled: !!debounceSearchTerm,
    });

    return { data, isLoading, isError, error };
};