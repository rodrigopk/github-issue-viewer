import { Issue } from './issue';

describe('create', () => {
  it('returns an instance of an issue', () => {
    const dto = {
      id: 1,
      number: 1347,
      title: 'Found a bug',
      body: "I'm having a problem with this.",
      user: {
        login: 'octocat',
        id: 1,
      },
      created_at: '2011-04-22T13:33:48Z',
    };
    const issue = Issue.create(dto);

    expect(issue).toBeInstanceOf(Issue);
    expect(issue).toEqual(
      expect.objectContaining({
        id: dto.id,
        number: dto.number,
        title: dto.title,
        body: dto.body,
        author: dto.user.login,
        createdAt: new Date(dto.created_at),
      }),
    );
  });
});
