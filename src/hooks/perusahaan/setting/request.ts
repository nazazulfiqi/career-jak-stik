import { COMPANY_SETTING } from '@/lib/endpoints/perusahaan/setting';

import { api } from '../../../config/api/apiConfig';

import { TCompanyProfileResponse } from "@/types/perusahaan/setting";



export const companyProfileGetRequest = async (): Promise<TCompanyProfileResponse> => {
  const { data } = await api.get(COMPANY_SETTING);
  return data;
};

