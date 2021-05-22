import axios, { AxiosInstance } from 'axios';

import { IHttpService } from './i_http.service';

export class HttpService implements IHttpService {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      headers: { 'Content-Type': 'application/json' },
    });
  }

  public get<T>(url: string) {
    return this.instance.get<T>(url);
  }
}
