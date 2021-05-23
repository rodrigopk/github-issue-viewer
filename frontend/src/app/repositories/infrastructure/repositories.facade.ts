import { GithubService } from '../../../libs/config';
import { HttpService, IHttpService } from '../../../libs/http';
import { AccessToken } from '../../authentication/domain';
import { Repository, RepositoryDTO } from '../domain';

export class RepositoriesFacade {
  constructor(
    private readonly httpService: IHttpService = new HttpService(),
    private readonly githubService = GithubService,
  ) {}

  public async listRepositories(token: AccessToken): Promise<Repository[]> {
    const result = await this.httpService.get<RepositoryDTO[]>({
      path: `${this.githubService.baseApiUrl()}/user/repos?per_page=100&page=1`,
      config: {
        headers: this.githubService.baseApiHeaders(token.value),
      },
    });

    return result.data.map((dto) => Repository.create(dto));
  }
}
