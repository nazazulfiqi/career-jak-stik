'use client'

import { useMutation, UseMutationResult, useQuery,useQueryClient,UseQueryResult } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

import { TMetaErrorResponse, TMetaItem } from "@/lib/types";
import { profileGetRequest, updateProfilePictureRequest, updateProfileRequest } from "@/hooks/account/request";

import { useToast } from "@/components/ui/use-toast";

import { TProfilePicturePayload, TUpdateUserDataPayload, TUserDetailResponse } from "@/types/account";


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


export const useUpdateProfilePicture = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation<TProfilePicturePayload, TMetaItem, FormData>({
    mutationKey: ['update-profile-picture'],
    mutationFn: async (formData) => {
      const response = await updateProfilePictureRequest(formData);
      return response;
    },
    onSuccess: () => {
      toast({
        title: 'Berhasil',
        description: 'Foto profil berhasil diperbarui',
      });
      queryClient.invalidateQueries(['get-user-me'] as any);
    },
  });
};

