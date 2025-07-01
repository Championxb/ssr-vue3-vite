import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
} from "vue-router";

const isServer = typeof window === "undefined";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/Home.vue"),
    children: [
      {
        path: "",
        name: "HomeChild",
        component: () => import("../components/HomeChild.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../components/About.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../components/HomeChild.vue"),
  },
];

const createSSRRouter =()=> createRouter({
  history: isServer ? createMemoryHistory() : createWebHistory(),
  routes,
});

export default createSSRRouter;
