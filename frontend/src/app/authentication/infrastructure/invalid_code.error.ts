export class InvalidCodeError extends Error {
  constructor() {
    super('Invalid Github Code');
  }
}
