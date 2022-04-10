import loadable from '@loadable/component';

export default [
  {
    path: '/company/index',
    element: loadable(() => import('../views/company/index')),
    auth_acl: {
      action: 'read',
      subject: 'company',
    },
  },
  {
    path: '/company/create',
    element: loadable(() => import('../views/company/create')),
    auth_acl: {
      action: 'create',
      subject: 'company',
    },
  },
];
