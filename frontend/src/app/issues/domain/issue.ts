import { IssueDTO } from './issue.dto';

export class Issue {
  constructor(
    public readonly id: number,
    public readonly number: number,
    public readonly title: string,
    public readonly body: string,
    public readonly author: string,
    public readonly createdAt: Date,
  ) {}

  public static create(dto: IssueDTO): Issue {
    return new Issue(
      dto.id,
      dto.number,
      dto.title,
      dto.body,
      dto.user.login,
      new Date(dto.created_at),
    );
  }

  public toJSON(): IssueDTO {
    return {
      id: this.id,
      number: this.number,
      title: this.title,
      body: this.body,
      user: {
        login: this.author,
      },
      created_at: this.createdAt.toISOString(),
    };
  }
}
