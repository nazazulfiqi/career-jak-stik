import { useMutation, UseMutationResult, useQuery,UseQueryResult } from "@tanstack/react-query";

import { TMetaErrorResponse } from "@/lib/types";
import { createJobRequest, getJobCategoryRequest } from "@/hooks/perusahaan/jobs/request";

import { TCategoryResponse, TCreateJobPayload, TCreateJobResponse } from "@/types/jobs";



export const useGetJobCategory = (): UseQueryResult<TCategoryResponse> =>
  useQuery({
    queryKey: ["descriptions-get"],
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