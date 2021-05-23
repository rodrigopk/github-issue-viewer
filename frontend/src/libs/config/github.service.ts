export class GithubService {
  public static baseApiUrl() {
    return 'https://api.github.com';
  }

  public static baseApiHeaders(accessToken: string) {
    return {
      Authorization: `token ${accessToken}`,
      Accept: 'application/vnd.github.v3+json',
    };
  }

  public static authorizationUrl() {
    return 'https://github.com/login/oauth/authorize';
  }
}
