import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';

import {
  applyJobRequest,
  getAllJobRequest,
  getDetailJobRequest,
} from '@/hooks/jobs/request';

import { useToast } from '@/components/ui/use-toast';

import {
  TApplyJobPayload,
  TGetAllJobResponse,
  TGetDetailJobResponse,
} from '@/types/jobs';

export const useGetAllJob = (): UseQueryResult<TGetAllJobResponse> =>
  useQuery({
    queryKey: ['get-job'],
    queryFn: async () => await getAllJobRequest(),
  });

export const useGetDetailJob = (
  id: string
): UseQueryResult<TGetDetailJobResponse> =>
  useQuery({
    queryKey: ['get-job-detail'],
    queryFn: async () => await getDetailJobRequest(id),
  });

export const useApplyJob = (
  id: string
): UseMutationResult<TApplyJobPayload, unknown, TApplyJobPayload> => {
  const { toast } = useToast();
  return useMutation({
    mutationKey: ['apply-job', id],
    mutationFn: async (payload) => await applyJobRequest(payload, id),
    onSuccess: () => {
      toast({
        title: 'Berhasil',
        description: 'Lowongan anda telah terkirim',
      });
    },
    onError: (error: any) => {
      toast({
        title: 'Gagal',
        description: error.response?.data?.message || error.message,
      });
    },
  });
};
