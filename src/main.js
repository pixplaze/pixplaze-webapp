import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'

import App from './App.vue'

import './assets/css/colors.css'
import './assets/css/reset.css'
import './assets/css/fonts.css'
import './assets/css/global.css'

import HolygrailLayout from '@/components/layouts/HolygrailLayout'
import { registerPages } from '@/components/pages'
import { registerUIs } from './components/ui'

const app = createApp(App)
const pinia = createPinia()

app.component('holygrail-layout', HolygrailLayout)

registerPages(app)
registerUIs(app)

app.use(pinia)
app.use(router)
app.mount('#app')
