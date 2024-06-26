import { EMAIL_VERIFICATION_VERIFY, LOGIN, REGISTER } from "@/lib/endpoints/authentications";
import { TMetaItem } from "@/lib/types";

import { api } from '../../config/api/apiConfig';

import { TLoginPayload, TLoginResponse, TOTPPayload, TRegisterPayload } from "@/types/authentications";


export const loginRequest = async (
  payload: TLoginPayload
): Promise<TLoginResponse> => {
  const data = await api.post<TLoginResponse>(LOGIN, payload);
  return data.data;
};

export const registerRequest = async (
  payload: TRegisterPayload
): Promise<TMetaItem> => await api.post(REGISTER, payload);

export const otpVerifyRequest = async (
  payload: TOTPPayload
): Promise<TMetaItem> => {
  const { data } = await api.post(EMAIL_VERIFICATION_VERIFY, payload);

  return data;
};
