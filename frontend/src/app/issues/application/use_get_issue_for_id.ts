import { useContext } from 'react';

import { IssuesContext } from '../contexts';

export const useGetIssueForId = (id: string) => {
  const { issues } = useContext(IssuesContext);

  const issue = issues.find((i) => i.id === parseInt(id));

  return { issue };
};
