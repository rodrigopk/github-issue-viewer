export class EnvironmentService {
  public static isReactQueryDevtoolsEnabled() {
    return process.env.REACT_APP_ENABLE_QUERY_DEVTOOLS === 'true';
  }
}
