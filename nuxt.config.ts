// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app:{
    head: {
      title: 'Soufiane ZIANI - Junior Full Stack Developer & Graphic Designer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Hi! I’m Soufiane ZIANI ✌🏻. Junior Full Stack Developer and Graphic Designer. I specialize in Laravel and Vue.js, crafting seamless digital experiences. With expertise in Figma, I merge functionality with aesthetics, creating intuitive interfaces that captivate users.' },
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})