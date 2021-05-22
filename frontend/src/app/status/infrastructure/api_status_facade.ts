import { HttpService, IHttpService } from '../../../libs/http';

export class ApiStatusFacade {
  private baseApiUrl = 'http://localhost:3000';

  constructor(private readonly httpService: IHttpService = new HttpService()) {}

  public async getStatus(): Promise<{ status: string }> {
    try {
      const result = await this.httpService.get<{ status: string }>(
        `${this.baseApiUrl}/health`,
      );

      return { status: result.data.status };
    } catch (error) {
      return { status: 'RED' };
    }
  }
}
