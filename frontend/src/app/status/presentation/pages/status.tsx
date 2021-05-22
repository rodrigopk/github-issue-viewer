import React from 'react';

import { Center, Spinner, Text } from '../../../../libs/ui';
import { useGetApiStatus } from '../../application/use_get_api_status';

export const Status: React.FC<{}> = () => {
  const { status, isFetching } = useGetApiStatus();

  if (isFetching)
    return (
      <Center>
        <Spinner size="xl" />
      </Center>
    );

  return (
    <Center>
      <Text>{`Api status: ${status}`}</Text>
    </Center>
  );
};
