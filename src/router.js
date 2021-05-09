import Home from './views/Home.vue';
import About from '@/views/About';
// import { AmplifyEventBus } from 'aws-amplify-vue'
// import {getUser} from '@/utils/auth.js'
import {createWebHistory, createRouter} from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      // meta: {requiresAuth: false},
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      // meta: {requiresAuth: false},
    },
  ],
});

export default router;
