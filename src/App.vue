<template>
<div id="app">
	<header>
		<div class="center">
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
					v-for="(img, index) in images"
					:key="index"
					:img="img"
				/>
			</ul>
			<p 
				:class="{ visible: loading }" 
			>... загружаем еще котиков ...</p>
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
			filters: ['Все котики', 'Любимые котики'],
			loading: false
		}
	},
	computed: {
		images() {
			switch (this.filter) {
				case 'Любимые котики':
					return this.$store.state.images.filter(img => img.like)
				default:
					return this.$store.state.images
			}
		}
	},	
	methods: {
		getLimit() {
			let ul = this.$el.querySelector('ul')
			let cardWidth = ul.offsetWidth / 5
			let cardHeight = cardWidth + 16		
			let y = Math.ceil(window.innerHeight / cardHeight)
			let x = Math.ceil(ul.offsetWidth / cardWidth)
			return x * y
		},
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
			'getimagesFromApi'
		]),
		
	},
	mounted() {
		this.limit = this.getLimit()
		this.getimagesFromApi(this.limit * 2)
		let loadingMessage = this.$el.querySelector('p')

		window.addEventListener('scroll', async () => {

			if (this.loading) return 

			if (window.scrollY + window.innerHeight > loadingMessage.offsetTop) {
				this.loading = true
				await this.getimagesFromApi(this.limit)
				this.loading = false
			}

		})
	}
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
.center {
	max-width: 1440px;
	width: 100%;
	margin: 0 auto;
	padding: 0 62px;
	box-sizing: border-box;
	ul {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		gap: 48px 32px;
		width: 100%;
		@media (max-width: 720px) {
			display: flex;
			flex-direction: column;
			margin-bottom: 30px;
		}
	}
	p {
		opacity: 0;
		text-align: center;
		.visible {
			opacity: 1;
		}
	}
}
</style>
