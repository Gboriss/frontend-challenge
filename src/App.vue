<template>
<div id="app">
	<header>
		<div class="topMenu">
			<button class="lovecats"
				v-for="name in filters"
				:key="name"
				@click="select(name)"
				:class="{ active: filter === name }"
			>{{ name }}</button>
		</div>
	</header> 
		<ul>
			<Gallery
				v-for="product in products"
				:key="product.id"
				:product="product"
			/>
		</ul>
</div>
</template>

<script>
import Gallery from '@/components/Gallery'
import { mapActions, mapState } from 'vuex'

export default {
    name: 'App',
    components: {
        Gallery,
    },
    data() {
		return {
            show: false,
			filter: 'Все котики',
			filters: ['Все котики', 'Любимые котики']
		}
	},
	computed: {
		// products() {
		// 	return this.$store.state.products
		// },
		...mapState([
			'loading'
		]),
		products() {
			switch (this.filter) {
				case 'Любимые котики':
					return this.$store.state.products.filter(product => product.like)
				default:
					return this.$store.state.products
			}
		}
	},	
	methods: {
		like(id) {
            this.$store.commit('toggleLike', id)
        },
		select(name) {
			this.filter = name
		},
		open() {
			this.show = true
		},
		...mapActions([
			'get_products_from_api'
		]),
		
	},
	mounted() {
		this.get_products_from_api()
			.then((response) => {
				if (response.data) {
					// console.log('dara.arrived')
				}
			})    
	},

}
</script>

<style lang="scss">
button {
	margin: 40px;
	padding: 40px
}

</style>
