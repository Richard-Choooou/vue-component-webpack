import Vue from 'vue'
import Dialog from './src/main.vue'

const Component = Vue.extend(Dialog)
Dialog.install = function(Vue) {
    Vue.component(Dialog.name, Dialog)
    Vue.prototype.$SgDialog = function() {
        const instance = new Component()
        instance.$mount()
        return instance
    }
}

export default Dialog
