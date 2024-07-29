import { TMetaResponse, TMetaResponseSingle } from "@/lib/types"


export interface TNewsCreateResponseItem {
  id: string
  title: string
  thumbnail: string
  content: string
  hashtag: string[]
  author: string
  createdAt: string
}

export interface TNewsGetAllItem {
  id: string
  title: string
  thumbnail: string
  content: string
  hashtag: string[]
  author: string
  createdAt: string
}


export type TNewsGetAllResponse = TMetaResponse<TNewsGetAllItem>
export type TNewsCreateResponse = TMetaResponseSingle<TNewsCreateResponseItem>
export type TNewsGetDetailResponse = TMetaResponseSingle<TNewsGetAllItem>
export type TNewsEditResponse = TMetaResponseSingle<TNewsCreateResponseItem>