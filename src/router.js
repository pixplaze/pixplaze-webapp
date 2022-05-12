import { createRouter, createWebHistory } from "vue-router"
import MainPage from '@/components/pages/MainPage'
import ProfilePage from '@/components/pages/ProfilePage'
import ServersPage from '@/components/pages/ServersPage'
import ServerPage from '@/components/pages/ServerPage'

const routes = [
  {
    path: '/',
    component: MainPage,
    meta: {
      layout: 'holygrail-layout'
    }
  },
  {
    path: '/profile/:id',
    component: ProfilePage,
    meta: {
      layout: 'holygrail-layout'
    }
  },
  {
    path: '/servers',
    component: ServersPage,
    meta: {
      layout: 'holygrail-layout'
    }
  },
  {
    path: '/servers/:id',
    component: ServerPage,
    meta: {
      layout: 'holygrail-layout'
    }
  },
]

export default createRouter({
  mode: 'history',
  routes,
  history: createWebHistory(process.env.BASE_URL)
})
