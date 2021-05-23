import queryString from 'query-string';

import { useLocation } from '../../../libs/router';
import { Code } from '../domain/code';

export const useGetGithubCodeFromUrl = (): { code: Code } => {
  const location = useLocation();
  const query = queryString.parse(location.search);

  return { code: Code.create({ value: query.code as string }) };
};
