export {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  useParams,
} from 'react-router-dom';

export const appRoutes = {
  status: {
    root: '/status',
  },
  auth: {
    root: '/',
    redirect: '/auth/redirect',
  },
  repositories: {
    root: '/repositories',
    issues: {
      root: '/repositories/:repoId/issues',
    },
  },
};

export const routeBuilders = {
  issues: {
    root: (id: string) =>
      appRoutes.repositories.issues.root.replace(/:repoId/i, id),
  },
};
