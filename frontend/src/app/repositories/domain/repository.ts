import { RepositoryDTO } from './repository.dto';

export class Repository {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly owner: string,
    public readonly description: string,
    public readonly issuesCount: number,
  ) {}

  public static create(dto: RepositoryDTO): Repository {
    return new Repository(
      dto.id,
      dto.name,
      dto.owner.login,
      dto.description,
      dto.open_issues,
    );
  }

  public toJSON(): RepositoryDTO {
    return {
      id: this.id,
      name: this.name,
      owner: {
        login: this.owner,
      },
      description: this.description,
      open_issues: this.issuesCount,
    };
  }
}
