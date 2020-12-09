import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Help from "../views/Help.vue";
import About from "../views/About.vue";
import Blog from "../views/Blog.vue";

Vue.use(Router);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component:About
  },
  {
    path: "/blog",
    name: "blog",
    component:Blog
  },
  {
      path:"/help",
      name:"help",
      component:Help
  }
]

export default new Router({
  mode:"history",
  base: process.env.BASE_URL,
  routes
});

