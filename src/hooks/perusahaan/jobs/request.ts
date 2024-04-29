
import { JOB, JOB_CATEGORY } from "@/lib/endpoints/jobs";

import { api } from '../../../config/api/apiConfig';

import { TCategoryResponse, TCreateJobPayload, TCreateJobResponse } from "@/types/jobs";


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
