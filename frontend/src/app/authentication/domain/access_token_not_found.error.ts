export class AccessTokenNotFoundError extends Error {
  constructor() {
    super('Access token not found');
  }
}
