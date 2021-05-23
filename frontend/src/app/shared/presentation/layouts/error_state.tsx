import { Flex, Text } from '../../../../libs/ui';

export const ErrorState: React.FC<{ error: Error }> = ({ error }) => (
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
