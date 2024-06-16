
export type TCompanyDetailItem = {
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

export type TCompanyDetailResponse = TMetaResponseSingle<TCompanyDetailItem>