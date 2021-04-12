<template>
<li 
	@click="like(img.id)"
	:class="{ liked: img.like }"
	:value="img.like"
>
	<img class="listItem" alt="cat image" :src="img.url">
	<button class="buttonHeart" v-if="!img.like"><img src='../assets/images/heart.png'></button>
	<button class="buttonHeart" v-if="img.like"><img src="../assets/images/heartall.png"></button>
</li>
</template>

<script>
export default {
	name: 'Gallery',
	props: ['img'],
    methods: {
        like(id) {
            this.$store.commit('toggleLike', id)
        }
    }

}
</script>

<style lang="scss" scoped>
li {
    position: relative;
    transition: .3s;
	cursor: pointer;
	font-size: 0;
	.listItem {
		display: block;
		width: 100%;
		height: 100%;
		aspect-ratio: 1/1;
		object-fit: cover;
		object-position: center;
	}
	.buttonHeart {
		position: absolute;
		bottom: 19px;
		right: 19px;
		opacity: 0;
    }
	&:hover,
	&:active {
		transform: scale(1.1);
		box-shadow: 0 0 10px rgba(0,0,0,0.5);
		.buttonHeart {
			opacity: 1;
			transition: opacity .3s;
		}
    }
}
</style>