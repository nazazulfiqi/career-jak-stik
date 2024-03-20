import { useMutation,UseMutationResult } from "@tanstack/react-query";

import { TMetaErrorResponse, TMetaItem } from "@/lib/types";
import { otpVerifyRequest, registerRequest } from "@/hooks/auth/request";

import { TOTPPayload, TRegisterPayload } from "@/types/authentications";


export const useRegister = (): UseMutationResult<
  TMetaItem,
  TMetaErrorResponse,
  TRegisterPayload,
  unknown
> =>
  useMutation({
    mutationKey: ['register'],
    mutationFn: async (payload) => await registerRequest(payload),
  });

  export const useOtpVerify = (): UseMutationResult<
  TMetaItem,
  TMetaErrorResponse,
  TOTPPayload
> =>
  useMutation({
    mutationKey: ['otp-verify'],
    mutationFn: async (payload) => otpVerifyRequest(payload),
  });
