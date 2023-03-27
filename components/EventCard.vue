<template>
    <div class="overflow-hidden rounded-lg shadow-md transition hover:shadow-lg w-96 border-2 border-gray-200 bg-white">
        <div class="h-12 flex items-center" :class="event.class">
            <img :src="event.creatorImage" class="w-8 rounded-full mx-3" alt="Avatar" />
            <span>{{ event.name }}</span>
        </div>

        <EventImage :title="event.title" :background-image-url="event.eventImage" :tag="event.tag">
        </EventImage>
        <div class="p-4 sm:p-6" :class="event.class">
            <div class="flex items-center mb-4">
                <Icon name="ic:baseline-access-time" size="20px" color="grey" />
                <div class="ml-4">
                    <div class="mt-0.5 text-base text-gray-900">
                        {{ futureDate() }}
                    </div>
                    <div class="block text-sm text-gray-500">
                        Kl: {{ event.time }}
                    </div>
                </div>
            </div>
            <div class="flex items-center">
                <Icon name="ic:baseline-location-on" size="20px" color="grey" />
                <div class="ml-4">
                    <div class="mt-0.5 text-base text-gray-900">
                        {{ event.location }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { EventCardModel } from "@/models/models"
import { futureDate } from '@/utils/date-functions'
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