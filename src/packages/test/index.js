import Vue from 'vue'
import Test from './src/main.vue'

const Component = Vue.extend(Test)
Test.install = function(Vue) {
    Vue.component(Test.name, Test)
    Vue.prototype.$SgTest = function() {
        const instance = new Component()
        instance.$mount()
        return instance
    }
}

export default Test
