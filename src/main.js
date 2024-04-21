import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/theme-chalk/display.scss'
import '@/assets/theme-chalk/index.scss'
import Element from '@/components/element'

const app = createApp(App)

app.use(Element)
app.mount('#app')
