import Vue from "vue";
import firebase from "firebase";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import Detail from "../views/Detail.vue";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/post",
    name: "post",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "post" */ "../views/Post.vue")
  },
  {
    path: "/pet-detail/:petid",
    name: "detail",
    props: true,
    // eslint-disable-next-line no-undef
    component: () =>
      import(/* webpackChunkName: "post" */ "../views/Detail.vue")
    // component: Detail
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("/login");
  else if (requiresAuth && currentUser) next();
  else next();
});
export default router;
