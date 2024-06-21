import { TMetaResponse } from "@/lib/types"


export type TGetAllJobCompanyItem = {
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

export type TGetAllJobCompanyResponse = TMetaResponse<TGetAllJobCompanyItem>