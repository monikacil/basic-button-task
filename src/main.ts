import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import Icon from './components/icons/IconHeart.vue';

createApp(App).component('Icon', Icon).mount('#app')
