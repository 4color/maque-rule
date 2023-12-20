import {createApp} from 'vue'
import './style.css'
// @ts-ignore
import App from './App.vue'

import {createPinia} from "pinia";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import RuleDesigner from "maque-rule-designer"


const app = createApp(App)


app.use(ElementPlus)

// @ts-ignore
app.use(RuleDesigner)

console.log("evn",process.env.NODE_ENV)


const pinia = createPinia()
app.use(pinia)

// @ts-ignore
window.pinia = pinia

app.mount('#app')
