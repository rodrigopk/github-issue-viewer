import { EnvironmentService } from '../../libs/config';

export const useGetGithubAuthorizationUrl = (
  configService = EnvironmentService,
) => {
  const baseUrl = 'https://github.com/login/oauth/authorize';
  const scopes = 'repo';
  const clientId = configService.githubClientId();

  return {
    authorizationUrl: `${baseUrl}?client_id=${clientId}&scope=${scopes}`,
  };
};
