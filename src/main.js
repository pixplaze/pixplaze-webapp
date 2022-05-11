import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import './assets/css/colors.css'
import './assets/css/reset.css'
import './assets/css/fonts.css'
import './assets/css/global.css'

import ui from '@/components/ui'

const app = createApp(App)
const pinia = createPinia()

ui.forEach(element => {
  app.component(element.name, element)  
});
//
app
  .use(pinia)
  .mount('#app')
