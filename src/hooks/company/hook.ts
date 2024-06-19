import { useQuery,UseQueryResult } from "@tanstack/react-query";

import { getAllCompanyRequest, getCompanyDetailRequest } from "@/hooks/company/request";

import { TCompanyDetailResponse } from "@/types/company";



export const useGetAllCompany = (
): UseQueryResult<TCompanyDetailResponse> =>
  useQuery({
    queryKey: ['get-all-company'],
    queryFn: async () => await getAllCompanyRequest(),
  });

export const useGetCompanyDetail = (
  id: string
): UseQueryResult<TCompanyDetailResponse> =>
  useQuery({
    queryKey: ['get-detail-company'],
    queryFn: async () => await getCompanyDetailRequest(id),
  });