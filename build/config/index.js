const path = require('path')
const basePath = path.resolve(__dirname, '../', '../')
module.exports = {
    basePath: basePath,
    srcPath: path.join(basePath, 'src'),
    examplesPath: path.join(basePath, 'examples'),
    packagesPath: path.join(basePath, 'src', 'packages'),
    componentNamespace: 'Sg'
}