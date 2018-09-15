import Vue from 'vue'
import App from './src/app.vue'
import SgUI from '../src/entry'
import router from './src/router/router.config'
// import SgUI from '../dist/demo.m.ui'

Vue.use(SgUI);

new Vue({
    el: '#app',
    render: h => h(App),
    router
})