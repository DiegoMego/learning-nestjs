import loadable from "@loadable/component";

const routes = [
  {
    path: '/',
    element: loadable(() => import("../views/home/index"))
  }
];

export default routes;