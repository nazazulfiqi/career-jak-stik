import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { getAllNewsRequest, getDetailNewsRequest } from "@/hooks/news/request";

import { TNewsGetAllResponse, TNewsGetDetailResponse } from "@/types/news";


export const useGetAllNews = (): UseQueryResult<TNewsGetAllResponse> =>
  useQuery({
    queryKey: ["get-all-news"],
    queryFn: async () => await getAllNewsRequest(),
  });

  export const useGetDetailNews = (id : string): UseQueryResult<TNewsGetDetailResponse> =>
    useQuery({
      queryKey: ["get-detail-news"],
      queryFn: async () => await getDetailNewsRequest(id),
    });
