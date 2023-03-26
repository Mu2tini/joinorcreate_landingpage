<template>
    <div class="flex justify-center min-h-[80vh] items-center bg-gray-100 px-4 py-20">
        <div class="w-full">
            <div class="mb-20">
                <h2 class="text-center text-4xl my-2" style="color: #2AC680;">Några Event</h2>
                <h4 class="text-center text-xl">Ett urval av pågående event</h4>
            </div>
            <div class="flex justify-evenly flex-wrap gap-10 flex-shrink">
                <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { EventCardModel } from "@/models/models"

const events = ref<Array<EventCardModel>>([
    {
        id: 1,
        title: "Spela fotboll",
        creatorImage: "images/person1.png",
        location: "",
        name: "Anders Karlsson",
        tag: "Sports, Fotboll",
        eventImage: "images/football.png",
        class: 'joc-left-border-red'
    },
    {
        id: 2,
        title: "Spela fotboll",
        creatorImage: "images/person2.png",
        location: "",
        name: "Niklas Antonsson",
        tag: "Sports, Fotboll",
        eventImage: "images/concert.png",
        class: 'joc-left-border-green'
    },
    {
        id: 3,
        title: "Spela fotboll",
        creatorImage: "images/person3.png",
        location: "",
        name: "Fredrik Nilsson",
        tag: "Sports, Fotboll",
        eventImage: "images/bicycle.png",
        class: 'joc-left-border-grey'
    },
])
</script>

<style scoped></style>
