import { createApp } from 'vue'
import './style.css'
import "./tailwind.css"
import App from './App.vue'
import AuthComponents from "./index"

createApp(App).use(AuthComponents).mount('#app')
