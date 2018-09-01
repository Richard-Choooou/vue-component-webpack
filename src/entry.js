
//文件从 build/bin/build-entry.js生成
import $sgAlert from './packages/alert/index.js' 
import $sgMessage from './packages/message/index.js' 


const components = [$sgAlert,$sgMessage]

const install = function(Vue) {
    components.forEach(component => {
        component.install(Vue)
    })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

