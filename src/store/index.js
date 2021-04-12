import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		images: [],
	},
	mutations: {
		setImages: (state, images) => {

			let newimages = images.map(img => {				
				return {
					...img,
					like: false,
				}
			})
					
			state.images.push(...newimages)
		},
		
		toggleLike: (state, id) => {
			let img = state.images.find(cat => cat.id === id)
			img.like = !img.like
        }
	},
	actions: {
		getimagesFromApi({commit}, limit) {
			return axios(`https://api.thecatapi.com/v1/images/search?limit=${limit}`, {
				method: "GET"
			})
			.then((images) => {
				commit('setImages', images.data)
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
