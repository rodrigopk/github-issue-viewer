import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface IHttpService {
  get: <T>(url: string) => Promise<AxiosResponse<T>>;
  post: <P, R>(params: {
    path: string;
    payload: P;
    config?: AxiosRequestConfig;
  }) => Promise<AxiosResponse<R>>;
}
