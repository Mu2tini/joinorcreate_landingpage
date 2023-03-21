<template>
    <div class="min-h-[30vh] flex flex-col justify-center py-6" style="background-color: #2AC680;">
        <div class="w-full flex h-full flex-wrap flex-shrink p-4 gap-10 justify-evenly">
            <div class="w-full md:w-1/3 flex justify-center items-center h-full">
                <div class="text-center md:text-left">
                    <h1 class="text-4xl mb-6">
                        <span class="text-red-600">Join</span>
                        <span class="text-teal-800">Or</span>
                        <span class="text-white">Create</span>
                    </h1>
                    <h3 class="text-white text-xl font-light"><span class="font-medium">Enklaste</span> och
                        <span class="font-medium">Snabbaste</span> sättet
                        att hitta
                    </h3>
                    <h3 class="text-white text-xl font-light">och organisera event du gillar!</h3>
                </div>
            </div>
            <div class="w-full sm:w-1/4 flex justify-center items-center h-full text-white">
                <div>
                    <h3 class="mb-4 text-xl">JoinOrCreate</h3>
                    <ul>
                        <li>
                            <NuxtLink class="link" to="/">Start</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="link" to="/about-us">Om Oss</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="link" to="/faq">FAQ</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="w-full  sm:w-1/4 flex justify-center items-center h-full text-white">
                <div>
                    <h3 class="mb-4 text-xl">Övrigt</h3>
                    <ul>
                        <li>
                            <NuxtLink class="link" to="/blog">Blog</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="link" to="/career">Karriär</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="link" to="/privacy-policy">Användarvillkor</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style>
.router-link-active {
    background-color: blue;
}

.link:hover {
    background-color: red;
}
</style>