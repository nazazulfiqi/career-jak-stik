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


interface TGetAllApplicantItem {
  id: string;
  jobId: string;
  userId: string;
  name: string;
  email: string;
  status: string;
  phoneNumber: string;
  resume: string;
}

export type TGetAllApplicantResponse = TMetaResponse<TGetAllApplicantItem>


export type TuseApplicantByJobIdData = {
  getApplicantByJobIdData: TGetAllApplicantResponse;
  setApplicantByJobIdData: (val: TGetAllApplicantResponse) => void;
};