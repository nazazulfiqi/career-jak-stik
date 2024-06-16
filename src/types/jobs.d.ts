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

export type TGetDetailJob = {
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

export type TApplyJobPayload = {
  name: string
  email: string
  phoneNumber: string
  latestJob: string
  linkedInUrl: string
  portofolioUrl: string
  addInformation: string
  resume: File | null | string
}

export type TApplyJobResponse = {
  statusCode: number
  message: string
  data: {
    id: string
  status: string
  jobId: string
  userId: string
  }
}


export type TCreateJobResponse = TMetaResponseSingle<TJobItem>
export type TGetAllJobResponse = TMetaResponse<TGetAllJob>
export type TCategoryResponse = TMetaResponse<TCategoryItem>
export type TGetDetailJobResponse = TMetaResponseSingle<TGetDetailJob>