import loadable from '@loadable/component';

export default [
  {
    path: '/ticket/create',
    element: loadable(() => import('../views/ticket/create')),
    auth_acl: {
      action: 'read',
      subject: 'ticket',
    },
  },
];
