import { createApp } from 'vue'
import router from './router/index'
import store from './store'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import App from './App.vue'
import 'windi.css'

const app = createApp(App)
// app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
