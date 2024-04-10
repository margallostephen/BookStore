import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import store from './store'
import Notifications from '@kyvg/vue3-notification'

createApp(App).use(store).use(router).use(Notifications).mount('#app')