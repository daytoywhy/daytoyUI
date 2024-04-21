import Row from '@/components/element/Row'
import Col from '@/components/element/Col'

const components = [Row, Col]

const install = (app) => {
  // 遍历注册全局组件
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default {
  install,
  ...components
}

export { install, Row, Col }
