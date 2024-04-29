import { TMetaResponse, TMetaResponseSingle } from "@/lib/types"


export type TCategoryItem = {
  name: string
}

export type TCreateJobPayload = {
  title: string
  category: string
  jobType: string
  salaryFrom: string
  salaryTo: string
  skills: string[]
  description: string
  responsibility: string
  benefit: string[]
}


export type TJobItem = {
  id: string
  categoryId: string
  userId: string
  title: string
  jobType: string
  salaryFrom: string
  salaryTo: string
  skills: string[]
  description: string
  responsibility: string
  benefit: string[]
}

export type TGetAllJob = {
  id: string
  categoryId: string
  userId: string
  title: string
  jobType: string
  skills: string[]
  companyName: string
  location: null | string
}

export type TCreateJobResponse = TMetaResponseSingle<TJobItem>
export type TGetAllJobResponse = TMetaResponse<TGetAllJob>
export type TCategoryResponse = TMetaResponse<TCategoryItem>