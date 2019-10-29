import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let loc = location.pathname.indexOf('/en') >= 0?'/en/':'/'

const store = new Vuex.Store({
	state: {
		routes: [{
			path: loc,
			name: 'home',
			component: () => import('../views/Home.vue'),
		}],
	},
  mutations: {
	myRoutes(state){
		console.log("create menu")
		state.routes = [{
			path: loc,
			name: 'home',
			component: () => import('../views/Home.vue'),
		},
		{
			path: loc+'about',
			name: 'about',
			component: () => import('../views/About.vue'),
		}]
	}
  },
  actions: {
	async myRoutes (context) {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(context.commit('myRoutes'))
			}, 2000)
			
		})
		
		
	}
  },
  modules: {
  }
})




export default store