

import { APPLICANTS_ME } from '@/lib/endpoints/applicants-me';

import { api } from '../../config/api/apiConfig';

import { TGetAllApplicantMeResponse } from '@/types/applicants-me';


export const getAllApplicantMeRequest = async (status: string): Promise<TGetAllApplicantMeResponse> => {
  const { data } = await api.get(
    `${APPLICANTS_ME}?status=${status}`
  );
  return data;
}