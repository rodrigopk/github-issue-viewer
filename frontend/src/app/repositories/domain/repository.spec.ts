import { Repository } from './repository';

describe('create', () => {
  it('creates an instance of a repository', () => {
    const dto = {
      id: 1296269,
      name: 'Hello-World',
      owner: {
        login: 'octocat',
        id: 1,
      },
      description: 'This your first repo!',
      open_issues: 1,
    };
    const repo = Repository.create(dto);

    expect(repo).toBeInstanceOf(Repository);
    expect(repo).toEqual(
      expect.objectContaining({
        id: dto.id,
        name: dto.name,
        owner: dto.owner.login,
        description: dto.description,
        issuesCount: dto.open_issues,
      }),
    );
  });
});
