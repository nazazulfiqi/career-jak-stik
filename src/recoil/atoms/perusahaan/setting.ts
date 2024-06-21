import { atom } from "recoil";

import { TCompanyProfileResponse } from "@/types/perusahaan/setting";


export const companySettingState = atom<TCompanyProfileResponse>({
  key: "company-setting-state",
  default: {
    statusCode: 0,
    message: '',
        data: { 
           id: '',
           name: '',
           email: '',
           employeeTotal: '',
          about: '',
          dateFounded: '',
          link: '',
          industry: '',
          location: '',
          techStack: [],
  },
    }
  },
)