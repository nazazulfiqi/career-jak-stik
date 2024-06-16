import { useQuery,UseQueryResult } from "@tanstack/react-query";

import { getCompanyDetailRequest } from "@/hooks/company/request";

import { TCompanyDetailResponse } from "@/types/company";


export const useGetCompanyDetail = (
  id: string
): UseQueryResult<TCompanyDetailResponse> =>
  useQuery({
    queryKey: ['get-job-detail'],
    queryFn: async () => await getCompanyDetailRequest(id),
  });