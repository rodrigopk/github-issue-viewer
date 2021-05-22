export class Code {
  constructor(public value?: string) {}

  public static create(dto: { value?: string }) {
    return new Code(dto.value);
  }

  public isValid() {
    return !!this.value;
  }
}
