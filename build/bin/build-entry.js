const path = require('path')
const fileSave = require('file-save')
const config = require('../config')
const render = require('json-templater/string');
const getUnifiedName = require('../utils').getUnifiedName
const components = require(path.join(config.srcPath, 'components.json'))

const componentNames = Object.keys(components).map(name => getUnifiedName(name))

const importSection = "import {{name}} from '{{path}}' \n"
let include = ''

for(let name in components) {
    include += render(importSection, {
        name: getUnifiedName(name),
        path: components[name].path
    })
}


let template = `
//文件从 build/bin/build-entry.js生成
{{include}}

const components = [${componentNames}]

const install = function(Vue) {
    components.forEach(component => {
        component.install(Vue)
    })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install
}
`
template = render(template, {
    include
})
fileSave(path.join(config.srcPath, 'entry.js'))
    .write(template, 'utf8')
    .end('\n')