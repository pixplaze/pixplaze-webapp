import McButton from '@/components/ui/McButton'
import MenuButton from '@/components/ui/MenuButton'
import ArrowButton from '@/components/ui/ArrowButton'
import TexturedButton from '@/components/ui/TexturedButton'
import LinearLoader from '@/components/ui/LinearLoader'
import CubicLoader from '@/components/ui/CubicLoader'

 const uis = [
  McButton,
  MenuButton,
  ArrowButton,
  TexturedButton,
  LinearLoader,
  CubicLoader
]

function registerUIs(app) {
  uis.forEach(ui => app.component(ui.name, ui))
}

export {registerUIs}
export default uis