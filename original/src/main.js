import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlay, faChevronUp, faChevronDown, faPlus, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import VueRouter from 'vue-router'
import router from './router/index.js'
import './assets/scss/main.scss';

library.add(faPlay)
library.add(faChevronUp)
library.add(faChevronDown)
library.add(faChevronLeft)
library.add(faChevronRight)
library.add(faPlus)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
Vue.use(VueRouter)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
