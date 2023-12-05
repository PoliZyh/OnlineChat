
import { createApp } from 'vue'
import App from './App.vue'


import '@/styles/index.scss'
import 'virtual:svg-icons-register'

import router from './router'
import pinia from './store'

import gloablComponent from './components/index';


const app = createApp(App)


app.use(router).use(pinia)
app.use(gloablComponent)

app.mount('#app')
