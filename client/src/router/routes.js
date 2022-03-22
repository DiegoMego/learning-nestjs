import loadable from "@loadable/component";

const routes = [
  {
    path: '/',
    element: loadable(() => import("../views/home/index"))
  },
  {
    path: '/ticket/create',
    element: loadable(() => import("../views/ticket/create"))
  }
];

export default routes;