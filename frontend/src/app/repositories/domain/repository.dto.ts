export type RepositoryDTO = {
  id: number;
  name: string;
  owner: {
    login: string;
  };
  description: string;
  open_issues: number;
};
