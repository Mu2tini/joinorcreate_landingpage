<template>
    <section class="leading-relaxed max-w-screen-xl my-24 mx-auto px-4 md:px-8">
        <div class="space-y-3 text-center">
            <h1 class="text-4xl text-teal-800 font-bold">
                Vanliga frågor
            </h1>
            <p class="text-gray-600 max-w-lg mx-auto text-lg">
                Här är svar på vanliga frågor. Är du fortfarande förvirrad?<br> Tveka inte att kontakta oss.
            </p>
        </div>
        <div class="mt-14 max-w-2xl mx-auto">
            <FaqsCard v-for="(item, idx) in faqsList" :key="idx" :idx="idx" :faqsList="item" />
        </div>
    </section>
</template>

<script setup>
import FaqsCard from '~~/components/FAQ/FaqsCard.vue'
useSeoMeta({
    title: 'JoinOrCreate - FAQ',
    description: () => `Enklaste och Snabbaste sättet att organisera och hitta Event du gillar`
})
const faqsList = [
    {
        q: "Hur installerar jag JoinOrCreate som en app?",
        a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question."
    },
    {
        q: "Vad betyder den gröna, röda, och gråa färgen på eventen?",
        a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator."
    },
    {
        q: "Hur aktiverar jag notiser i appen?",
        a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated."
    },
    {
        q: "Hur tar jag bort en användare från eventet?",
        a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with)."
    },
    {
        q: "Vilka plattformar och enheter går det att använda JoinOrCreate på?",
        a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires."
    }
]
</script>