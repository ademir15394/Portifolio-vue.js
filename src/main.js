import './assets/main.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
