import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Hero from './components/Hero.vue'
import TheHeader from './components/TheHeader.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('TheHeader', TheHeader)
app.component('Hero', Hero)

app.mount('#app')
