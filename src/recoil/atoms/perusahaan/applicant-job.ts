import { atom } from "recoil";

import { TGetAllApplicantResponse } from "@/types/perusahaan/lowongan";


export const applicantJobState = atom<TGetAllApplicantResponse>({
  key: "applicant-job-state",
  default: {
    statusCode: 0,
    message: '',
        data: []
    }
  },
)