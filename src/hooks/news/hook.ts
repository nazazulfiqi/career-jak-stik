import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { getAllNewsRequest, getDetailNewsRequest, getRelatedNews } from "@/hooks/news/request";

import { TNewsGetAllResponse, TNewsGetDetailResponse, TNewsRelatedResponse } from "@/types/news";

export const useGetAllNews = (searchTerm?: string): UseQueryResult<TNewsGetAllResponse> =>
  useQuery({
    queryKey: ["get-all-news", searchTerm],
    queryFn: async () => await getAllNewsRequest(searchTerm),
  
  });


  export const useGetDetailNews = (id : string): UseQueryResult<TNewsGetDetailResponse> =>
    useQuery({
      queryKey: ["get-detail-news"],
      queryFn: async () => await getDetailNewsRequest(id),
    });



    export const useGetRelatedNews = (id : string): UseQueryResult<TNewsRelatedResponse> =>
      useQuery({
        queryKey: ["get-related-news"],
        queryFn: async () => await getRelatedNews(id),
      });