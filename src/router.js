import Vue from 'vue';
import {AmplifyEventBus} from 'aws-amplify-vue';
import {getUser} from './utils/auth.js';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {requiresAuth: true},
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: () =>
        import(/* webpackChunkName: "signup" */ './views/SignUp.vue'),
      meta: {requiresAuth: false},
    },
    {
      path: '/signUpConfirm',
      name: 'signUpConfirm',
      component: () =>
        import(/* webpackChunkName: "confirm" */ './views/SignUpConfirm.vue'),
      meta: {requiresAuth: false},
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: () =>
        import(/* webpackChunkName: "signin" */ './views/SignIn.vue'),
      meta: {requiresAuth: false},
    },
    {
      path: '/todo',
      name: 'todo',
      component: () =>
        import(/* webpackChunkName: "todo" */ './views/Todo.vue'),
      meta: {requiresAuth: true},
    },
  ],
});

//
// getUser().then((user) => {
//   if (user) {
//     router.push({path: '/'});
//   }
// });

AmplifyEventBus.$on('authState', async (state) => {
  const pushPathes = {
    signedOut: () => {
      router.push({path: '/signIn'});
    },
    signUp: () => {
      router.push({path: '/signUp'});
    },
    confirmSignUp: () => {
      router.push({path: '/signUpConfirm'});
    },
    signIn: () => {
      router.push({path: '/signIn'});
    },
    signedIn: () => {
      router.push({path: '/'});
    },
  };
  if (typeof pushPathes[state] === 'function') {
    pushPathes[state]();
  }
});

router.beforeResolve(async (to, from, next) => {
  const user = await getUser();
  console.log('before:', user);
  if (!user) {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      console.log('next: /signIn');
      return next({
        path: '/signIn',
      });
    }
  } else {
    if (
      to.matched.some(
        (record) =>
          typeof record.meta.requiresAuth === 'boolean' &&
          !record.meta.requiresAuth,
      )
    ) {
      console.log('next: /');
      return next({
        path: '/',
      });
    }
  }
  console.log('next: just');
  return next();
});

export default router;
