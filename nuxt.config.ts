import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/nuxt.ico' },
      ],
    },
  },
  modules: [
    '@nuxt/test-utils/module',
    '@nuxt/test-utils/module',
    '@vueuse/nuxt',
    'shadcn-nuxt',
    '@nuxt/icon',
  ],
  css: ['~/assets/css/main.css'],
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  compatibilityDate: '2025-06-01',
})
