const path = require('path')
const fileSave = require('file-save')
const config = require('../config')
const render = require('json-templater/string');
const getUnifiedName = require('../utils').getUnifiedName
const components = require(path.join(config.examplesPath, 'src', 'router', 'nav.config.json'))


const componentNames = Object.keys(components).map(name => getUnifiedName(name))

let template = `
//文件从 build/bin/build-route.js生成
import Vue from 'vue'
import Router from 'vue-router'
const navConfig = require('./nav.config.json')
{{include}}

Vue.use(Router)

const modules = [${componentNames}]
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
`
template = render(template, {
    include: getImportString()
})

fileSave(path.join(config.examplesPath, 'src', 'router', 'router.config.js'))
    .write(template, 'utf8')
    .end('\n')

function getImportString() {
    const importSection = "import {{name}} from '{{path}}' \n"
    let importString = ''

    for(let name in components) {
        importString += render(importSection, {
            name: getUnifiedName(name),
            path: path.posix.relative('./src/router', components[name].path)
        })
    }

    return importString
}