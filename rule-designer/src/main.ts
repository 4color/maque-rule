import {createApp} from 'vue'
import './style.css'

// @ts-ignore
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


import RuleDesigner from "../packages/index"
import {createPinia} from "pinia";

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)
window.pinia = pinia

app.use(ElementPlus)
app.use(RuleDesigner)



app.mount('#app')

