import React, { useState } from 'react';

import { Repository, RepositoryDTO } from '../domain';
import { RepositoriesContext } from './repositories.context';

const REPOSITORIES_KEY = 'repositories';

const useRepositoriesState = (): [
  Repository[],
  (arg: Repository[]) => void,
] => {
  const retrieved = localStorage.getItem(REPOSITORIES_KEY);
  const stored = retrieved ? JSON.parse(retrieved) : [];

  const [repositories, setRepositories] = useState<Repository[]>(
    stored !== 'null' && stored !== null
      ? stored.map((json: RepositoryDTO) => Repository.create(json))
      : [],
  );

  return [repositories, setRepositories];
};

export const RepositoriesContainer: React.FC<{}> = ({ children }) => {
  const [repositories, setRepositories] = useRepositoriesState();

  const handleUpdateRepositories = (repositories: Repository[]) => {
    try {
      localStorage.setItem(
        REPOSITORIES_KEY,
        JSON.stringify(repositories.map((repo) => repo.toJSON())),
      );

      setRepositories(repositories);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <RepositoriesContext.Provider
      value={{
        repositories: repositories,
        setRepositories: handleUpdateRepositories,
      }}>
      {children}
    </RepositoriesContext.Provider>
  );
};
