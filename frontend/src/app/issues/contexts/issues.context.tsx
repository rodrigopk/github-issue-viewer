import React from 'react';

import { Issue } from '../domain';

export const IssuesContext = React.createContext<{
  issues: Issue[];
  setIssues?: (projects: Issue[]) => void;
}>({
  issues: [],
});
