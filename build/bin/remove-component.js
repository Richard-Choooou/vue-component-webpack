const path = require('path')
const fsdo = require('fs-extra')
const fileSave = require('file-save')
const config = require('../config')

const component_name = process.argv[2]

const files = [{
    path: path.join(config.packagesPath, component_name),
    type: 'dir'
}, {
    path: path.join(config.examplesPath, 'src', 'doc', `${component_name}.md`),
    type: 'file'
}, {
    path: path.join(config.srcPath, 'components.json'),
    type: 'json',
    key: component_name
}, {
    path: path.join(config.examplesPath, 'src', 'router', 'nav.config.json'),
    type: 'json',
    key: component_name
}]

files.forEach(file => {
    switch(file.type) {
        case 'dir':
        case 'file':
            removeFiles(file.path)
            break;
        case 'json':
            deleteJsonItem(file.path, file.key);
            break;
        default:
            console.log('unknow file type')
            process.exit(0);
            break;
    }
})

function removeFiles(path) {
    fsdo.removeSync(path)
}

function deleteJsonItem(path, key) {
    const targetJson = require(path)

    if(targetJson[key]) {
        delete targetJson[key]
    }
    
    fileSave(path)
        .write(JSON.stringify(targetJson, null, '  '), 'utf8')
        .end('\n');
}

console.log('组件删除完成')