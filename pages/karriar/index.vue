
<template>
    <section class="py-28">
        <div class="max-w-screen-lg mx-auto px-4 md:px-8">
            <div class="max-w-md">
                <h1 class="text-teal-800 text-3xl font-bold sm:text-3xl">Lediga Tjänster</h1>
                <p class="text-gray-600 mt-2">Vi söker för närvarande talangfulla mjukvaruutvecklare, designers och
                    eventskapare för att
                    hjälpa oss i våra uppdrag och för att växa.</p>
            </div>
            <ul class="mt-12 divide-y space-y-3">

                <li v-for="(item, idx) in data" :key="idx"
                    class="px-4 py-5 duration-150 hover:border-white hover:rounded-xl hover:bg-gray-50">
                    <NuxtLink :to="`/karriar/${item.slug}`" class="space-y-3">
                        <div class="flex items-center gap-x-3">
                            <div>
                                <span class="block text-sm text-teal-600 font-medium">{{ item.company }}</span>
                                <h3 class="text-base text-gray-800 font-semibold mt-1">{{ item.title }}</h3>
                            </div>
                        </div>
                        <p class="text-gray-600 sm:text-sm">
                            {{ item.description }}
                        </p>
                        <div class="text-sm text-gray-600 flex items-center gap-6">
                            <span class="flex items-center gap-2">
                                <svg class="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M6 6V5C6 3.34315 7.34315 2 9 2H11C12.6569 2 14 3.34315 14 5V6H16C17.1046 6 18 6.89543 18 8V11.5708C15.5096 12.4947 12.8149 12.9999 10 12.9999C7.18514 12.9999 4.49037 12.4947 2 11.5707V8C2 6.89543 2.89543 6 4 6H6ZM8 5C8 4.44772 8.44772 4 9 4H11C11.5523 4 12 4.44772 12 5V6H8V5ZM9 10C9 9.44772 9.44772 9 10 9H10.01C10.5623 9 11.01 9.44772 11.01 10C11.01 10.5523 10.5623 11 10.01 11H10C9.44772 11 9 10.5523 9 10Z"
                                        fill="#9CA3AF" />
                                    <path
                                        d="M2 13.6923V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V13.6923C15.4872 14.5404 12.7964 14.9999 10 14.9999C7.20363 14.9999 4.51279 14.5404 2 13.6923Z"
                                        fill="#9CA3AF" />
                                </svg>
                                {{ item.job_type }}
                            </span>
                            <span class="flex items-center gap-2">
                                <svg class="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M5.05025 4.05025C7.78392 1.31658 12.2161 1.31658 14.9497 4.05025C17.6834 6.78392 17.6834 11.2161 14.9497 13.9497L10 18.8995L5.05025 13.9497C2.31658 11.2161 2.31658 6.78392 5.05025 4.05025ZM10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z"
                                        fill="#9CA3AF" />
                                </svg>

                                {{ item.location }}
                            </span>
                        </div>
                    </NuxtLink>
                </li>

            </ul>
        </div>
    </section>
</template>

<script setup>
useSeoMeta({
    title: 'JoinOrCreate - Karriär',
    ogTitle: 'JoinOrCreate - Karriär',
    description: 'Enklaste och Snabbaste sättet att organisera och hitta Event du gillar',
    ogDescription: 'Enklaste och Snabbaste sättet att organisera och hitta Event du gillar',
    ogImage: 'https://joinorcreate.se/images/background.jpg',
    twitterCard: 'summary_large_image',
})
const { data } = await useAsyncData(() => queryContent(`/karriar`).find())

</script>