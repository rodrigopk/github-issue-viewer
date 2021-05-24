import React from 'react';

import { Flex, Center, Text, Box, Button, Icons } from '../../../../libs/ui';
import { useGetGithubAuthorizationUrl } from '../../application/use_get_gituhb_authorization_url';

export const Signin: React.FC<{}> = () => {
  const { authorizationUrl } = useGetGithubAuthorizationUrl();

  const redirectToAuthorization = () => {
    window.location.href = authorizationUrl;
  };

  return (
    <Flex direction="column" height="100vh" justify="center" align="center">
      <Text
        mb={16}
        fontWeight={700}
        fontSize={{ sm: '2rem', md: '4rem' }}
        lineHeight={{ sm: '2.125rem', md: '4.125rem' }}>
        GitHub Issue Viewer
      </Text>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={8}>
        <Text my={2} variant="h5">
          Signin with Github
        </Text>
        <Center mt={8}>
          <Button leftIcon={<Icons.Github />} onClick={redirectToAuthorization}>
            Signin
          </Button>
        </Center>
      </Box>
    </Flex>
  );
};
