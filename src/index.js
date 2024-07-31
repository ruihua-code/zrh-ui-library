import { ZrhButton } from './components/button/index'
import { ZrhLabel } from './components/label/index'

const components = [ZrhButton, ZrhLabel]

/**
 *
 * 组件全局注册
 *
 */
function install(app) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export { ZrhButton, ZrhLabel, install }
