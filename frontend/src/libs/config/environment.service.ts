export class EnvironmentService {
  public static isReactQueryDevtoolsEnabled() {
    return process.env.REACT_APP_ENABLE_QUERY_DEVTOOLS === 'true';
  }

  public static baseApiUrl() {
    return process.env.REACT_APP_BASE_API_URL;
  }
}
