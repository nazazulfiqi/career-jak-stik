import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { getAllApplicantMeRequest } from "@/hooks/applicants-me/request";

import { TGetAllApplicantMeResponse } from "@/types/applicants-me";


export const useGetAllAplicantsMe = (status: string): UseQueryResult<TGetAllApplicantMeResponse> =>
  useQuery({
    queryKey: ['get-applicants-me', status],
    queryFn: async () => await getAllApplicantMeRequest(status),
  });