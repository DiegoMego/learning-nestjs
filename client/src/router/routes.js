import loadable from "@loadable/component";

const routes = [
  {
    path: '/',
    element: loadable(() => import("../views/home/index"))
  },
  {
    path: '/ticket/create',
    element: loadable(() => import("../views/ticket/create"))
  },
  {
    path: '/user/create',
    element: loadable(() => import("../views/user/create"))
  },
  {
    path: '/company/create',
    element: loadable(() => import("../views/company/create"))
  }
];

export default routes;