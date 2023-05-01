
<template>
    <section class="py-28">
        <div class="max-w-screen-md mx-auto px-4 md:px-8">
            <div class="max-w-md">
                <h1 class="text-4xl text-teal-800 font-bold">
                    Om Oss
                </h1>
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
useSeoMeta({
    title: 'JoinOrCreate - Om Oss',
    ogTitle: 'JoinOrCreate - Om Oss',
    description: 'Enklaste och Snabbaste sättet att organisera och hitta Event du gillar',
    ogDescription: 'Enklaste och Snabbaste sättet att organisera och hitta Event du gillar',
    ogImage: 'https://joinorcreate.se/images/background.jpg',
    twitterCard: 'summary_large_image',
})
const { data } = await useAsyncData(() => queryContent(`/om-oss`).findOne())
</script>