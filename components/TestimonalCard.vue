<template>
    <div
        class="p-6 overflow-hidden rounded-lg shadow-md transition hover:shadow-lg w-96 border-2 border-green-500 bg-white flex flex-col gap-6">
        <p class="italic text-lg">"{{ testimonal.testimonal }}"</p>
        <div class="flex">
            <img v-for="count in 5" src="~/assets/icons/star.svg" :key="count" />
        </div>

        <div class="h-12 flex items-center">
            <img :src="testimonal.creatorImage" class="w-12 rounded-full mr-5" alt="Avatar" />
            <span class="text-xl">{{ testimonal.name }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { TestimonalCardModel } from "@/models/models"

const props = defineProps({
    testimonal: { type: Object as PropType<TestimonalCardModel>, required: true },
})
</script>

<style scoped></style>