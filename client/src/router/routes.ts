import loadable from '@loadable/component';

const routes = [
  {
    path: '/',
    element: loadable(() => import('../views/home/index')),
    auth_acl: {
      action: 'read',
      subject: 'home',
    },
  },
  {
    path: '/ticket/create',
    element: loadable(() => import('../views/ticket/create')),
    auth_acl: {
      action: 'read',
      subject: 'ticket',
    },
  },
  {
    path: '/user/create',
    element: loadable(() => import('../views/user/create')),
    auth_acl: {
      action: 'read',
      subject: 'user',
    },
  },
  {
    path: '/company/create',
    element: loadable(() => import('../views/company/create')),
    auth_acl: {
      action: 'read',
      subject: 'company',
    },
  },
];

export default routes;
