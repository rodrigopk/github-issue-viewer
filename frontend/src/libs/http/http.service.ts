import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { IHttpService } from './i_http.service';

export class HttpService implements IHttpService {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      headers: { 'Content-Type': 'application/json' },
    });
  }

  public get<T>({
    path,
    config = {},
  }: {
    path: string;
    config?: AxiosRequestConfig;
  }) {
    return this.instance.get<T>(path, config);
  }

  public post<T>({
    path,
    payload,
    config = {},
  }: {
    path: string;
    payload: T;
    config?: AxiosRequestConfig;
  }) {
    return this.instance.post(path, payload, config);
  }
}
