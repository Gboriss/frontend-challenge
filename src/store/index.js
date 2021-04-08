import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		products: [],
		loading: true
	},
	mutations: {
		set_products: (state, products) => {
			state.products = products.map(product => {
				return {
					...product,
					like: false,
				}
			})
		},
		changeLoadingState: (state, loading) => {
			state.loading = loading
		},
		toggleLike: (state, id) => {
			let product = state.products.find(cat => cat.id === id)
			product.like = !product.like
        }
	},
	actions: {
		get_products_from_api({commit}) {
			return axios('https://api.thecatapi.com/v1/images/search?limit=10', {
				method: "GET"
			})
			.then((products) => {
				commit('set_products', products.data)
				commit('changeLoadingState', false)
				return products
			})
			.catch((error) => {
				console.log(error)
				return error
			})
		}, 
	},
	modules: {
	}
})
