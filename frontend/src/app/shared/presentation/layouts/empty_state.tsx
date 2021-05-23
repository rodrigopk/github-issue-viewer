import React from 'react';

import { Center, Flex, Text } from '../../../../libs/ui';

export const EmptyState: React.FC<{ message: string }> = ({ message }) => (
  <Center height="100vh">
    <Flex
      justify="center"
      align="center"
      direction="column"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      p={8}>
      <Text my={2} variant="h5">
        {message}
      </Text>
    </Flex>
  </Center>
);
