import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader';

Amplify.configure(awsconfig);
applyPolyfills().then(() => {
  defineCustomElements(window);
});

const app = createApp(App);
app.use(router);
app.mount('#app');
