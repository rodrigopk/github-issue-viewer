import React, { useContext } from 'react';

import { Link, useHistory, appRoutes } from '../../../../libs/router';
import { Center, Flex, Spinner, Text } from '../../../../libs/ui';
import { ErrorState } from '../../../shared/presentation/layouts';
import { useGetGithubCodeFromUrl } from '../../application/use_get_github_code_from_url';
import { useSigninWithCode } from '../../application/use_signin_with_code';
import { AuthenticationContainer, AuthenticationContext } from '../../contexts';

const RedirectionMessage: React.FC<{}> = () => {
  const history = useHistory();

  history.push(appRoutes.repositories.root);

  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      p={8}>
      <Text my={2} variant="h5">
        Redirecting you to your repositories list...
      </Text>
      <Flex my={2}>
        <Text mr={1} color="gray" variant="caption">
          If you're not automatically redirected
        </Text>
        <Link to={appRoutes.repositories.root}>click here.</Link>
      </Flex>
    </Flex>
  );
};

const Content: React.FC<{}> = () => {
  const { code } = useGetGithubCodeFromUrl();
  const { accessToken, error, isError, isLoading } = useSigninWithCode(code);
  const { setAccessToken } = useContext(AuthenticationContext);

  if (accessToken && setAccessToken) {
    setAccessToken(accessToken);
  }

  if (isLoading) return <Spinner size="xl" />;

  if (isError) return <ErrorState error={error as Error} />;

  return <RedirectionMessage />;
};

export const Redirect: React.FC<{}> = () => (
  <AuthenticationContainer>
    <Center height="100vh">
      <Content />
    </Center>
  </AuthenticationContainer>
);
