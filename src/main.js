import Vue from 'vue'
import App from '../example/demo.vue'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')
