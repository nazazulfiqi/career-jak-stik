import { COMPANY } from '@/lib/endpoints/company';

import { api } from '../../config/api/apiConfig';

import { TAllCompanyResponse, TCompanyDetailResponse } from "@/types/company";



export const getAllCompanyRequest = async (): Promise<TAllCompanyResponse> => {
  const { data } = await api.get(
    `${COMPANY}`
  );
  return data;
}

export const getCompanyDetailRequest = async (id: string): Promise<TCompanyDetailResponse> => {
  const { data } = await api.get(
    `${COMPANY}/${id}`
  );
  return data;
}