import Vue from 'vue'
import App from './App.vue'
import router from './router'

import store from './store/store'


// ======= LOAD MATERIAL KIT =====

// import VueMaterial from "vue-material";
import { MdButton, MdContent, MdTabs, MdToolbar, MdApp, MdAvatar } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default-dark.css'
import 'vue-material/dist/theme/default.css'

// Vue.use(MaterialKit)
// Vue.use(VueMaterial)

Vue.use(MdToolbar)
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(MdApp)
Vue.use(MdAvatar)

// === END OF MK =====


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
