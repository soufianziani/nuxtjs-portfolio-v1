<template>
  <div class="flex items-center justify-start">
    <div class="rounded-full bg-dark min-w-12 min-h-12 flex justify-center">
      <img src="/assets/icons/Frontend.svg" class="w-6" alt="">
    </div>
    <div class="ml-4">
      <h1 class="text-xl">Front-End Development</h1>
      <p class="text-sm">
        <a :class="linkClass" href="https://javascript.com" target="_blank" rel="noopener noreferrer">JavaScript</a>
        •
        <a :class="linkClass" href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a>
        •
        <a :class="linkClass" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React.js</a>
        •
        <a :class="linkClass" href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js</a>
        •
        <a :class="linkClass" href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer">Nuxt.js</a>
        •
        <a :class="linkClass" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">CSS</a>
        •
        <a :class="linkClass" href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">Sass</a>
        •
        <a :class="linkClass" href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>
        •
        <a :class="linkClass" href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a>
      </p>
    </div>
  </div>
</template>

<script setup>
const linkClass = "relative after:absolute after:top-5 cursor-pointer after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100";
</script>

<style scoped></style>
