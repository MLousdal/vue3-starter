import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import { createHead } from '@vueuse/head'
import '@/assets/scss/main.scss'

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(router)
app.use(store)

app.mount('#app')
