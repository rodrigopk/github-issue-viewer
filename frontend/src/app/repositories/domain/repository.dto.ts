export type RepositoryDTO = {
  id: number;
  name: string;
  owner: {
    login: string;
    id: number;
  };
  description: string;
  open_issues: number;
};
