import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient, { FetchResponse } from "../services/api-client";


interface Platfrom {
    id: number,
    name: string,
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.get<FetchResponse<Platfrom>>('/platforms/lists/parents')
        .then(res=>res.data.results),
        staleTime: 24 * 60 * 60 * 1000, // 24h
        initialData: platforms
});




export default usePlatforms;