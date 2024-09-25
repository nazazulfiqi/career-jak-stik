import { ALL_INDUSTRIES, COMPANY_SETTING } from '@/lib/endpoints/perusahaan/setting';

import { api } from '../../../config/api/apiConfig';

import { TGetAllIndustryItem } from '@/types/perusahaan/industry';
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
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: payload,
  });
  return data;
};


export const getIndustriesRequest = async (): Promise<TGetAllIndustryItem> => {
  const { data } = await api.get(
    `${ALL_INDUSTRIES}`
  );
  return data;
}
