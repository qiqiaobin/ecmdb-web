export interface ListResourceReq {
  /** 跳过条数 */
  offset: number
  /** 查询条数 */
  limit: number
  model_uid: string
}

export interface detailResource {
  id: number
  model_uid: string
}

export interface Resource {
  id: number
  name: string
  model_uid: string
  data: any
}

export interface CreateResourceReq {
  name: string
  model_uid: string
  data: any
}

export interface ResourceData {
  total: number
  resources: Resource[]
}