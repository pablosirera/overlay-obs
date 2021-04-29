import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { emitter } from '@/utils/emitter'
import './assets/main.scss'

const app = createApp(App)

app.config.globalProperties.emitter = emitter

app.use(router).mount('#app')
