import './assets/main.css'
import { createApp } from 'vue';
import App from './App.vue';
import pb from './composables/usePocketbase.js';
import { createRouter, createWebHistory  } from 'vue-router';
import routes from './routes.js';

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: routes, 
});

router.beforeEach((to, from, next) => {
  if (to.meta.reqAuth && !pb.authStore.isValid) {
      router.push("/");
      return false
  } else {
    next()
  }
  return true
})

app.use(router);

app.mount('#app');