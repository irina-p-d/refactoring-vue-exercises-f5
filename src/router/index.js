import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/exercise17",
    name: "Exercise 17",
    component: () =>
      import(
        /* webpackChunkName: "exercises" */
        "../components/exercises/ExerciseSeventeen.vue"
      ),
  },
  {
    path: "/exercise18",
    name: "Exercise 18",
    component: () =>
      import(
        /* webpackChunkName: "exercises" */
        "../components/exercises/ExerciseEighteen.vue"
      ),
  },
  {
    path: "/exercise19",
    name: "Exercise 19",
    component: () =>
      import(
        /* webpackChunkName: "exercises" */
        "../components/exercises/ExerciseNineteen.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
