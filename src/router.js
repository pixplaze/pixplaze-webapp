import { createRouter, createWebHistory } from "vue-router"
import MainPage from '@/components/pages/MainPage'
import ProfilePage from '@/components/pages/ProfilePage'
import ServersPage from '@/components/pages/ServersPage'
import ServerPage from '@/components/pages/ServerPage'
import LoginPage from '@/components/pages/LoginPage'

const routes = [
  {
    path: '/',
    name: 'index',
    component: MainPage,
    meta: {
      layout: 'holygrail-layout'
    }
  },
  { // no need to define `meta`, since the default layout is already `holygrail-layout`
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/profile/:id',
    name: 'profile',
    component: ProfilePage,
    meta: {
      layout: 'holygrail-layout'
    }
  },
  {
    path: '/servers',
    name: 'servers',
    component: ServersPage,
    meta: {
      layout: 'holygrail-layout'
    }
  },
  {
    path: '/servers/:id',
    name: 'server',
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
