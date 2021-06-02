import { Pagination } from "./pagination.model";

export interface Response {
  status: number;
  data: {};
}


export interface ResponseModel <T>{
  status: number;
  data: T;
}


export interface ResponsePagination <T>{
  status: number;
  data: Pagination<T>;
}
