type AccessTokenDTO = {
  value: string;
};

export class AccessToken {
  constructor(public value: string) {}

  public static create(dto: AccessTokenDTO) {
    return new AccessToken(dto.value);
  }

  public toJSON(): AccessTokenDTO {
    return {
      value: this.value,
    };
  }
}
