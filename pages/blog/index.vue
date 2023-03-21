<template>
    <div>
        <h1>Blog</h1>
        <ul>
            <li v-for="b in data">{{ b.title }}<NuxtLink :to="`/blog/${b.slug}`">Läs Mer</NuxtLink>
            </li>
        </ul>
        <!-- <pre>{{ data }}</pre> -->
    </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData(() => queryContent(`/blog`).find())

</script>

<style scoped></style>