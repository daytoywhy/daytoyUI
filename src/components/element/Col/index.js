import Col from './src/Col.js'

Col.install = (app) => {
  app.component(Col.name, Col)
}

export default Col
