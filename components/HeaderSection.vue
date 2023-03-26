<template>
    <header aria-label="Site Header" style="background-color: #2AC680;">
        <div class="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
            <div class="flex h-full items-center justify-between">
                <div class="md:flex md:items-center md:gap-12">
                    <a href="/">
                        <img src="~assets/images/joc-logo.png" class="w-14 h-14 my-4" />
                    </a>
                </div>

                <div class="flex items-center gap-4">
                    <div class="flex gap-4">
                        <a class="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                            href="https://joinorcreate-dev.web.app/#/auth/login">
                            Logga In
                        </a>

                        <a class="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-teal-600"
                            href="https://joinorcreate-dev.web.app/#/auth/register">
                            Registrera
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </header>
</template>