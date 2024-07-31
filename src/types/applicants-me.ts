import { TMetaResponse } from "@/lib/types"

export interface TApplicantsMeItem {
  id: string
  status: string
  jobId: string
  userId: string
}

export type TGetAllApplicantMeResponse = TMetaResponse<TApplicantsMeItem>
