import { useContext } from 'react';

import { RepositoriesContext } from '../contexts';

export const useGetRepositoryForId = (id: string) => {
  const { repositories } = useContext(RepositoriesContext);

  const repository = repositories.find((repo) => repo.id === parseInt(id));

  return { repository };
};
