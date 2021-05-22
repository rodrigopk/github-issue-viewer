export class AccessToken {
  constructor(public value: string) {}

  public static create(dto: { value: string }) {
    return new AccessToken(dto.value);
  }
}
