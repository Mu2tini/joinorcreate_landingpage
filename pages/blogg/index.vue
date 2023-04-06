
<template>
    <section class="py-32">
        <div class="max-w-screen-xl mx-auto px-4 md:px-8">
            <div class="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
                <h1 class="text-teal-800 text-3xl font-extrabold sm:text-4xl">Senaste blogginläggen</h1>
                <p class="text-gray-600">Här skriver vi om nyheter och ämnen som är viktiga för oss som hälsa och rörelse.
                </p>
            </div>
            <ul class="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
                <li v-for="(item, key) in data" :key="key" class="w-full mx-auto group sm:max-w-sm">
                    <NuxtLink :to="`/blogg/${item.slug}`">
                        <img :src="item.img" loading="lazy" :alt="item.title" class="w-full rounded-lg" />
                        <div class="mt-3 space-y-2">
                            <div class="flex justify-between">
                                <span class="block text-teal-800 text-sm">{{ item.updatedAt }}</span>
                            </div>
                            <h3 class="text-lg text-gray-800 duration-150 font-semibold">
                                {{ item.title }}
                            </h3>
                            <p class="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{{ item.description }}
                            </p>
                        </div>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </section>
</template>
<script setup>
useSeoMeta({
    title: 'JoinOrCreate - Blogg',
    description: () => 'Enklaste och Snabbaste sättet att organisera och hitta Event du gillar'
})
useServerSeoMeta({
    title: 'JoinOrCreate - Blogg',
    ogTitle: 'JoinOrCreate - Blogg',
    description: 'Enklaste och Snabbaste sättet att organisera och hitta Event du gillar',
    ogDescription: 'Enklaste och Snabbaste sättet att organisera och hitta Event du gillar',
    ogImage: 'https://joinorcreate.se/images/JoC_Background.png',
    twitterCard: 'summary_large_image',
})

const { data } = await useAsyncData(() => queryContent(`/blogg`).find())
</script>
