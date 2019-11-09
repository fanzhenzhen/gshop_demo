import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'

import router from './router'
import GshopHeader from './components/GshopHeader/GshopHeader.vue'
import store from './store'

Vue.config.productionTip = false
//定义一个全局的组件
Vue.component('GshopHeader',GshopHeader)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
