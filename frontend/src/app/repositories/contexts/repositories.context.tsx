import React from 'react';

import { Repository } from '../domain';

export const RepositoriesContext = React.createContext<{
  repositories: Repository[];
  setRepositories?: (projects: Repository[]) => void;
}>({
  repositories: [],
});
