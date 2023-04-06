<template>
    <section class="py-28">
        <div class="max-w-screen-md mx-auto px-4 md:px-8">
            <div class="max-w-lg">
                <h1 class="text-4xl text-teal-800 font-bold mb-6">
                    {{ data.title }}
                </h1>
            </div>
            <div>
                <img :src="data.img" class="w-full rounded-lg" />
            </div>
            <div class="mt-12 divide-y space-y-3">
                <div class="text-gray-600">
                    <ContentRenderer :value="data" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const { data } = await useAsyncData(() => queryContent(`/blogg/${route.params.slug}`).findOne())
useMeta({
    title: `Blogg - ${data.title}`
})
</script>

<style scoped>
:deep(h3) {
    margin-top: 1rem;
    margin-bottom: 1rem;
}
</style>