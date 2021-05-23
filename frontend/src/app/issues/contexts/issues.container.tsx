import React, { useState } from 'react';

import { Issue, IssueDTO } from '../domain';
import { IssuesContext } from './issues.context';

const ISSUES_KEY = 'issues';

const useIssuesState = (): [Issue[], (arg: Issue[]) => void] => {
  const retrieved = localStorage.getItem(ISSUES_KEY);
  const stored = retrieved ? JSON.parse(retrieved) : [];

  const [issues, setIssues] = useState<Issue[]>(
    stored !== 'null' && stored !== null
      ? stored.map((json: IssueDTO) => Issue.create(json))
      : [],
  );

  return [issues, setIssues];
};

export const IssuesContainer: React.FC<{}> = ({ children }) => {
  const [issues, setIssues] = useIssuesState();

  const handleUpdateIssues = (issues: Issue[]) => {
    try {
      localStorage.setItem(
        ISSUES_KEY,
        JSON.stringify(issues.map((issue) => issue.toJSON())),
      );

      setIssues(issues);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <IssuesContext.Provider
      value={{
        issues: issues,
        setIssues: handleUpdateIssues,
      }}>
      {children}
    </IssuesContext.Provider>
  );
};
