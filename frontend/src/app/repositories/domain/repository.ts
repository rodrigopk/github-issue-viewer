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
}
