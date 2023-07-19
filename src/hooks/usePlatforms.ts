import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

interface Platfrom {
    id: number,
    name: string,
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.get<FetchResponse<Platfrom>>('/platforms')
        .then(res=>res.data.results),
        staleTime: 24 * 60 * 60 * 1000,
        initialData: platforms
});





// const usePlatforms = () => ({ data: platforms, isLoading: false, error: null});

export default usePlatforms;