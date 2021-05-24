import { GithubService } from '../../../libs/config';
import { HttpService, IHttpService } from '../../../libs/http';
import { AccessToken } from '../../authentication/domain';
import { Repository } from '../../repositories/domain';
import { Issue, IssueDTO } from '../domain';

export class IssuesFacade {
  constructor(
    private readonly httpService: IHttpService = new HttpService(),
    private readonly githubService = GithubService,
  ) {}

  public async listRepositoryIssues({
    accessToken,
    repository,
    page,
  }: {
    accessToken: AccessToken;
    repository: Repository;
    page: number;
  }): Promise<Issue[]> {
    const result = await this.httpService.get<IssueDTO[]>({
      path: `${this.githubService.baseApiUrl()}/repos/${repository.owner}/${
        repository.name
      }/issues?page=${page}`,
      config: {
        headers: this.githubService.baseApiHeaders(accessToken.value),
      },
    });

    return result.data
      .filter((dto) => dto.pull_request === undefined)
      .map((dto) => Issue.create(dto));
  }
}
