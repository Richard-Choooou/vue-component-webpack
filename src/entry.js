
//文件从 build/bin/build-entry.js生成
import SgAlert from './packages/alert/index.js' 
import SgDialog from './packages/dialog/index.js' 
import SgTable from './packages/table/index.js' 


const components = [SgAlert,SgDialog,SgTable]

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

