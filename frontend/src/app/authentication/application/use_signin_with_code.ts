import { useQuery } from '../../../libs/query';
import { Code } from '../domain';
import { AuthenticationFacade } from '../infrastructure/authentication.facade';

export const useSigninWithCode = (
  code: Code,
  facade = new AuthenticationFacade(),
) => {
  const { data, error, isLoading, isError } = useQuery(
    `signin:${code.value}`,
    () => facade.signin(code),
    {
      retry: false,
      staleTime: Infinity,
    },
  );

  return {
    acessToken: data,
    isLoading,
    isError,
    error,
  };
};
