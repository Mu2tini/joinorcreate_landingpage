// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    meta: {
        title: 'JoinOrCreate',
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/content',
        'nuxt-icon'
    ],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        exposeConfig: true
    }
})
