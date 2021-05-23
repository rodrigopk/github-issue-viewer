import React from 'react';
import { useParams } from '../../../../libs/router';

import { Center, Text } from '../../../../libs/ui';

export const IssueDetail: React.FC<{}> = () => {
  const { issueId } = useParams<{ issueId: string }>();

  return (
    <Center height="100vh">
      <Text>{`TODO: Show detail for issue #${issueId}`}</Text>
    </Center>
  );
};
