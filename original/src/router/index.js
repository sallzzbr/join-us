import Vue from 'vue'
import Router from 'vue-router'
import Common from '@/components/Common'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Common',
      component: Common
    }
  ]
})