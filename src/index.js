

const components = []

const install = function(Vue) {
    components.forEach(component => {
        Vue.prototype[component] = component
        component.install(Vue)
    }) 
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

