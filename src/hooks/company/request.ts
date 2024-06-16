import { COMPANY } from '@/lib/endpoints/company';

import { api } from '../../config/api/apiConfig';

import { TCompanyDetailResponse } from "@/types/company";
export const getCompanyDetailRequest = async (id: string): Promise<TCompanyDetailResponse> => {
  const { data } = await api.get(
    `${COMPANY}/${id}`
  );
  return data;
}