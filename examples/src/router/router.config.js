
//文件从 build/bin/build-route.js生成
import Vue from 'vue'
import Router from 'vue-router'
const navConfig = require('./nav.config.json')
import SgMain from '/Users/edz/Desktop/project/mobile_components_lib/examples/src/components/main.vue' 
import SgAlert from '/Users/edz/Desktop/project/mobile_components_lib/examples/src/doc/alert.md' 
import SgDialog from '/Users/edz/Desktop/project/mobile_components_lib/examples/src/doc/dialog.md' 
import SgTable from '/Users/edz/Desktop/project/mobile_components_lib/examples/src/doc/table.md' 


Vue.use(Router)

const modules = [SgMain,SgAlert,SgDialog,SgTable]
const routes = []

Object.keys(navConfig).map((value, index) => {
    let obj = {}
    obj.path = '/' + value,
    obj.component = modules[index]
    routes.push(obj)
})

export default new Router({
    mode: 'hash',
    routes
})

