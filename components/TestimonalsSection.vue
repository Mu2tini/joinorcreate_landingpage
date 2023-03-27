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
        creatorImage: "images/person6.png",
        name: "Samule Linderoth",
        testimonal: "Så häftigt att aktiviteter kan vara i 3 olika stadier och bara kommer att inträffa om det minsta antalet deltagare uppnås"
    },
    {
        id: 2,
        testimonal: "Jag älskar att jag kan få exakt den typen av människor jag söker till mina event eftersom de måste uppfylla eventkraven",
        creatorImage: "images/person4.png",
        name: "Linda Pettersson",
    },
    {
        id: 3,
        testimonal: "Oavsett var jag är så hittar jag alltid en aktivitet att delta i genom JoinOrCreate",
        creatorImage: "images/person2.png",
        name: "Alvaro Rodriguez",
    },
])
</script>

<style scoped></style>