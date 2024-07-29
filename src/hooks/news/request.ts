

import { NEWS, NEWS_DETAIL } from '@/lib/endpoints/news';

import { api } from '../../config/api/apiConfig';

import { TNewsGetAllResponse, TNewsGetDetailResponse } from '@/types/news';



export const getAllNewsRequest = async (): Promise<TNewsGetAllResponse> => {
  const { data } = await api.get(
    `${NEWS}`
  );
  return data;
}

export const getDetailNewsRequest = async (id: string): Promise<TNewsGetDetailResponse> => {
  const { data } = await api.get(
    `${NEWS_DETAIL}/${id}`
  );
  return data;
}
