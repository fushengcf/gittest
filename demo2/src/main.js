import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { createProvider } from './vue-apollo'

import "./plugins/element.js";
import "./plugins/el-data-table.js";
import "./plugins/client.js";

Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
