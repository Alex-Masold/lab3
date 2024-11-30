// Styles
import { createApp } from 'vue';

import App from './App.vue';
import { router, store } from './providers';

const initializeApp = createApp(App).use(router).use(store).mount('#app');

export const app = initializeApp;
