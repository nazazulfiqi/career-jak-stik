import { TMetaResponseSingle } from "@/lib/types"


export type TCompanyProfileItem = {
  id: string
  name: string
  email: string
  location: any
  employeeTotal: any
  industry: any
  dateFounded: any
  techStack: any[]
  about: any
}

export type TCompanyProfileResponse = TMetaResponseSingle<TCompanyProfileItem>


export type TuseCompanySettingData = {
  getCompanySettingData: TCompanyProfileResponse;
  setCompanySettingData: (val: TCompanyProfileResponse) => void;
};