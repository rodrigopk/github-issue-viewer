import { AccessToken } from '../../authentication/domain';
import { Repository } from '../domain';
import { RepositoriesFacade } from './repositories.facade';

describe('RepositoriesFacade', () => {
  const mockHttpService = {
    get: jest.fn(),
    post: jest.fn(),
  };

  it('is defined', () => {
    expect(RepositoriesFacade).toBeDefined();
  });

  describe('listRepositories', () => {
    const accessToken = AccessToken.create({ value: 'accessToken' });
    const apiResponse = {
      status: 200,
      statusText: '',
      headers: {},
      config: {},
      data: [
        {
          id: 1296269,
          name: 'Hello-World',
          owner: {
            login: 'octocat',
            id: 1,
          },
          description: 'This your first repo!',
          open_issues: 1,
        },
      ],
    };

    const facade = new RepositoriesFacade(mockHttpService);
    let result: Repository[];

    describe('happy path', () => {
      beforeEach(async () => {
        mockHttpService.get.mockReturnValueOnce(Promise.resolve(apiResponse));

        result = await facade.listRepositories(accessToken);
      });

      it('makes an http request to list the user repositories', () => {
        expect(mockHttpService.get).toHaveBeenCalledWith({
          path: 'https://api.github.com/user/repos?per_page=100&page=1',
          config: {
            headers: {
              Authorization: `token ${accessToken.value}`,
              Accept: 'application/vnd.github.v3+json',
            },
          },
        });
      });

      it('returns the retrieved repositories as domain objects', () => {
        expect(result.length).toEqual(1);
        expect(result[0]).toBeInstanceOf(Repository);
      });
    });

    describe('given there was an error while fetching the repositories', () => {
      it('rejects the promise', () => {
        const error = new Error('Connection error');

        mockHttpService.get.mockReturnValueOnce(Promise.reject(error));

        return expect(facade.listRepositories(accessToken)).rejects.toEqual(
          error,
        );
      });
    });
  });
});
