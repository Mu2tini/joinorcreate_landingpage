<template>
    <div class="min-h-[70vh] flex justify-center items-center bg-white px-4 py-20">
        <div class="w-full">
            <div class="mb-20">
                <h2 class="text-center text-4xl my-2" style="color: #2AC680;">Återkoppling från användare</h2>
                <h4 class="text-center text-xl">Vad tycker våra användare om JoinOrCreate</h4>
            </div>
            <div class="flex justify-evenly flex-wrap gap-10 flex-shrink">
                <TestimonalCard v-for="testimonal in testimonals" :key="testimonal.id" :testimonal="testimonal">
                </TestimonalCard>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TestimonalCardModel } from '~/models/models'
const testimonals = ref<Array<TestimonalCardModel>>([
    {
        id: 1,
        testimonal: "Spela fotboll",
        creatorImage: "images/person3.png",
        name: "Fredrik Nilsson",
    },
    {
        id: 2,
        testimonal: "Spela fotboll",
        creatorImage: "images/person3.png",
        name: "Fredrik Nilsson",
    },
    {
        id: 3,
        testimonal: "Spela fotboll",
        creatorImage: "images/person3.png",
        name: "Fredrik Nilsson",
    },
])
</script>

<style scoped></style>