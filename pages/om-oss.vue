
<template>
    <section class="py-28">
        <div class="max-w-screen-md mx-auto px-4 md:px-8">
            <div class="max-w-md">
                <h1 class="text-4xl text-teal-800 font-bold">
                    Om Oss
                </h1>
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
useMeta({
    title: 'JoinOrCreate - Om Oss'
})
const { data } = await useAsyncData(() => queryContent(`/om-oss`).findOne())
</script>