import { AccessToken } from '../../authentication/domain';
import { Repository } from '../../repositories/domain';

import { Issue } from '../domain/issue';
import { IssuesFacade } from './issues.facade';

describe('IssuesFacade', () => {
  const mockHttpService = {
    get: jest.fn(),
    post: jest.fn(),
  };

  it('is defined', () => {
    expect(IssuesFacade).toBeDefined();
  });

  describe('listRepositoryIssues', () => {
    const accessToken = AccessToken.create({ value: 'accessToken' });
    const repository = Repository.create({
      id: 1296269,
      name: 'Hello-World',
      owner: {
        login: 'octocat',
      },
      description: 'This your first repo!',
      open_issues: 1,
    });
    const page = 1;
    const apiResponse = {
      status: 200,
      statusText: '',
      headers: {},
      config: {},
      data: [
        {
          id: 1,
          number: 1347,
          title: 'Found a bug',
          body: "I'm having a problem with this.",
          user: {
            login: 'octocat',
          },
          created_at: '2011-04-22T13:33:48Z',
        },
        {
          id: 2,
          number: 1348,
          title: 'Pull request',
          body: 'This is a pull request',
          user: {
            login: 'octocat',
          },
          pull_request: {
            url: 'https://api.github.com/repos/octocat/Hello-World/pulls/1347',
            html_url: 'https://github.com/octocat/Hello-World/pull/1347',
            diff_url: 'https://github.com/octocat/Hello-World/pull/1347.diff',
            patch_url: 'https://github.com/octocat/Hello-World/pull/1347.patch',
          },
          created_at: '2011-04-22T13:33:48Z',
        },
      ],
    };

    const facade = new IssuesFacade(mockHttpService);
    let result: Issue[];

    describe('happy path', () => {
      beforeEach(async () => {
        mockHttpService.get.mockReturnValueOnce(Promise.resolve(apiResponse));

        result = await facade.listRepositoryIssues({
          repository,
          accessToken,
          page,
        });
      });

      it('makes an http request to list the repository issues', () => {
        expect(mockHttpService.get).toHaveBeenCalledWith({
          path: `https://api.github.com/repos/${repository.owner}/${repository.name}/issues?page=${page}`,
          config: {
            headers: {
              Authorization: `token ${accessToken.value}`,
              Accept: 'application/vnd.github.v3+json',
            },
          },
        });
      });

      it('returns the retrieved issues as domain objects, ignoring pull requests', () => {
        expect(result.length).toEqual(1);
        expect(result[0]).toBeInstanceOf(Issue);
        expect(result[0].id).toEqual(1);
      });
    });

    describe('given there was an error while fetching the issues', () => {
      it('rejects the promise', () => {
        const error = new Error('Connection error');

        mockHttpService.get.mockReturnValueOnce(Promise.reject(error));

        return expect(
          facade.listRepositoryIssues({ repository, accessToken, page }),
        ).rejects.toEqual(error);
      });
    });
  });
});
