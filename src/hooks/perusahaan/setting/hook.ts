import { useQuery,UseQueryResult } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";

import { TMetaErrorResponse } from "@/lib/types";
import { companyProfileGetRequest } from "@/hooks/perusahaan/setting/request";

import { companySettingState } from "@/recoil/atoms/perusahaan/setting";

import { TCompanyProfileResponse, TuseCompanySettingData } from "@/types/perusahaan/setting";


export const useCompanySetting = (): UseQueryResult<
  TCompanyProfileResponse,
  TMetaErrorResponse
> => {
  const { data: session } = useSession();
  return useQuery({
    enabled: !!session,
    queryKey: ['get-company-setting'],
    queryFn: async () => await companyProfileGetRequest(),
  });
};

export const useCompanySettingState = (): TuseCompanySettingData => {
  const [get, set] = useRecoilState(companySettingState);
  return {
    getCompanySettingData: get,
    setCompanySettingData: (val) => set(val),
  };
};