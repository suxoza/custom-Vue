import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store'
Vue.use(VueRouter)




Vue.prototype.$langVar = location.pathname.replace('/en','')




const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: store.state.routes
})


export default router
