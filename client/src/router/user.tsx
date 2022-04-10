import loadable from '@loadable/component';

export default [
  {
    path: '/user/create',
    element: loadable(() => import('../views/user/create')),
    auth_acl: {
      action: 'read',
      subject: 'user',
    },
  },
];
