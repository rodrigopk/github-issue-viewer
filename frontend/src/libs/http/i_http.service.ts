import { AxiosResponse } from 'axios';

export interface IHttpService {
  get: <T>(url: string) => Promise<AxiosResponse<T>>;
}
