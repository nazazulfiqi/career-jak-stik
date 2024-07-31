import { TMetaResponseSingle } from "@/lib/types"


export type TUserData =  {
  id: string
  name: string
  email: string
  address: string | null
  phoneNumber: string | null
  latestJob: string | null
  major: string | null
  gpa: string | null
  linkedInUrl: string | null
  portofolioUrl: string | null
  addInformation: string | null
  resume: File | null | string
  transcript: File | null | string
  profilePicture: string | null
}

export type TUserDetailResponse = TMetaResponseSingle<TUserData>;


export type TUpdateUserDataPayload = {
  name?: string
  email?: string
  address?: string | null
  phoneNumber?: string | null
  latestJob?: string | null
  major?: string | null
  gpa?: string | null
  linkedInUrl?: string | null
  portofolioUrl?: string | null
  addInformation?: string | null
  resume?: any
  transcript?: any
}

export type TProfilePicturePayload = {
  profilePicture?: File | string | null;
};