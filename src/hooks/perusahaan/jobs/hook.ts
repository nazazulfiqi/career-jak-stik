import { useMutation, UseMutationResult, useQuery,UseQueryResult } from "@tanstack/react-query";
import { useRecoilState } from "recoil";

import { TMetaErrorResponse } from "@/lib/types";
import { createJobRequest, getAllApplicantByJobIdRequest, getAllJobByCompanyIdRequest, getJobCategoryRequest, statusAcceptRequest, statusRejectRequest, statusReviewRequest } from "@/hooks/perusahaan/jobs/request";

import { applicantJobState } from "@/recoil/atoms/perusahaan/applicant-job";

import { TCategoryResponse, TCreateJobPayload, TCreateJobResponse } from "@/types/jobs";
import { TGetAllApplicantResponse, TGetAllJobCompanyResponse, TuseApplicantByJobIdData } from "@/types/perusahaan/lowongan";



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


  export const useGetAllApplicantByJobId = (
  id: string
  ): UseQueryResult<TGetAllApplicantResponse> =>
    useQuery({
      queryKey: ["all-applicant-by-job-id-get"],
      queryFn: async () => await getAllApplicantByJobIdRequest(id),
    });

    export const useApplicantByJobIdState = (): TuseApplicantByJobIdData => {
      const [get, set] = useRecoilState(applicantJobState);
      return {
        getApplicantByJobIdData: get,
        setApplicantByJobIdData: (val) => set(val),
      };
    };

    export const useStatusReview = () => {
      return useMutation({
        mutationKey: ['review'],
        mutationFn: async (applicant_id: string) =>
          await statusReviewRequest(applicant_id),
      });
    };

    export const useStatusAccept = () => {
      return useMutation({
        mutationKey: ['accept'],
        mutationFn: async (applicant_id: string) =>
          await statusAcceptRequest(applicant_id),
      });
    };

    export const useStatusReject = () => {
      return useMutation({
        mutationKey: ['reject'],
        mutationFn: async (applicant_id: string) =>
          await statusRejectRequest(applicant_id),
      });
    };