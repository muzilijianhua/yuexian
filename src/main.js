// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import '../src/assets/mui/css/mui.css'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/mui/css/icons-extra.css'
import mui from './assets/mui/js/mui'







Vue.prototype.mui = mui
mui.init();

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(Mint)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})