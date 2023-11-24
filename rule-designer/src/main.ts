import {createApp} from 'vue'
import './style.css'

// @ts-ignore
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// SVG配置
import "virtual:svg-icons-register";
// 引入自定义插件对象：注册整个项目全局组件
import Svg from '../packages/svg/index.ts'

import RuleDesigner from '../packages/index.ts'

const app = createApp(App)


// 安装自定义插件
app.use(Svg)
app.use(ElementPlus)
app.use(RuleDesigner)


app.mount('#app')

