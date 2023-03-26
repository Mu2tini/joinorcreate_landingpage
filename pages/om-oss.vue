
<template>
    <section class="py-28">
        <div class="max-w-screen-md mx-auto px-4 md:px-8">
            <div class="max-w-md">
                <h1 class="text-teal-800 text-4xl font-bold sm:text-3xl">Om Oss</h1>
            </div>
            <div class="mt-12 divide-y space-y-3">
                <div class="text-gray-600">
                    <ContentRenderer :value="data" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const { data } = await useAsyncData(() => queryContent(`/om-oss`).findOne())
</script>