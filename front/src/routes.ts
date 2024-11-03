import { lazy } from "solid-js";

const routes = [
  {
    path: "/",
    component: lazy(() => import("./pages/Home")),
    name: "首页",
    title: "首页",
  },
  {
    path: "/blog",
    component: lazy(() => import("./pages/Blog")),
    name: "博客",
    title: "博客",
  },
  {
    path: "/test",
    component: lazy(() => import("./pages/Test")),
    name: "测试",
    title: "测试",
  },
];

export default routes;
