import '@/assets/scss/main.scss'
import ssr from "vite-ssr-vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from '@/routes'
import {createStore} from "vuex";
import {createHead} from "@vueuse/head";

export default ssr(App, {
    created({app}) {
      const head = createHead();
      const router = createRouter({
        history: createWebHistory(),
        routes,
      });
      const store = createStore();
      app.use(router);
      app.use(store);
      app.use(head, {
        separator: '-',
        complement: 'Vite App'
      });

      return {head, router, store}
    },
});