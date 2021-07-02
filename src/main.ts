import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import App from './App.vue'

import router from './router/index'

Vue.use(VueCompositionAPI)

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')




