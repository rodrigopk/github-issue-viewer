export {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
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
  },
};
