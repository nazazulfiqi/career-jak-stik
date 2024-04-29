import { JOB } from "@/lib/endpoints/jobs";

import { api } from '../../config/api/apiConfig';

import { TGetAllJobResponse } from "@/types/jobs";



export const getAllJobRequest = async (): Promise<TGetAllJobResponse> => {
  const { data } = await api.get(
    `${JOB}`
  );
  return data;
}