import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import store from './index.js'
import router from './routes'

Vue.config.productionTip = false


Vue.use(VueRouter)

new Vue({
  store,
  render: h => h(App),
  vuetify,
  router,
}).$mount('#app')
