import { useQuery } from "@tanstack/react-query";
import { getSingleDeveloper, getSinglePlatform } from "../api";

export const useSingleDeveloper = (id) => {
    const {data, error, isLoading} = useQuery({
        queryKey: ["singleDeveloper", id],
        queryFn: () => {
            return getSingleDeveloper(id);
        }
    });

    
    return {
        data: data,
        error, 
        isLoading
    };

    
};

export const useSinglePlatform = (id) => {
    const {data, error, isLoading} = useQuery({
        queryKey: ["singlePlatform", id],
        queryFn: () => {
            return getSinglePlatform(id);
        }
    });

    
    return {
        data: data,
        error, 
        isLoading
    };
};