<template>
<li>
	<img alt="beer image" :src="product.url" height="225" width="249">
    <div
        @click="like(product.id)"
        :class="{ liked: product.like }"
        :value="product.like"
    >
        <button class="buttonHeart" v-if="!product.like"><img src='../assets/images/heart.png'></button>
        <button class="buttonHeart" v-if="product.like"><img src="../assets/images/heartall.png"></button>
    </div>
</li>
</template>

<script>
export default {
    name: 'Gallery',
    props: ['product'],
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
        transition: .7s;
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
				transition: opacity .6s;
            }
        }
    }

    li.liked {
        border: 2px solid red;
    }

</style>