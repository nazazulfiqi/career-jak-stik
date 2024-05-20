import { JOB, JOB_APPLY } from "@/lib/endpoints/jobs";

import { api } from '../../config/api/apiConfig';

import { TApplyJobPayload, TGetAllJobResponse, TGetDetailJobResponse } from "@/types/jobs";



export const getAllJobRequest = async (): Promise<TGetAllJobResponse> => {
  const { data } = await api.get(
    `${JOB}`
  );
  return data;
}

export const getDetailJobRequest = async (id: string): Promise<TGetDetailJobResponse> => {
  const { data } = await api.get(
    `${JOB}/${id}`
  );
  return data;
}

export const applyJobRequest = async (
  payload: TApplyJobPayload,
  id: string
): Promise<TApplyJobPayload> => {
  const { data } = await api({
    method: 'post',
    url: `${JOB_APPLY}/${id}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: payload,
  });
  return data;
};
