import Vue from 'vue'
import App from './App.vue'
//import router from './router'
import store from './store'
Vue.config.productionTip = false



import VueRouter from 'vue-router'
const loadAllVue = () => {
	Vue.prototype.$langVar = location.pathname.replace('/en','')
	const router = new VueRouter({
		mode: 'history',
		base: process.env.BASE_URL,
		routes: store.state.routes
	})

	Vue.use(VueRouter)

	const v = new Vue({

	render: h => h(App),
		beforeCreate: (() => {
			console.log("before create")

		}),
		mounted: (() => {
			console.log(store.state.routes)
		}),
		computed: {

		},
		router,
		store,

	})
	v.$mount("#app")
	router.beforeEach((to, from, next) => {
		Vue.prototype.$langVar = '/'+to.name
		console.log(Vue.prototype.$langVar)
		next()
	})
}

store.dispatch('myRoutes').then(loadAllVue)

