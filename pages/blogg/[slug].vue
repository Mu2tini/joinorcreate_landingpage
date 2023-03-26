<template>
    <h1>{{ data.title }}</h1>
    <img :src="data.img" />
    <ContentRenderer :value="data" />
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const { data } = await useAsyncData(() => queryContent(`/blogg/${route.params.slug}`).findOne())

</script>