import axios from "axios";
import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

 const useGenersQuery = () => useQuery({
  queryKey: ['genres'],
  queryFn: () => 
    apiClient.get<FetchResponse<Genre>>("/genres")
    .then(res => res.data.results),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: genres
});

// const useGenres = () => ({ data: genres, isLoading: false, error: null })
const useGenres = () => useGenersQuery();

export default useGenres;