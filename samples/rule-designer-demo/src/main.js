import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const app = new Vue({
    render: h => h(App),
});


import RuleDesigner from "maque-rule-designer/"
app.use(RuleDesigner)

app.$mount('#app')
