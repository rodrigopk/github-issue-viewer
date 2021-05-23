export type IssueDTO = {
  id: number;
  number: number;
  title: string;
  body: string;
  user: {
    login: string;
  };
  created_at: string;
};
