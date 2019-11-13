import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import './veevalidate'

import router from './router'
import GshopHeader from './components/GshopHeader/GshopHeader.vue'
import CartControl from './components/CartControl/CartControl.vue'
import store from './store'
import * as API from './api'
import {Button} from 'mint-ui'
import './mock/mockServer'

Vue.config.productionTip = false
//定义一个全局的组件
Vue.component('GshopHeader',GshopHeader)
Vue.component('CartControl',CartControl)
Vue.component(Button.name, Button)

Vue.prototype.$API = API

const vm = new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
