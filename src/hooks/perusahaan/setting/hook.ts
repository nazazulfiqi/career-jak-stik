import { useMutation, UseMutationResult, useQuery,UseQueryResult } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";

import { TMetaErrorResponse } from "@/lib/types";
import { companyProfileGetRequest, companyUpdateProfileRequest, getIndustriesRequest } from "@/hooks/perusahaan/setting/request";

import { companySettingState } from "@/recoil/atoms/perusahaan/setting";

import { TGetAllIndustryResponse } from "@/types/perusahaan/industry";
import { TCompanyProfilePayload, TCompanyProfileResponse, TuseCompanySettingData } from "@/types/perusahaan/setting";


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

export const useUpdateCompanyProfile = (): UseMutationResult<
TCompanyProfilePayload,
  TMetaErrorResponse,
  unknown
> => {
  return useMutation({
    mutationKey: ['update-user-profile'],
    mutationFn: async (payload) => await companyUpdateProfileRequest(payload),
  });
};

export const useCompanySettingState = (): TuseCompanySettingData => {
  const [get, set] = useRecoilState(companySettingState);
  return {
    getCompanySettingData: get,
    setCompanySettingData: (val) => set(val),
  };
};

export const useGetIndustries = (): UseQueryResult<TGetAllIndustryResponse> =>
  useQuery({
    queryKey: ["industries-get"],
    queryFn: async () => await getIndustriesRequest(),
  });