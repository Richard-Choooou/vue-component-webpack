const config = require('./config')
const uppercamelcase = require('uppercamelcase')
module.exports.getUnifiedName = function(componentName) {
    if(!componentName) {
        console.log('get unified name failed')
        process.exit(0)
    }
    return config.componentNamespace + uppercamelcase(componentName)
}