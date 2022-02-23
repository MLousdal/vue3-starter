import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import OpenProps from "@/views/OpenProps.vue";
import NotFound from "@/views/NotFound.vue";

export default [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/openprops", name: "OpenProps", component: OpenProps },
  { path: "/:path(.*)", component: NotFound },
];
