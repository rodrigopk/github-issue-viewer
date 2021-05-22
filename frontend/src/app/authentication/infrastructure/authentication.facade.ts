import { EnvironmentService } from '../../../libs/config';
import { HttpService, IHttpService } from '../../../libs/http';
import { AccessToken, Code } from '../domain';
import { InvalidCodeError } from './invalid_code.error';

export class AuthenticationFacade {
  constructor(
    private readonly httpService: IHttpService = new HttpService(),
    private readonly configService = EnvironmentService,
  ) {}

  public async signin(code: Code): Promise<AccessToken> {
    if (code.isValid()) {
      const value = code.value as string;

      const result = await this.httpService.post<
        { code: string },
        { access_token: string }
      >({
        path: `${this.configService.baseApiUrl()}/github/signin`,
        payload: {
          code: value,
        },
      });

      return AccessToken.create({ value: result.data.access_token });
    } else {
      throw new InvalidCodeError();
    }
  }
}
