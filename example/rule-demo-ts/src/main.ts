import {createApp} from 'vue'
import './style.css'
// @ts-ignore
import App from './App.vue'


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


import RuleDesigner from "maque-rule-designer"
import {createPinia} from "pinia";

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)
app.use(RuleDesigner)

app.mount('#app')
