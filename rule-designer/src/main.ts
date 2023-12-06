import {createApp} from 'vue'
import './style.css'

// @ts-ignore
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// SVG配置
import "virtual:svg-icons-register";

import RuleDesigner from '../lib/rule-designer.js'

const app = createApp(App)

app.use(ElementPlus)
app.use(RuleDesigner)

app.mount('#app')

