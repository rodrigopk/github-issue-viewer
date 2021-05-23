export class EnvironmentService {
  public static isReactQueryDevtoolsEnabled() {
    return process.env.REACT_APP_ENABLE_QUERY_DEVTOOLS === 'true';
  }

  public static baseApiUrl() {
    return `${process.env.REACT_APP_BASE_API_URL}/api`;
  }

  public static githubClientId() {
    return process.env.REACT_APP_GITHUB_CLIENT_ID;
  }
}
