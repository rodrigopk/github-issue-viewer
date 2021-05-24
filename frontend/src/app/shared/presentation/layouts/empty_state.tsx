import React from 'react';

import { Center, Flex, Text } from '../../../../libs/ui';

export const EmptyState: React.FC<{ message: string }> = ({ message }) => (
  <Center mt={32}>
    <Flex
      justify="center"
      align="center"
      direction="column"
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      borderColor="gray.500"
      p={8}>
      <Text my={2} variant="h5">
        {message}
      </Text>
    </Flex>
  </Center>
);
