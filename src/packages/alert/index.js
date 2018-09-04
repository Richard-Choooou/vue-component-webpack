import Vue from 'vue'
import Alert from './src/main.vue'

const Component = Vue.extend(Alert)
Alert.install = function(Vue) {
    Vue.component(Alert.name, Alert)
    Vue.prototype.$SgAlert = function() {
        const instance = new Component()
        instance.$mount()
        return instance
    }
}

export default Alert
