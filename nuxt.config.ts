// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            siteUrl: 'https://joinorcreate.se',
            siteName: 'JoinOrCreate',
            siteDescription: 'Enklaste och Snabbaste sättet att hitta och organisera event du gillar. Med Rörelse i fokus!',
            language: 'sv-SE', // prefer more explicit language codes like `en-AU` over `en`
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/content',
        'nuxt-icon',
        'nuxt-gtag'
    ],
    extends: [
        'nuxt-seo-kit'
    ],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        exposeConfig: true
    },
    gtag: {
        id: 'G-MV9KFEWT1Z'
    }
})
