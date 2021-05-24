export type IssueDTO = {
  id: number;
  number: number;
  title: string;
  body: string;
  user: {
    login: string;
  };
  pull_request?: {
    url: string;
  };
  created_at: string;
};
