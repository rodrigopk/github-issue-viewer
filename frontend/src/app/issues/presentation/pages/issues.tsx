import React from 'react';

import { useParams } from '../../../../libs/router';
import { Center, Text } from '../../../../libs/ui';

export const Issues: React.FC<{}> = () => {
  const { repoId } = useParams<{ repoId: string }>();

  return (
    <Center height="100vh">
      <Text>${`TODO: Show issues for repository of id: ${repoId}`}</Text>
    </Center>
  );
};
