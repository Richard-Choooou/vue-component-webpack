const path = require('path')
const fileSave = require('file-save')
const getUnifiedName = require('../utils').getUnifiedName
const config = require('../config')

const componentName = process.argv[2]
const componentCnName = process.argv[3] || componentName

const createFiles = [
    {
        path: path.join(config.packagesPath, componentName, 'index.js'),
        content: `import Vue from 'vue'
import ${componentName} from './src/main.vue'
const Component = Vue.extend(${componentName})
${componentName}.install = function(Vue) {
    Vue.prototype.${getUnifiedName(componentName)} = Component
}

export default ${componentName}`
    }, {
        path: path.join(config.packagesPath, componentName, 'src', 'main.scss'),
        content: `@import '~@/style/common/variable.scss';
@import '~@/style/common/mixins.scss';
@import '~@/style/common/functions.scss';`
    }, {
        path: path.join(config.packagesPath, componentName, 'src', 'main.vue'),
        content: `<template>
    
</template>

<script>
export default {
    name: '${componentName}'
}
</script>

<style lang="scss" scoped>
@import './main.scss';
</style>`
    }
]





const componentsJson = require(path.join(config.srcPath, 'components.json'))

if(componentsJson[componentName]) {
    console.log(`${componentName} 已经存在，请检查目录或者components.json文件`)
    process.exit(0)
}

createFiles.forEach(file => {
    fileSave(file.path)
    .write(file.content, 'utf8')
    .end('\n');
})
    
componentsJson[componentName] =  `./packages/${componentName}/index.js`


fileSave(path.join(config.srcPath, 'components.json'))
    .write(JSON.stringify(componentsJson, null, '  '), 'utf8')
    .end('\n');

console.log('组件创建完成')