import MainPage from '@/components/pages/MainPage'
import ProfilePage from '@/components/pages/ProfilePage'
import ServerPage from '@/components/pages/ServerPage'
import ServerPages from '@/components/pages/ServersPage'

const pages = [
  MainPage,
  ProfilePage,
  ServerPage,
  ServerPages
]

function registerPages(app) {
  pages.forEach(page => app.component(page.name, page))
}

export {registerPages}
export default pages