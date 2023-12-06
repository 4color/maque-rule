import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import RuleDesigner from "maque-rule-designer/lib/index.js"

const app = createApp(App)

app.use(ElementPlus)
app.use(RuleDesigner)

app.mount('#app')
