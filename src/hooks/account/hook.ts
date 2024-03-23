'use client'

import { useMutation, UseMutationResult, useQuery,UseQueryResult } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

import { TMetaErrorResponse, TMetaItem } from "@/lib/types";
import { profileGetRequest, updateProfileRequest } from "@/hooks/account/request";

import { TUpdateUserDataPayload, TUserDetailResponse } from "@/types/account";


export const useProfile = (): UseQueryResult<
  TUserDetailResponse,
  TMetaErrorResponse
> => {
  const { data: session } = useSession();
  return useQuery({
    enabled: !!session,
    queryKey: ['get-user-me'],
    queryFn: async () => await profileGetRequest(),
  });
};

export const useUpdateUserProfile = (): UseMutationResult<
TUpdateUserDataPayload,
  TMetaItem,
  unknown
> => {
  return useMutation({
    mutationKey: ['update-user-profile'],
    mutationFn: async (payload) => await updateProfileRequest(payload),
  });
};

