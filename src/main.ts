import { createPinia } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import App from './App.vue';
import auth0Client from './plugins/auth0';
import { primeVueConfig } from '@/config/primevue.config';
import router from '@/router';

import './style.css';

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

app.use(router);
app.use(auth0Client);
app.use(PrimeVue, primeVueConfig);
app.use(pinia);
app.mount('#app');
