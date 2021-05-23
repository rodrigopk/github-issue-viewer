import { Repository } from './repository';

const dto = {
  id: 1296269,
  name: 'Hello-World',
  owner: {
    login: 'octocat',
  },
  description: 'This your first repo!',
  open_issues: 1,
};

describe('create', () => {
  it('creates an instance of a repository', () => {
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

describe('toJSON', () => {
  it('returns the correct object', () => {
    const repo = Repository.create(dto);

    expect(repo.toJSON()).toEqual(dto);
  });
});
