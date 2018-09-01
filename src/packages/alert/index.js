import Vue from 'vue'
import alert from './src/main.vue'
const Component = Vue.extend(alert)
alert.install = function(Vue) {
    Vue.prototype.$sgAlert = Component
}

export default alert
