import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Router from './router'
import Store from './store'

const app = createApp(App)

app.use(ElementPlus)
app.use(Router)
app.use(Store)
app.mount('#app')
