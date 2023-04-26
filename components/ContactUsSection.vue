<template>
    <div
        class="min-h-[70vh] flex justify-center items-center bg-no-repeat bg-cover bg-[url('~/assets/images/JoC_Background.png')]">
        <div class="w-full h-full backdrop-brightness-50 flex items-center">
            <div class="w-full flex flex-col items-center py-20 px-4">
                <div class="mb-16">
                    <h2 class="text-center text-4xl my-2 text-bold" style="color: #2AC680;">Kontakta Oss</h2>
                    <h4 class="text-center text-xl text-white">Vi vill höra från dig vad du tycker och bli bättre</h4>
                </div>
                <div class="flex justify-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
                    <div class="w-full flex justify-center">
                        <form class="space-y-4 w-full">
                            <div>
                                <label class="sr-only" for="name">Name</label>
                                <input class="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Name" type="text"
                                    id="name" />
                            </div>

                            <div>
                                <label class="sr-only" for="email">Email</label>
                                <input class="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Email"
                                    type="email" id="email" />
                            </div>

                            <div>
                                <label class="sr-only" for="message">Meddelande</label>

                                <textarea class="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Meddelande"
                                    rows="8" id="message"></textarea>
                            </div>

                            <div class="mt-4 w-full">
                                <button @click="onSubmit" style="background-color: #2AC680;"
                                    class="block w-full rounded-lg px-5 py-3 font-medium text-white">
                                    Skicka
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const onSubmit = () => {

}
</script>

<style scoped></style>