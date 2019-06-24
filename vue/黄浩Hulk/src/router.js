import Vue from "vue";
import VueRouter from 'vue-router';


Vue.use(VueRouter);

import Home from './views/Home.vue';


const routes = [
  {
    path: "/",
    redirect: { name: 'guide' }
  },
  {
    path: "/guide",
    name: "guide",
    component: () => import("@/views/guide.vue")
  },
  {
    path: "index",
    name: "index",
    component: () => import("@/views/index.vue"),
    children: [
      {
        path: "",
        redirect: { name: 'home' }
      },
      {
        path: "home",
        name: "home",
        component: Home
      },
      {
        path: "classify",
        name: "classify",
        component: () => import("@/views/classify.vue")
      },
      {
        path: "cart",
        name: "cart",
        component: () => import("@/views/cart.vue")
      },
      {
        path: "my",
        name: "my",
        component: () => import("@/views/my.vue")
      },
    ]

  },
  {
    path: "/search",
    name: "search",
    component: () => import("@/views/search.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/register.vue")
  },
  {
    path: "/good/detail/:goodId",
    name: "good",
    component: () => import("@/views/good.vue")
  },
  {
    path: "*",
    redirect: { name: 'home' }
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash',
  base: '/'
})


export default router;
