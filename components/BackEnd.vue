<template>
  <div class="flex items-center justify-center">
    <div class="rounded-full bg-dark min-w-12 min-h-12 flex justify-center">
      <img src="/assets/icons/Backend.svg"  class="w-6" alt="">
    </div>
    <div class="ml-4">
      <h1 class="text-xl">Back-End Development</h1>
      <p class="text-sm">
        <a :class="linkClass" href="https://www.php.net" target="_blank" rel="noopener noreferrer">PHP</a>
        •
        <a :class="linkClass" href="https://laravel.com" target="_blank" rel="noopener noreferrer">Laravel</a>
        •
        <a :class="linkClass" href="https://www.python.org" target="_blank" rel="noopener noreferrer">Python</a>
        •
        <a :class="linkClass" href="https://nodejs.org" target="_blank" rel="noopener noreferrer">Node.js</a>
        •
        <a :class="linkClass" href="https://inertiajs.com" target="_blank" rel="noopener noreferrer">Inertia.js</a>
        •
        <a :class="linkClass" href="https://expressjs.com" target="_blank" rel="noopener noreferrer">Express.js</a>
        •
        <a :class="linkClass" href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">MySQL</a>
        •
        <a :class="linkClass" href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer">MongoDB</a>
      </p>
    </div>
  </div>
</template>

<script setup>
const linkClass = "relative after:absolute after:top-5 cursor-pointer after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100";
</script>

<style scoped></style>
