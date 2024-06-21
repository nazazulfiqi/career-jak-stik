import { useMutation, UseMutationResult, useQuery,UseQueryResult } from "@tanstack/react-query";

import { TMetaErrorResponse } from "@/lib/types";
import { createJobRequest, getAllJobByCompanyIdRequest, getJobCategoryRequest } from "@/hooks/perusahaan/jobs/request";

import { TCategoryResponse, TCreateJobPayload, TCreateJobResponse } from "@/types/jobs";
import { TGetAllJobCompanyResponse } from "@/types/perusahaan/lowongan";



export const useGetJobCategory = (): UseQueryResult<TCategoryResponse> =>
  useQuery({
    queryKey: ["category-get"],
    queryFn: async () => await getJobCategoryRequest(),
  });


  export const useCreateJob = (): UseMutationResult<
TCreateJobResponse,
TMetaErrorResponse,
TCreateJobPayload,
unknown
> => {
return useMutation({
  mutationKey: ['create-job'],
  mutationFn: async (payload) => await createJobRequest(payload),
});
};

export const useGetAllJobByCompanyId = (
  
): UseQueryResult<TGetAllJobCompanyResponse> =>
  useQuery({
    queryKey: ["all-job-company-get"],
    queryFn: async () => await getAllJobByCompanyIdRequest(),
  });