<template>
<div id="app">
	<header>
		<div class="topMenu">
			<button class="buttonCats"
				v-for="name in filters"
				:key="name"
				@click="select(name)"
				:class="{ active: filter === name }"
			>{{ name }}</button>
		</div>
	</header>
		<div class="center">
			<ul>
				<Gallery
					v-for="product in products"
					:key="product.id"
					:product="product"
				/>
			</ul>
		</div>
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
					// console.log()
				}
			})    
	},

}
</script>

<style lang="scss">
@import './styles/reset.css';

#app {
	width: 100%;
	margin: 0 auto;
}
header {
	width: 100%;
	height: 64px;
	margin-bottom: 53px;
	background-color: #2196F3;
	box-shadow: 0 0 10px rgba(0,0,0,0.5);
	.topMenu {
		margin-left: 104px;

		.buttonCats {
			height: 64px;
			background-color: #2196F3;
			color:rgba(255, 255, 255, 0.7);
			font-size: 14px;
			line-height: 21px;
			text-align: center;
			padding: 20px;
			&:active, 
			&:hover,
			&.active {
				color: #fff;
				background-color: #1E88E5;
				transition: background-color, color .5s;
			}

		}
	}
}
.center {
	max-width: 1440px;
	width: 100%;
	margin: 0 auto;
	ul {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		gap: 52px 32px;
	
		margin-left: 64px;
	}
}


</style>
