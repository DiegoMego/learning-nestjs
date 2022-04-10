import loadable from '@loadable/component';
import company from './company';
import ticket from './ticket';
import user from './user';

const routes = [
  {
    path: '/',
    element: loadable(() => import('../views/home/index')),
    auth_acl: {
      action: 'read',
      subject: 'home',
    },
  },
  ...company,
  ...ticket,
  ...user,
];

export default routes;
