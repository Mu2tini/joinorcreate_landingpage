<template>
    <div class="overflow-hidden rounded-lg shadow-md transition hover:shadow-lg w-96 border-2 border-gray-200 bg-white">
        <div class="h-12 flex items-center" :class="event.class">
            <img :src="event.creatorImage" class="w-8 rounded-full mx-3" alt="Avatar" />
            <span>{{ event.name }}</span>
        </div>
        <img alt="Football" :src="`${event.eventImage}`" class="h-40 w-full object-cover" />
        <div class="p-4 sm:p-6" :class="event.class">
            <time datetime="2022-10-10" class="block text-xs text-gray-500">
                10th Oct 2022
            </time>

            <a href="#">
                <h3 class="mt-0.5 text-lg text-gray-900">
                    How to position your furniture for positivity
                </h3>
            </a>

            <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                dolores
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { EventCardModel } from "@/models/models"

const props = defineProps({
    event: { type: Object as PropType<EventCardModel>, required: true },
})
</script>

<style scoped>
.joc-left-border-grey {
    border-left: solid 5px #4E5A63 !important;
}

.joc-left-border-green {
    border-left: solid 5px #50BC50 !important;
}

.joc-left-border-red {
    border-left: solid 5px #EA2D55 !important;
}
</style>