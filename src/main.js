import './assets/main.css'
import i18n from './i18n'
import { createApp } from 'vue'
import VueGtag from 'vue-gtag'
import App from './App.vue'

const app = createApp(App)

// إضافة Google Analytics
app.use(i18n)
app.use(VueGtag, {
  config: { id: 'G-MS7DKT38XH' } // ضع هنا Google Tag ID الخاص بك
})

app.mount('#app')
