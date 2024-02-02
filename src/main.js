import Vue from 'vue'
import App from './Uploader.vue'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
