import { createApp } from 'vue'
import App from './App.vue'

import './assets/css/colors.css'
import './assets/css/reset.css'
import './assets/css/fonts.css'

import ui from '@/components/ui'

const app = createApp(App)

ui.forEach(element => {
  app.component(element.name, element)  
});
//

app.mount('#app')
