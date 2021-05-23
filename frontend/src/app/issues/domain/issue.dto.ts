export type IssueDTO = {
  id: number;
  number: number;
  title: string;
  body: string;
  user: {
    id: number;
    login: string;
  };
  created_at: string;
};
