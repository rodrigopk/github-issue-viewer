import { EnvironmentService } from '../../../libs/config';
import { HttpService, IHttpService } from '../../../libs/http';

export class ApiStatusFacade {
  constructor(
    private readonly httpService: IHttpService = new HttpService(),
    private readonly configService = EnvironmentService,
  ) {}

  public async getStatus(): Promise<{ status: string }> {
    try {
      const result = await this.httpService.get<{ status: string }>({
        path: `${this.configService.baseApiUrl()}/health`,
      });

      return { status: result.data.status };
    } catch (error) {
      return { status: 'RED' };
    }
  }
}
