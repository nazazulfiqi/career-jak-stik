

import { NEWS, NEWS_DETAIL } from '@/lib/endpoints/news';

import { api } from '../../config/api/apiConfig';

import { TNewsGetAllResponse, TNewsGetDetailResponse, TNewsRelatedResponse } from '@/types/news';



export const getAllNewsRequest = async (search?: string): Promise<TNewsGetAllResponse> => {
  const { data } = await api.get(`${NEWS}`, {
    params: { search }, 
  });
  return data;
}


export const getDetailNewsRequest = async (id: string): Promise<TNewsGetDetailResponse> => {
  const { data } = await api.get(
    `${NEWS_DETAIL}/${id}`
  );
  return data;
}

export const getRelatedNews = async (id: string): Promise<TNewsRelatedResponse> => {
  const { data } = await api.get(
    `${NEWS}/${id}/related`
  );
  return data;
}
