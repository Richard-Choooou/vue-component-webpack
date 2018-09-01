import Vue from 'vue'
import message from './src/main.vue'
const Component = Vue.extend(message)
message.install = function(Vue) {
    Vue.prototype.$sgMessage = Component
}

export default message
