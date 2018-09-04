import Vue from 'vue'
import Table from './src/main.vue'

const Component = Vue.extend(Table)
Table.install = function(Vue) {
    Vue.component(Table.name, Table)
    Vue.prototype.$SgTable = function() {
        const instance = new Component()
        instance.$mount()
        return instance
    }
}

export default Table
