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
        location: "Bangatan 6, 722 26 Västerås",
        name: "Anders Karlsson",
        tag: "Fotboll, Spontant",
        eventImage: "images/football.png",
        class: 'joc-left-border-red',
        time: "12:00 - 14:00"
    },
    {
        id: 2,
        title: "Barnlek i parken för föräldralediga",
        creatorImage: "images/person5.png",
        location: "Skolgatan , 745 31 Enköping",
        name: "Anna Johansson",
        tag: "Barnlek, Spontant",
        eventImage: "images/kids-playing-park2.jpg",
        class: 'joc-left-border-green',
        time: "9:00 - 10:00"

    },
    {
        id: 3,
        title: "Terrängcykling",
        creatorImage: "images/person3.png",
        location: "Bredsandsvägen 22, 749 48 Enköping",
        name: "Fredrik Nilsson",
        tag: "Cykla, Spontant",
        eventImage: "images/bicycle.png",
        class: 'joc-left-border-grey',
        time: "15:00 - 17:00"
    },
])
</script>

<style scoped></style>
