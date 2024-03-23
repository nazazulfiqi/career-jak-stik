import { USER_PROFILE } from "@/lib/endpoints/account";

import { api } from '../../config/api/apiConfig';

import { TUpdateUserDataPayload, TUserDetailResponse } from "@/types/account";

export const profileGetRequest = async (): Promise<TUserDetailResponse> => {
  const { data } = await api.get(USER_PROFILE);
  return data;
};

// export const updateProfileRequest = async (
//   payload: TUpdateUserDataPayload
// ): Promise<TMetaItem> => {
//   const { data } = await api.put(USER_PROFILE, payload);

//   return data;
// };

export const updateProfileRequest = async (
  payload: TUpdateUserDataPayload | unknown
): Promise<TUpdateUserDataPayload> => {
  const { data } = await api({
    method: 'put',
    url: USER_PROFILE,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: payload,
  });
  return data;
};
