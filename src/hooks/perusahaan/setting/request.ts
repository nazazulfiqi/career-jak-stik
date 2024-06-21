import { COMPANY_SETTING } from '@/lib/endpoints/perusahaan/setting';

import { api } from '../../../config/api/apiConfig';

import { TCompanyProfilePayload, TCompanyProfileResponse } from "@/types/perusahaan/setting";



export const companyProfileGetRequest = async (): Promise<TCompanyProfileResponse> => {
  const { data } = await api.get(COMPANY_SETTING);
  return data;
};

export const companyUpdateProfileRequest = async (
  payload: TCompanyProfilePayload | unknown
): Promise<TCompanyProfilePayload> => {
  const { data } = await api({
    method: 'put',
    url: COMPANY_SETTING,

    data: payload,
  });
  return data;
};