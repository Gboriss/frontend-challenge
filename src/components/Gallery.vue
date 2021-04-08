<template>
<li
    @click="like(product.id)"
    :class="{ liked: product.like }"
    :value="product.like"
>
	<img alt="beer image" :src="product.url" height="150">
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
    li.liked {
        border: 2px solid red;
    }

</style>