const path = require('path')
const fileSave = require('file-save')
const getUnifiedName = require('../utils').getUnifiedName
const uppercamelcase = require('uppercamelcase')
const config = require('../config')

const component_name = process.argv[2]
const ComponentName = uppercamelcase(component_name)     
const componentCnName = process.argv[3] || ComponentName

const createFiles = [
    {
        path: path.join(config.packagesPath, component_name, 'index.js'),
        content: `import Vue from 'vue'
import ${ComponentName} from './src/main.vue'

const Component = Vue.extend(${ComponentName})
${ComponentName}.install = function(Vue) {
    Vue.component(${ComponentName}.name, ${ComponentName})
    Vue.prototype.$${getUnifiedName(component_name)} = function() {
        const instance = new Component()
        instance.$mount()
        return instance
    }
}

export default ${ComponentName}`
    }, {
        path: path.join(config.packagesPath, component_name, 'src', 'main.scss'),
        content: `@import '~@/style/common/variable.scss';
@import '~@/style/common/mixins.scss';
@import '~@/style/common/functions.scss';`
    }, {
        path: path.join(config.packagesPath, component_name, 'src', 'main.vue'),
        content: `<template>
    
</template>

<script>
export default {
    name: '${getUnifiedName(component_name)}'
}
</script>

<style lang="scss" scoped>
@import './main.scss';
</style>`
    }, {
        path: path.join(config.examplesPath, 'src', 'doc', `${component_name}.md`),
        content: `## ${ComponentName} ${componentCnName}
        `
    }
]





const componentsJson = require(path.join(config.srcPath, 'components.json'))
const docNavConfig = require(path.join(config.examplesPath, 'src', 'router', 'nav.config.json'))

if(docNavConfig[component_name]) {
    console.log(`${component_name} 已经存在，请检查目录或者components.json文件`)
    process.exit(0)
}

if(componentsJson[component_name]) {
    console.log(`${component_name} 已经存在，请检查目录或者nav.config.json文件`)
    process.exit(0)
}

createFiles.forEach(file => {
    fileSave(file.path)
    .write(file.content, 'utf8')
    .end('\n');
})


componentsJson[component_name] = {}
componentsJson[component_name].path =  `./packages/${component_name}/index.js`
componentsJson[component_name].cnName = componentCnName

docNavConfig[component_name] = {}
docNavConfig[component_name].path =  `./src/doc/${component_name}.md`
docNavConfig[component_name].cnName = componentCnName
docNavConfig[component_name].vueRouterHref = '/' + component_name

fileSave(path.join(config.srcPath, 'components.json'))
    .write(JSON.stringify(componentsJson, null, '  '), 'utf8')
    .end('\n');

fileSave(path.join(config.examplesPath, 'src', 'router', 'nav.config.json'))
    .write(JSON.stringify(docNavConfig, null, '  '), 'utf8')
    .end('\n');

console.log('组件创建完成')