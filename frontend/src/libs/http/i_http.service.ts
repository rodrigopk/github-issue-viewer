import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface IHttpService {
  get: <R>(params: {
    path: string;
    config?: AxiosRequestConfig;
  }) => Promise<AxiosResponse<R>>;
  post: <P, R>(params: {
    path: string;
    payload: P;
    config?: AxiosRequestConfig;
  }) => Promise<AxiosResponse<R>>;
}
