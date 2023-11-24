// 引入项目中全部得全局组件
// @ts-ignore
import SvgIcon from "./svg-icon.vue"
import type { App, Component } from 'vue';
const components: { [name: string]: Component } = { SvgIcon};
// 对外暴漏插件对象
export default {
    // 务必叫做install方法
    install(app: App) {
        // 注册项目全部的全局组件
        Object.keys(components).forEach((key: string) => {
            // 注册为全局组件
            app.component(key, components[key]);
        })
    }
}