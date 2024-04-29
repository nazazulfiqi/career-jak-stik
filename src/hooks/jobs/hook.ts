import { useQuery,UseQueryResult } from "@tanstack/react-query";

import { getAllJobRequest } from "@/hooks/jobs/request";

import { TGetAllJobResponse } from "@/types/jobs";



export const useGetAllJob = (): UseQueryResult<TGetAllJobResponse> =>
  useQuery({
    queryKey: ["get-job"],
    queryFn: async () => await getAllJobRequest(),
  });