import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AuthComponents from "./index"
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

createApp(App).use(AuthComponents).mount('#app')
