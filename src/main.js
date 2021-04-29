import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mitt from 'mitt'
import './assets/main.scss'

const emitter = mitt()
const app = createApp(App)

app.provide('emitter', emitter)

app.use(router).mount('#app')
