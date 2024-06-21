
import { JOB, JOB_CATEGORY } from "@/lib/endpoints/jobs";
import { ALL_JOB_COMPANY } from "@/lib/endpoints/perusahaan/lowongan";

import { api } from '../../../config/api/apiConfig';

import { TCategoryResponse, TCreateJobPayload, TCreateJobResponse } from "@/types/jobs";
import { TGetAllJobCompanyResponse } from "@/types/perusahaan/lowongan";


export const getJobCategoryRequest = async (): Promise<TCategoryResponse> => {
  const { data } = await api.get(
    `${JOB_CATEGORY}`
  );
  return data;
}

export const createJobRequest = async (
  payload: TCreateJobPayload,
): Promise<TCreateJobResponse> => {
  
  const { data } = await api({
    method: "post",
    url: JOB,
    headers: {
      "Content-Type": "application/json",
      
    },
    data: payload,
  })
  return data;
};

export const getAllJobByCompanyIdRequest = async (

): Promise<TGetAllJobCompanyResponse> => {
  const { data } = await api.get(
    `${ALL_JOB_COMPANY}`
  );
  return data;
}