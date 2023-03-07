import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from 'pinia'
// pinia挂载
const pinia = createPinia()
const app = createApp(App)
// router挂载
import router from './router/router'
app.use(router)
app.use(pinia)
app.mount('#app')
