import { EnvironmentService, GithubService } from '../../../libs/config';

export const useGetGithubAuthorizationUrl = (
  envService = EnvironmentService,
  githubService = GithubService,
) => {
  const baseUrl = githubService.authorizationUrl();
  const scopes = 'repo';
  const clientId = envService.githubClientId();

  return {
    authorizationUrl: `${baseUrl}?client_id=${clientId}&scope=${scopes}`,
  };
};
