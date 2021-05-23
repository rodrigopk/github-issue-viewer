import { Code, AccessToken } from '../domain';
import { AuthenticationFacade } from './authentication.facade';
import { InvalidCodeError } from './invalid_code.error';

describe('AuthenticationFacade', () => {
  const mockHttpService = {
    get: jest.fn(),
    post: jest.fn(),
  };

  it('is defined', () => {
    expect(AuthenticationFacade).toBeDefined();
  });

  describe('signin', () => {
    const accessToken = 'accessToken';
    const apiResponse = {
      status: 200,
      statusText: '',
      headers: {},
      config: {},
      data: {
        access_token: accessToken,
      },
    };

    const facade = new AuthenticationFacade(mockHttpService);
    const code = Code.create({ value: 'code' });
    let result: AccessToken;

    describe('happy path', () => {
      beforeEach(async () => {
        mockHttpService.post.mockReturnValueOnce(Promise.resolve(apiResponse));

        result = await facade.signin(code);
      });

      it('makes a http request to retrieve access token', () => {
        expect(mockHttpService.post).toHaveBeenCalledWith({
          path: 'http://localhost:3000/api/github/signin',
          payload: {
            code: code.value,
          },
        });
      });

      it('returns the retrieved access token as a domain object', () => {
        expect(result).toBeInstanceOf(AccessToken);
        expect(result.value).toEqual(accessToken);
      });
    });

    describe('given there was an error while requesting the token', () => {
      it('rejects the promise', () => {
        const error = new Error('Connection error');

        mockHttpService.post.mockReturnValueOnce(Promise.reject(error));

        return expect(facade.signin(code)).rejects.toEqual(error);
      });
    });

    describe('given an invalid code is given', () => {
      it('rejects the promise', () => {
        return expect(facade.signin(Code.create({}))).rejects.toBeInstanceOf(
          InvalidCodeError,
        );
      });
    });
  });
});
