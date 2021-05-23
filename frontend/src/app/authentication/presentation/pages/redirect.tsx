import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Flex, Spinner, Text } from '../../../../libs/ui';
import { appRoutes } from '../../../shared/navigation';
import { useGetGithubCodeFromUrl } from '../../application/use_get_github_code_from_url';
import { useSigninWithCode } from '../../application/use_signin_with_code';

const ErrorState: React.FC<{ error: Error }> = ({ error }) => (
  <Flex
    justify="center"
    align="center"
    direction="column"
    maxW="sm"
    borderWidth="1px"
    borderRadius="lg"
    p={8}>
    <Text my={2} variant="h5">
      Something went wrong
    </Text>
    <Text my={2} color="gray" variant="caption">
      {error.message}
    </Text>
  </Flex>
);

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
  const { error, isError, isLoading } = useSigninWithCode(code);

  if (isLoading) return <Spinner size="xl" />;

  if (isError) return <ErrorState error={error as Error} />;

  return <RedirectionMessage />;
};

export const Redirect: React.FC<{}> = () => (
  <Flex direction="column" height="100vh" justify="center" align="center">
    <Content />
  </Flex>
);
