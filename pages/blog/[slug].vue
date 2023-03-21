<template>
    <h1>{{ data.title }}</h1>
    <img :src="data.img" />
    <ContentRenderer :value="data" />
    {{ name }}
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const { data } = await useAsyncData(() => queryContent(`/blog/${route.params.slug}`).findOne())

</script>

<style scoped>
h1,
:deep(h1) {
    font-size: 30px;
}
</style>